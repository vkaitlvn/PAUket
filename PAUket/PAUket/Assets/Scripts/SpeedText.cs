using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SpeedText : MonoBehaviour
{
    public Rigidbody rb;
    public float objectSpeed;
    int intSpeed;
    [SerializeField] public Text speedText;

    void Start()
    {
        
    }

    void FixedUpdate() 
    {
        Vector3 vel = rb.velocity;
        objectSpeed = (vel.magnitude) * 2.23694f;
        intSpeed = (int) objectSpeed;
        string speedValue = intSpeed.ToString();
        string finalValue = speedValue + "\nMPH";
        speedText.text = finalValue;
    }
}
