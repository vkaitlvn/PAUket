using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class tempPlayerController : MonoBehaviour
{
    [SerializeField] private Rigidbody rb;

    private const string HORIZONTAL = "Horizontal";
    private const string VERTICAL = "Vertical";

    private float horizontalInput;
    private float verticalInput;

    private float currentSpeed;

    private bool isInside;

    [SerializeField] private float thrust;
    [SerializeField] private float angleForce;
    
    [SerializeField] private bool playerControllerHuman;


// silly stuff
    [SerializeField] private AudioSource engineLow;
    [SerializeField] private AudioSource engineHigh;
    [SerializeField] private float engineVolume;
    public Slider volumeSlider;

    private void FixedUpdate()
    {
        GetInput();
        GetSpeed();
        MovePlayer();
    }

    private void OnTriggerEnter(Collider other)
    {
        isInside = true;
    }

    private void OnTriggerExit(Collider other)
    {
        isInside = false;
    }

    private void GetSpeed()
    {
        currentSpeed = GetComponent<Rigidbody>().velocity.magnitude;
    }

    private void GetInput()
    {
        if (playerControllerHuman) 
        {
            horizontalInput = Input.GetAxisRaw(HORIZONTAL);
            verticalInput = Input.GetAxisRaw(VERTICAL);
        }
        else
        {
            horizontalInput = GetComponent<LocationController2>().getXOut();
            verticalInput = GetComponent<LocationController2>().getZOut();
        }
    }

    private void MovePlayer()
    {
        rb.AddForce(transform.forward * (thrust * verticalInput));
        //rb.AddForce(transform.forward * ((thrust * 10) * thrust * verticalInput));
        rb.AddTorque(transform.up * (angleForce * horizontalInput));
    }

// ---- NON PHYSICS BASED FUNCTIONS ---- //

    private void Start()
    {
	engineLow.Play();
        engineLow.volume = 0.0f;

	engineHigh.Play();
        engineHigh.volume = 0.0f;

        isInside = false;
        volumeSlider.value = 0.0f;
    }

    private void Update()
    {
        engineVolume = volumeSlider.value;
        // pitch
        if (currentSpeed <= 0.5f)
        {
            engineLow.pitch = 1.0f;
            engineHigh.pitch = 1.0f;
        }
        else if ((currentSpeed > 0.5f) && (currentSpeed <= 3.0f))
        {
            engineLow.pitch = currentSpeed + 0.5f;
            engineHigh.pitch = currentSpeed + 0.5f;
        }
        else
        {
            engineLow.pitch = 3.5f;
            engineHigh.pitch = 3.5f;
        }


        // volume
        if (currentSpeed <= 0.5f)
        {
            engineLow.volume = 0.5f * engineVolume;
            engineHigh.volume = 0.0f;
        }
        else if ((currentSpeed > 0.5f) && (currentSpeed <= 1.0f))
        {
            engineLow.volume = (1.0f - currentSpeed) * engineVolume; 
            engineHigh.volume = (currentSpeed - 0.5f) * engineVolume;
        }
        else
        {
            engineLow.volume = 0.0f;
            engineHigh.volume = 0.5f * engineVolume;
        }
    }

// ---- EXTERNAL ACCESS ---- //

    public bool isItInside()
    {
        return isInside;
    }

    public void SetEngineVolume(float vol)
    {
        engineVolume = vol;
    }


}
