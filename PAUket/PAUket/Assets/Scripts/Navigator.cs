using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// THIS IS THE NAGIVATOR
// THIS WILL TAKE STRING INPUT AND GENERATE THE ROUTE (BY VECTORS) TO THE BUILDING REQUESTED.

public class Navigator : MonoBehaviour
{

    [SerializeField] private InputField searchbarField;

    private void Awake() 
    {
        
    }

    private void Update()
    {

    }

    // EVALUATE WHAT THE USER IS SEARCHING FOR, WHETHER IT IS EVENTS OR PLACES
    // IT WILL BE VERY ANAL ABOUT CAPS AND SPACES...

    public void EvaluateInput(string inputString)
    {
        //Debug.Log("Input String: " + inputString);

        //search for inputString in places, then events. 

    }
}
