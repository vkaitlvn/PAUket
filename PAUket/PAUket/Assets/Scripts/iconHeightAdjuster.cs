using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class iconHeightAdjuster : MonoBehaviour
{

    private void FixedUpdate()
    {
	transform.position = new Vector3(transform.position.x, (Camera.main.transform.position.y - 1f), transform.position.z);
    }


    private void Start()
    {

    }

    private void Update()
    {

    }

// ---- EXTERNAL ACCESS ---- //



}
