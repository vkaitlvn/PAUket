using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LocationController2 : MonoBehaviour
{
    private float ZInput;
    private float XInput;

    [SerializeField] private Transform intendedPositionTransform;
    
    private tempPlayerController player;
    private Vector3 intendedPosition;

    private void Awake() 
    {
        player = GetComponent<tempPlayerController>();
        ZInput = 0.0f;
        XInput = 0.0f;
    }

    private void Update()
    {
        SetPosition(intendedPositionTransform.position);


        // IN FRONT OR BEHIND?
        Vector3 dirToMovePosition = (intendedPosition - transform.position).normalized;
        float dot = Vector3.Dot(transform.forward, dirToMovePosition);

        // TO RIGHT OR LEFT?
        float angleToDir = Vector3.SignedAngle(transform.forward, dirToMovePosition, Vector3.up);
        
        // DISTANCE FROM?
        float distanceToTarget = Vector3.Distance(transform.position, intendedPosition);

        if (distanceToTarget > 1.5f)
        {
            if (distanceToTarget > 8.0f)
            {
                ZInput = 1.0f;
                XInput = angleToDir * 0.0125f;
            }
            else
            {
            ZInput = distanceToTarget * 0.125f;
            XInput = angleToDir * 0.125f;
            }
        }
        else
        {
            ZInput = 0.0f;
            XInput = 0.0f;
        }
    }

    public void SetPosition(Vector3 intendedPosition) 
    {
        this.intendedPosition = intendedPosition;
    }









    // Automatic
    // THIS IS WHAT THE TPC LOOKS FOR TO INPUT WHEN AI CONTROLLED!
    public float getZOut()
    {
        return ZInput;
    }

    public float getXOut()
    {
        return XInput;
    }







}