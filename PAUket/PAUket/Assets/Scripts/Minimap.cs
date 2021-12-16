using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Minimap : MonoBehaviour
{

    public Transform player;
    public Transform playerVisual;

    public Transform northBug;
    public Rigidbody rb;

    // for speed based zoom!
    [SerializeField] public float cameraZoomEnd;

    // for interior zoom!
    [SerializeField] public float interiorZoomFactor;

    // for visual enhancement!
    [SerializeField] public float iconScaleFactor;

    // for collision based zoom!
    [SerializeField] public bool isInside;



    // BUTTON CONTROL BOOLS

    // for zoom lock!
    [SerializeField] public bool zoomLock;

    // for burger options!
    [SerializeField] public bool burgerOn;
    [SerializeField] public GameObject options;

    // for north mode!
    [SerializeField] public bool freedNorth;




    public float centerObjectSpeed;

    public Vector3 totalScaleFactor;

    public Camera cam;

    void Start()
    {
        cam.orthographicSize = 356.0f;
    }

    private void Awake() 
    {

    }

    void FixedUpdate()
    {
        Vector3 vel = rb.velocity;
        centerObjectSpeed = vel.magnitude;
        isInside = player.GetComponent<tempPlayerController>().isItInside();
    }

    void Update() 
    {
        northBug.eulerAngles = new Vector3(0, 0, Camera.main.transform.localEulerAngles.y);
    }

    void LateUpdate ()
    {
        if (zoomLock)
        {
            transform.position = new Vector3(0f, 50f, 0f);
            transform.rotation = Quaternion.Euler(90f, 0f, 0f);

            // Landscape Or.
            //cam.orthographicSize = 334.7075f;
            cam.orthographicSize = 583.8854f;

            Vector3 changeLocked = new Vector3(3.25f, 3.25f, 3.25f);
            totalScaleFactor = changeLocked * iconScaleFactor;
            playerVisual.transform.localScale = totalScaleFactor;
        }
        else {
        Vector3 newPosition = player.position;
        newPosition.y = transform.position.y;
        transform.position = newPosition;
        
        transform.rotation = Quaternion.Euler(90f, player.eulerAngles.y, 0f);
        
        // SIZE CODE FOR DYNAMIC ZOOM
	if (centerObjectSpeed > 4.166667f)
        {
            cam.orthographicSize = cameraZoomEnd * interiorZoomFactor;
        }
        else if ((centerObjectSpeed <= 4.166667f) && (centerObjectSpeed >= 1.388889f))
        {
            cam.orthographicSize = (cameraZoomEnd * interiorZoomFactor) / (4.166667f / centerObjectSpeed);
        }
        else
        {
            cam.orthographicSize = ((cameraZoomEnd * 0.333333f) * interiorZoomFactor);
        }
        
        float zoomIconScaling = cam.orthographicSize / cameraZoomEnd ;
        Vector3 change = new Vector3(zoomIconScaling, zoomIconScaling, zoomIconScaling);
        totalScaleFactor = change * iconScaleFactor;
        playerVisual.transform.localScale = totalScaleFactor;

        // if inside collision, lower camera position (to see thru buildings) and interiorZoomFactor to .25...

        //







        if (isInside)
        {
            if(interiorZoomFactor > 0.25)
            {
                interiorZoomFactor -= 0.0125f;
            }

            
            // SET CAMERA HEIGHT (FOR INSIDE, SET TO 10m)
            transform.position = new Vector3(transform.position.x, 10f, transform.position.z);



        }
        else 
        {
            if(interiorZoomFactor < 1.0f)
            {
                interiorZoomFactor += 0.0125f;
            }
            else if(interiorZoomFactor > 1.0f)
            {
                interiorZoomFactor -= 0.0125f;
            }

            // SET CAMERA HEIGHT (FOR OUTSIDE, SET TO 50m)
            transform.position = new Vector3(transform.position.x, 50f, transform.position.z);


        }

        if (!freedNorth)
        {
            transform.rotation = Quaternion.Euler(90f, 0f, 0f);
        }
        }
    }

// ---- EXTERNAL ACCESS ---- //


    public float GetCenterObjectSpeed()
    {
        return centerObjectSpeed;
    }

    public float GetEulerAngleY()
    {
        //return player.eulerAngles.y;
        return Camera.main.transform.localEulerAngles.y;
    }

    public Vector3 GetTotalScaleFactor()
    {
        return totalScaleFactor;
    }

    public void ButtonZoomLock()
    {
        if (zoomLock)
        {
            zoomLock = false;
        }
        else
        {
            zoomLock = true;
        }
    }

    public void DisplayOptions()
    {
        if (burgerOn)
        {
            burgerOn = false;
            options.SetActive(false);
        }
        else
        {
            burgerOn = true;
            options.SetActive(true);
        }
    }

    public void FreeNorth()
    {
        if (freedNorth)
        {
            freedNorth = false;
            // lock camera north...
        }
        else
        {
            freedNorth = true;
            // free camera north...
        }
    }



}
