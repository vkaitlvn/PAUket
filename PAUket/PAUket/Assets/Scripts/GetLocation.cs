using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GetLocation: MonoBehaviour
{

    // INITIAL CODE FROM https://nosuchstudio.medium.com/how-to-access-gps-location-in-unity-521f1371a7e3
    // INITIAL FORM BY "No Such Dev"
    // Modified by Dillon Montefusco

    [SerializeField] private float GPSAccuracy;

    [SerializeField] private float latitude;
    [SerializeField] private float longitude;
    [SerializeField] private float altitude;

    [SerializeField] private float UNITYLatitude;
    [SerializeField] private float UNITYLongitude;
    [SerializeField] private float UNITYAltitude;

    [SerializeField] private Text notOnCampus;

    private bool locationServiceOn;

    IEnumerator Start() 
    {
    locationServiceOn = false;
    // Uncomment if you want to test with Unity Remote
    #if UNITY_EDITOR
        yield return new WaitWhile(() => !UnityEditor.EditorApplication.isRemoteConnected);
        yield return new WaitForSecondsRealtime(1f);
    #endif


    #if UNITY_EDITOR
        // No permission handling needed in Editor
    #elif UNITY_ANDROID
        if (!UnityEngine.Android.Permission.HasUserAuthorizedPermission(UnityEngine.Android.Permission.CoarseLocation))
        {
            UnityEngine.Android.Permission.RequestUserPermission(UnityEngine.Android.Permission.CoarseLocation);
        }

        // First, check if user has location service enabled
        if (!UnityEngine.Input.location.isEnabledByUser) 
        {
            // TODO Failure
            Debug.LogFormat("Android and Location not enabled");
            yield break;
        }

     #elif UNITY_IOS
        if (!UnityEngine.Input.location.isEnabledByUser)
        {
            // TODO Failure
            Debug.LogFormat("IOS and Location not enabled");
            yield break;
        }
    #endif

        // Start service before querying location
        UnityEngine.Input.location.Start(GPSAccuracy, GPSAccuracy);
                
        // Wait until service initializes
        int maxWait = 15;
        while (UnityEngine.Input.location.status == LocationServiceStatus.Initializing && maxWait > 0)
        {
            yield return new WaitForSecondsRealtime(1);
            maxWait--;
        }

        // Editor has a bug which doesn't set the service status to Initializing. So extra wait in Editor.
    #if UNITY_EDITOR
        int editorMaxWait = 15;
        while (UnityEngine.Input.location.status == LocationServiceStatus.Stopped && editorMaxWait > 0)
        {
            yield return new WaitForSecondsRealtime(1);
            editorMaxWait--;
        }
    #endif

        // Service didn't initialize in 15 seconds
        if (maxWait < 1)
        {
            // TODO Failure
            Debug.LogFormat("Timed out");
            yield break;
        }

        // Connection has failed
        if (UnityEngine.Input.location.status != LocationServiceStatus.Running)
        {
            // TODO Failure
            Debug.LogFormat("Unable to determine device location. Failed with status {0}", UnityEngine.Input.location.status);
            yield break;
        }
        else
        {
            Debug.LogFormat("Location service live. status {0}", UnityEngine.Input.location.status);
            // Access granted and location value could be retrieved
            locationServiceOn = true;



        }









        // Stop service if there is no need to query location updates continuously
        //UnityEngine.Input.location.Stop();








    }

    // This section entirely by Dillon Montefusco
    private void Update() 
    {
        // ONLY RUNS IF ON, DUH.
        if (locationServiceOn)
        {
           latitude  = UnityEngine.Input.location.lastData.latitude;
           longitude = UnityEngine.Input.location.lastData.longitude;
           altitude  = UnityEngine.Input.location.lastData.altitude;
        }

        // OTHERWISE DUMMY VALUES AND MESSAGE
        else
        {
           latitude  = 0.0f;
           longitude = 0.0f;
           altitude  = 8000.0f;
        }

        // NOTES!
        // UNITY LAT LONG 159.5, -145.5 = 40.721226, -73.653963
        // UNITY LAT LONG   -74,  109.6 = 40.719093, -73.650868

        // (-73.653963 - -73.650868)
        // (    -145.5 -      109.6)

        // 110947.2m is 1 degree latitude
        // 87843.36m is 1 degree longitude
        // 40.71972076855622, -73.65218231278996 is 0,0
    
        // MAX BOUNDARIES OF CAMPUS, outside of which, the app cannot navigate, obviously. 

        // W: -73.65520E
        // N:  40.72292N
        // E: -73.64861E
        // S:  40.71687N
        // avg N:  40.719895
        // avg E: -73.651905


        // W-E distance (m): 556.8
        // N-S distance (m): 671.8

        // MAP X SCALE: 583.8854
        // MAP Y SCALE: 669.4155

        // ANOTHER REFERENCE: 40.7210426, -73.6522585
        // 141.3495, -4.015503

         


        // CHECK THE BOUNDARIES
        if ((latitude > 40.71687f) && (latitude < 40.72292f) && (longitude > -73.65520f) && (longitude < -73.64861f))
        {

            // CONVERT REAL LAT/LONG TO UNITY DISPLACEMENT (m)
            //                          (neg) REFERENCE  *  SCALAR   +/-   OFFSET
            UNITYLatitude  =  (((latitude - 40.7210426f) * 109456.425f) + 141.3495f); //110947.2f);
            UNITYLongitude = (((longitude + 73.6522585f) * 80435.1518f) - 4.015503f); //87843.36f);

            /* OLD REFERENCE POINT
            UNITYLatitude  = ((latitude - 40.71972076855622f) * 109050.0f ); //110947.2f);
            UNITYLongitude = ((longitude + 73.65218231278996f) * 85400.0f); //87843.36f);
            */

            Vector3 posInSpace = new Vector3(UNITYLongitude, UNITYAltitude, UNITYLatitude);
            transform.position = posInSpace;
            notOnCampus.gameObject.SetActive(false);
        }
        else 
        {
            UNITYLatitude  = 0.0f;
            UNITYLongitude = 0.0f;

            // REPLACE WITH UI MESSAGE!
            notOnCampus.gameObject.SetActive(true);
        }
    }
}
