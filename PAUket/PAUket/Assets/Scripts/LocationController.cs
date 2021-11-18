using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LocationController : MonoBehaviour
{
    // declarations

    [SerializeField] private float inputLatitude;
    [SerializeField] private float inputLongitude;
    [SerializeField] private float inputaltitude;

    [SerializeField] private float currentLatitude;
    [SerializeField] private float currentLongitude;

    [SerializeField] private float magZ;
    [SerializeField] private float magX;


    // DUMMY CONTROLLER UNTIL IMPLEMENTED TO GET REAL LOCATION
    [SerializeField] private float dummyZ;
    [SerializeField] private float dummyX;

    private void FixedUpdate()
    {
        GetLocation();
        ControlPlayer();
    }

    private void GetSpeed()
    {
        // calculate from the tempPlayerController instead!
    }

    private void GetLocation()
    {
        // KAITLYN, JANINE, OR MICHAEL please for the love of G*d do it. 

        // DUMMY X and Z to be replaced with real longitude!
        inputLatitude = dummyX;
        inputLongitude = dummyZ;
        // Then converted to an interpolated value to display within unity's coord system. 


        currentLatitude = transform.position.x;
        currentLongitude = transform.position.z;
    }

    private void ControlPlayer()
    {
        // if location != locationSupposed

        magX = inputLatitude - currentLatitude;
        magZ = inputLongitude - currentLongitude;

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
        return magZ/5.0f;
    }

    // rotate
    public float getXOut()
    {
        return magX;
    }

}
