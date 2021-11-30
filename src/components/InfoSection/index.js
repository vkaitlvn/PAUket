import React from "react";

import { TopLine, Heading, Subtitle } from "./InfoElements";

import au from "../../images/aulogo.png";


const InfoSectionn = ({ alt }) => {
  return (
    <div
      id="about"
      style={{ background: "#f5ad4b      " }}
      className="text-white row py-5"
    >
      <div className="col-12 px-0">
        <div className="container-lg">
          <div className="row px-4 justify-content-center align-items-center">
            <div className="col-lg-6 mb-4 mb-md-0">
              <img
                src={au}
                alt={alt}
                className="h-100 w-100"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
              <TopLine>ABOUT PAUKET </TopLine>
              <Heading> ADELPHI'S NAVIGATION APP</Heading>
              <Subtitle>
                {" "}
                The PAUket application introduces an innovative, interactive
                navigation system. The PAUket application provides
                students/faculty potential to engage with their own college
                campus. Students/faculty will have access to the navigation
                system through a website as well as mobile access.{" "}
              </Subtitle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSectionn;
