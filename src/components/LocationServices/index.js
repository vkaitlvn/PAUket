import React from 'react'

import aupanther from "../../images/aupanther.png";

import { Button } from "../ButtonElements3.js";





const index = () => {
    return (
        <div id='location' style={{ background:"#f5ad4b"}}  className="text-white row ">
            <div className=" col-5 col-md-6 px-0 position-relative">

                <img src={aupanther} 
                    alt="alt" 
                    className="position-absolute w-100 h-100 d-none d-md-block"
                    style={{objectFit:"cover", objectPosition:"right bottom " }}
                />

            </div>


            <div className="col-7 col-md-6 d-flex py-5 align-items-center text-align-center;">

                <Button>PRIVACY SETTINGS</Button>

            </div>

        </div>
    )
}

export default index;
