using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SOS : MonoBehaviour
{
    [SerializeField] public bool SOSOn;
    [SerializeField] public GameObject severityMenu;

    void Start()
    {

    }

    private void Awake() 
    {

    }

    void FixedUpdate()
    {

    }

    void Update() 
    {

    }

    void LateUpdate ()
    {

    }

// ---- EXTERNAL ACCESS ---- //

    public void ToggleSevMenu()
    {
        if (SOSOn)
        {
            SOSOn = false;
            severityMenu.SetActive(false);
        }
        else
        {
            SOSOn = true;
            severityMenu.SetActive(true);
        }
    }


}
