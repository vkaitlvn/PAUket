using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WhoAmI : MonoBehaviour
{
    [SerializeField] private string buildingID;
    [SerializeField] private string buildingName;
    [SerializeField] private float mainEntranceLocationLatitude;
    [SerializeField] private float mainEntranceLocationLongitude;
    [SerializeField] private float buildingCenterLatitude;
    [SerializeField] private float buildingCenterLongitude;

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
