using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// THIS IS THE NAGIVATOR
// THIS WILL TAKE STRING INPUT AND GENERATE THE ROUTE (BY VECTORS) TO THE BUILDING REQUESTED.

public class Navigator : MonoBehaviour
{

    [SerializeField] private InputField searchbarField;
    private Vector3 targetLocation;
    public string tarLocStrIntro; 
    public string targetLocationString;
    public GameObject navArrow;
    public Text targetLocationText;
    public string tarLocStrFull;
    private bool realPlace;
    private float directionToDifference; 

    private void Awake() 
    {
        tarLocStrIntro = "Navigating to ";
    }

    private void Update()
    {
	GenerateArrow();
        EvaluateInput(searchbarField.text);
        tarLocStrFull = tarLocStrIntro + targetLocationString;
        targetLocationText.text = tarLocStrFull;
    }

    // EVALUATE WHAT THE USER IS SEARCHING FOR, WHETHER IT IS EVENTS OR (PLACES only for now)
    // IT WILL BE VERY ANAL ABOUT SPACES...

    public void EvaluateInput(string inputString)
    {
        //search for inputString in places, then events. 
        if (inputString.Length == 3 || inputString.Length == 7) 
        {
            DecodeBuildingCode(inputString);
            realPlace = true;
        }

        else if (inputString.Length == 7) 
        {
            realPlace = true;
            DecodeBuildingCode(inputString);
        }
        else 
        {
            realPlace = false;
        }

    }


    // This is a big dictionary (should replace with a real dictionary)
    public void DecodeBuildingCode(string inputCode)
    {
        string BuildingCode = inputCode.Substring(0,3).ToLower();
        if (BuildingCode == "scb")
        {
            targetLocation = new Vector3(37.9f, 0.5f, 100.1f);
            targetLocationString = "Science Building";
            
        }
        else if (BuildingCode == "swl")
        {
            targetLocation = new Vector3(-105.0f, 0.5f, 184.7f);
            targetLocationString = "Swirbul Library";
            
        }
        else if (BuildingCode == "hhe")
        {
            targetLocation = new Vector3(79.5f, 0.5f, 183.0f);
            targetLocationString = "Hagedorn Hall of Enterprise";
            
        }
        else if (BuildingCode == "eha")
        {
            targetLocation = new Vector3(86.5f, 0.5f, 9.0f);
            targetLocationString = "Earle Hall A";
            
        }
        else if (BuildingCode == "ehb")
        {
            targetLocation = new Vector3(54.75f, 0.5f, 39.25f);
            targetLocationString = "Earle Hall B";
            
        }
        else if (BuildingCode == "nex")
        {
            targetLocation = new Vector3(79.5f, 7.5f, 183.0f);
            targetLocationString = "Nexus Building";
            
        }
        else if (BuildingCode == "lvh")
        {
            targetLocation = new Vector3(79.5f, 7.5f, 183.0f);
            targetLocationString = "Levermore Hall";
            
        }
        else if (BuildingCode == "unc")
        {
            targetLocation = new Vector3(79.5f, 7.5f, 183.0f);
            targetLocationString = "Ruth S. Harley University Center";
            
        }
        else 
        {
            realPlace = false;
            navArrow.SetActive(false);
            targetLocationText.gameObject.SetActive(false);
        }
        // end big dictionary.

    }
    private void GenerateArrow()
    {
        if (!string.IsNullOrEmpty(searchbarField.text) && realPlace)
        {
            navArrow.SetActive(true);
            targetLocationText.gameObject.SetActive(true);
            Vector3 referencePosition = new Vector3(Camera.main.transform.position.x, 0, Camera.main.transform.position.z);
          
          // IN FRONT OR BEHIND?
            Vector3 forwardsDifference = (targetLocation - referencePosition).normalized;
            float dot = Vector3.Dot(transform.forward, forwardsDifference);

            // TO RIGHT OR LEFT?
            float directionToDifference = Vector3.SignedAngle(transform.forward, forwardsDifference, Vector3.up);


            navArrow.transform.eulerAngles = new Vector3(0, 0, (-directionToDifference + Camera.main.transform.eulerAngles.y));
        }
        else 
        {
            navArrow.SetActive(false);
            targetLocationText.gameObject.SetActive(false);
        }
            
    }
    
}
