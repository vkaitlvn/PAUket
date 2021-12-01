import React from "react";

import { TopLine, Heading, Subtitle } from "./InfoElements";

import pauketevents from "../../images/pauketevents.gif";


const InfoSectionn = ({ alt }) => {
  return (
    <div
      id="events"
      style={{ background: "#000000" }}
      className="text-white row py-5"
    >
      <div className="col-12 px-0">
        <div className="container-lg">
          <div className="row px-4 justify-content-center align-items-center">
            <div className="col-lg-6 mb-4 mb-md-0">
              <img
                src={pauketevents}
                alt={alt}
                className="h-100 w-100"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
              <TopLine>GET INVOLVED </TopLine>
              <Heading> CAMPUS LIFE</Heading>
              <Subtitle>
                {" "}
                Welcome to Adelphi's newest platform for Campus Life! Get Involved and enjoy! PAUket will provide you with ongoing campus events and news to help enhance your college experience while PAUket's navigation application will also inform you of campus events and will display their locations on the map.
                {" "}
              </Subtitle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSectionn;
