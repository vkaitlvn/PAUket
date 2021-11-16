using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CampusEvent : MonoBehaviour
{
    [SerializeField] public string eventName;
    [SerializeField] public string eventDescription;
    [SerializeField] public int eventTime;

    // TEMPORARY
    [SerializeField] public string eventDate;

    public Transform visual;

    public GameObject mainCamera;

    public float centerObjectSpeed;
    public Vector3 totalScaleFactorExternal;
    public float eulerAngleY;

    void Start()
    {
        centerObjectSpeed = 0.0f;
        totalScaleFactorExternal = new Vector3(1.0f, 1.0f, 1.0f);
        eulerAngleY = 0.0f;
    }

    private void Awake() 
    {

    }

    void FixedUpdate()
    {

    }

    void Update() 
    {
        centerObjectSpeed = mainCamera.GetComponent<Minimap>().GetCenterObjectSpeed();
        totalScaleFactorExternal = mainCamera.GetComponent<Minimap>().GetTotalScaleFactor();
        eulerAngleY = mainCamera.GetComponent<Minimap>().GetEulerAngleY();
    }

    void LateUpdate ()
    {
        visual.transform.localScale = totalScaleFactorExternal;
        visual.eulerAngles = new Vector3(90, eulerAngleY, 0);
    }

}
