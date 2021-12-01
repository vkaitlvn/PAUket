import React from 'react';


import Icon1 from "../../images/user.png";

import Icon2 from "../../images/user.png";

import Icon3 from "../../images/user.png";



import {
    H1, 
    H3,
    FriendCard,
    H2, 
    P
} from './FriendElements';


const Friends = () => {
    return (

        <div className=" row pt-5 pb-4" id="location" style={{ background: "#000000" }}>
            <div className="col text-center text-white mb-4" >
                <H3> PAUKET'S LOCATION SERVICES</H3>
                <H1>FIND A FRIEND</H1>
            </div>
            <div className="w-100"></div>
            <div className="col">
                <div className="container-lg">
                    <div className="row justify-content-center">

                        <div className="w-100"></div>
                        <FriendCard className="col-md-4 col-xl-3 d-flex flex-column align-items-center mb-4">
                            <img 
                            className="img-fluid mb-2 w-100" 
                            src={Icon1}
                            />
                            <H2> David, A. </H2>
                            <P className="mb-2"> ONLINE</P>
                            
                        </FriendCard>

                        <FriendCard className="col-md-4 col-xl-3 d-flex flex-column align-items-center mb-4">
                            <img 
                            className="img-fluid mb-2 w-100" 
                            src={Icon2}
                            />
                            <H2> John, D.</H2>
                            <P className="mb-2"> ONLINE</P>
                        
                        </FriendCard>

                        <FriendCard className="col-md-4 col-xl-3 d-flex flex-column align-items-center mb-4">
                            <img 
                            className="img-fluid mb-2 w-100" 
                            src={Icon3}
                            />
                            <H2> Jane, D. </H2>
                            <P className="mb-2"> ONLINE</P>
                    
                        </FriendCard>

                       

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friends;
