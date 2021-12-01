import React from "react";

import pauketlogo2 from "../../images/pauketlogo2.png";
import './index.css';

import{
    TopLine,
    Heading,
} from "./EventsElements";

// This event/calendar section was written with the help of an online resource (using snippets of this code) but we implemented our own additional code into it and changed it immensely, we used bootstrap's online resources that shares
// tutorials and source codes that can be customized and implemented by programmers: https://react-bootstrap.github.io/


const InfoSection = ({ alt}) => {
  return (


    <div style={{ background:"#f5ad4b"}}  className="text-white row ">
        <div class="text-center mt-5 justify-content-center align-items-center">
              <TopLine>PAUKET CALENDAR</TopLine>
              <Heading> UPCOMING EVENTS </Heading>
        </div>

    <div class="container">
        {/* Event 1: Sunday Mass */}
        <div class="row align-items-center event-block no-gutters margin-40px-bottom">
        <div class="col-lg-5 col-sm-12">
            <div class="position-relative">
            <img
                src={pauketlogo2}
                alt={alt}
                className="h-100 w-100"
                style={{ objectFit: "cover" }}
              />                <div class="events-date">
                    <div class="font-size28">29</div>
                    <div class="font-size14">Nov</div>
                </div>
            </div>
        </div>
        <div class="col-lg-7 col-sm-12">
            <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 style={{color: "#3c2a25"}} class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">Athletics</h5>
                <h5 class="margin-10px-bottom md-margin-10px-bottom font-size13 md-font-size13 xs-font-size13 font-weight-500">Adelphi University's Men's Basketball</h5>

                <ul class="event-time margin-10px-bottom md-margin-5px-bottom">
                    <li><i class="far fa-clock margin-10px-right"></i> 07:00 PM - 09:00 PM</li>
                </ul>
                <p>Location: College of Staten Island </p>
                <calendaradd style={{color: "#000000"}}>  add to calendar? </calendaradd>

            </div>
        </div>
    </div>

    
    {/* Event 2: */}
    <div class="row align-items-center event-block no-gutters margin-40px-bottom">
        <div class="col-lg-7 order-2 order-lg-1">
            <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 style={{color: "#3c2a25"}} class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500"><>Continuing Education</></h5>
                <h5 class="margin-10px-bottom md-margin-10px-bottom font-size13 md-font-size13 xs-font-size13 font-weight-500">Post-Grad Certificate in Environmental Justice <br /> for Social Workers: Climate Work is Social Work</h5>

                <ul class="event-time margin-10px-bottom md-margin-5px-bottom">
                    <li><i class="far fa-clock margin-10px-right"></i> Now - Nov 30, 2021 < br /> 07:00 PM - 09:00 PM </li>
                </ul>
                <p>Location: Virtual</p>
                <calendaradd style={{color: "#000000"}}>  add to calendar? </calendaradd>

            </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2">
            <div class="position-relative">
            <img
                src={pauketlogo2}
                alt={alt}
                className="h-100 w-100"
                style={{ objectFit: "cover" }}
              />                <div class="events-date">
                    <div class="font-size28">30</div>
                    <div class="font-size14">NOV</div>
                </div>
            </div>
        </div>
    </div>

    {/* Event 3: */}
    <div class="row align-items-center event-block no-gutters margin-40px-bottom">
        <div class="col-lg-5 col-sm-12">
            <div class="position-relative">
                 <img
                src={pauketlogo2}
                alt={alt}
                className="h-100 w-100"
                style={{ objectFit: "cover" }}
              />
                <div class="events-date">
                    <div class="font-size28">19 </div>
                    <div class="font-size14">DEC</div>
                </div>
            </div>
        </div>
        <div class="col-lg-7 col-sm-12">
            <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 style={{color: "#3c2a25"}} class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">Clubs and Organizations</h5>
                <h5 class="margin-10px-bottom md-margin-10px-bottom font-size13 md-font-size13 xs-font-size13 font-weight-500">Sunday Catholic Mass</h5>

                <ul class="event-time margin-10px-bottom md-margin-5px-bottom">
                    <li><i class="far fa-clock margin-10px-right"></i> Now - Dec 19, 2021 <br /> 06:45 PM - 08:00 PM</li>

                </ul>
                <p>Location: Ruth S. Harley University Center, Room 306</p>
                <calendaradd style={{color: "#000000"}}>  add to calendar? </calendaradd>

            </div>
        </div>
    </div>

    
    {/* Event 4: */}
    <div class="row align-items-center event-block no-gutters margin-40px-bottom">
        <div class="col-lg-7 order-2 order-lg-1">
            <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 style={{color: "#3c2a25"}} class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">Arts and Culture</h5>
                <h5 class="margin-10px-bottom md-margin-10px-bottom font-size13 md-font-size13 xs-font-size13 font-weight-500">Peter Lipman-Wulf: Faust II Solo Exhibition</h5>

                <ul class="event-time margin-10px-bottom md-margin-5px-bottom">
                    <li><i class="far fa-clock margin-10px-right"></i> Now - Dec 21, 2021 <br /> 10:00 AM - 06:00 PM </li>
                </ul>
                <p> Location: Performing Arts Gallery </p>
                <calendaradd style={{color: "#000000"}}>  add to calendar? </calendaradd>

            </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2">
            <div class="position-relative">
            <img
                src={pauketlogo2}
                alt={alt}
                className="h-100 w-100"
                style={{ objectFit: "cover" }}
              />                <div class="events-date">
                    <div class="font-size28">21</div>
                    <div class="font-size14">DEC</div>
                </div>
            </div>
        </div>
    </div>


</div>
</div>
    
  );
};

export default InfoSection;
