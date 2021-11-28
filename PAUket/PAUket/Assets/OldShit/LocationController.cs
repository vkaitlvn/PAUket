using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LocationController : MonoBehaviour
{
    // declarations

    [SerializeField] private Transform intendedLocation;

    [SerializeField] private Transform blankTrans;

    [SerializeField]    private float magX;
    private float magY;
    private float magZ;


    private void FixedUpdate()
    {
        GetLocation();
        ControlPlayer();
    }

    private void GetLocation()
    {

    }

    private void ControlPlayer()
    {
        // magX borken

        magY = 0.0f;
        magZ = Vector3.Distance(intendedLocation.position, transform.position);

        // if inputAltitude...set camera height appropriately.
    }

// ---- NON PHYSICS BASED FUNCTIONS ---- //

    private void Start()
    {

    }

    private void Update()
    {

    }

// ---- EXTERNAL ACCESS ---- //

    // these return input values for the tempPlayerController to move the player (with limited physics). 

    // move forwards
    public float getZOut()
    {
        if (magZ > 4.0f)
        {
            magZ = 4.0f;
        }
        else if (magZ < 1.0f)
        {
            magZ = 0.0f;
        }
        return magZ/4.0f;
    }

    // move up
    public float getYOut()
    {
        return magY;
    }

    // rotate
    public float getXOut()
    {
        if (magX > 5.0f)
        {
            magZ = 5.0f;
        }
        /*else if (magX < 0.05f)
        {
            magX = 0.0f;
        }*/
        return magX;
    }

}
