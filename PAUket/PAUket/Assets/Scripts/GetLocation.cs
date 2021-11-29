using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GetLocation: MonoBehaviour
{


    // UNITY LAT LONG 159.5, -145.5 = 40.721226, -73.653963
    // UNITY LAT LONG   -74,  109.6 = 40.719093, -73.650868


    [SerializeField] private float latitude;
    [SerializeField] private float longitude;
    [SerializeField] private float altitude;

    [SerializeField] private float UNITYLatitude;
    [SerializeField] private float UNITYLongitude;
    [SerializeField] private float UNITYAltitude;

    IEnumerator Start() {
    // Uncomment if you want to test with Unity Remote
    #if UNITY_EDITOR
        yield return new WaitWhile(() => !UnityEditor.EditorApplication.isRemoteConnected);
        yield return new WaitForSecondsRealtime(5f);
    #endif


    #if UNITY_EDITOR
        // No permission handling needed in Editor
    #elif UNITY_ANDROID
        if (!UnityEngine.Android.Permission.HasUserAuthorizedPermission(UnityEngine.Android.Permission.CoarseLocation)) {
            UnityEngine.Android.Permission.RequestUserPermission(UnityEngine.Android.Permission.CoarseLocation);
        }

        // First, check if user has location service enabled
        if (!UnityEngine.Input.location.isEnabledByUser) {
            // TODO Failure
            Debug.LogFormat("Android and Location not enabled");
            yield break;
        }

     #elif UNITY_IOS
        if (!UnityEngine.Input.location.isEnabledByUser) {
            // TODO Failure
            Debug.LogFormat("IOS and Location not enabled");
            yield break;
        }
    #endif

        // Start service before querying location
        UnityEngine.Input.location.Start(500f, 500f);
                
        // Wait until service initializes
        int maxWait = 15;
        while (UnityEngine.Input.location.status == LocationServiceStatus.Initializing && maxWait > 0) {
            yield return new WaitForSecondsRealtime(1);
            maxWait--;
        }

        // Editor has a bug which doesn't set the service status to Initializing. So extra wait in Editor.
    #if UNITY_EDITOR
        int editorMaxWait = 15;
        while (UnityEngine.Input.location.status == LocationServiceStatus.Stopped && editorMaxWait > 0) {
            yield return new WaitForSecondsRealtime(1);
            editorMaxWait--;
        }
    #endif

        // Service didn't initialize in 15 seconds
        if (maxWait < 1) {
            // TODO Failure
            Debug.LogFormat("Timed out");
            yield break;
        }

        // Connection has failed
        if (UnityEngine.Input.location.status != LocationServiceStatus.Running) {
            // TODO Failure
            Debug.LogFormat("Unable to determine device location. Failed with status {0}", UnityEngine.Input.location.status);
            yield break;
        } else {
            Debug.LogFormat("Location service live. status {0}", UnityEngine.Input.location.status);
            // Access granted and location value could be retrieved


            latitude = UnityEngine.Input.location.lastData.latitude;
            longitude = UnityEngine.Input.location.lastData.longitude;
            altitude = UnityEngine.Input.location.lastData.longitude;




            // TODO success do something with location
        }

        // Stop service if there is no need to query location updates continuously
        UnityEngine.Input.location.Stop();
    }

    private void Update() 
    {

            // SET UNITY LOCATION
            // UNITYLatitude = latitude * formula...
            // UNITYLongitude = longitude * formula...
            
            Vector3 posInSpace = new Vector3(UNITYLongitude, UNITYAltitude, UNITYLatitude);
            transform.position = posInSpace;
    }
}
