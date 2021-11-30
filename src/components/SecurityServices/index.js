import React from "react";

import { TopLine, Heading, TeamP, Title } from "./ServicesElements";

const InfoSection = ({}) => {
  return (
    <div
      id="security"
      style={{ background: "#f5ad4b" }}
      className="text-white row py-5"
    >
      <div className="col-12 px-0">
        <div className="container-lg justify-content-center align-items-center">
          <div className="row px-2 px-lg-5 justify-content-center align-items-start">
            <div class="text-center mt-5 justify-content-center align-items-center">
              <TopLine>SOS CENTER</TopLine>
              <Heading> PUBLIC SAFETY INFORMATION </Heading>
            </div>

            <div class="col-md-3">
              <div class="box">
                <div class="our-services settings">
                  <Title>LOCATION</Title>
                  <TeamP>
                    GARDEN CITY <br />
                    LEVERMORE HALL, ROOM 113
                    <br />
                    HAPPAUGE CENTER: <br />
                    LOCATED IN LOBBY
                    <br />
                    MANHATTAN CENTER:
                    <br />
                    MAIN ENTRY TO THE ADELPHI AREA, 2ND FLOOR
                    <br />
                    HUDSON VALLEY CENTER: <br />
                    MAIN ENTRY TO THE ADELPHI AREA, 4TH FLOOR
                  </TeamP>
                </div>
              </div>
            </div>

          

            <div class="col-md-3">
              <div class="box">
                <div class="our-services privacy">
                  <Title>HOURS</Title>
                  <TeamP>
                    REGULAR SEMESTER HOURS: <br /> 
                    MON AND FRI: <br />
                     8:30AM-4:30 PM <br /> TUES, WED, & THURS: <br />
                     8:30AM-6:00PM <br /> COMMAND CENTER DAILY: <br /> 24 HOURS{" "}
                  </TeamP>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="box">
                <div class="our-services speedup">
                  <Title>CONTACT</Title>
                  <TeamP>
                    GARDEN CITY: <br />
                    Dial 5 or ext. 3507 or 3511 from any in-house telephone <br />
                    516-877-3500
                    <br />
                    Happauge Center <br />
                    631-300-4367 or 516-877-3500

                    <br />
                    MANHATTAN CENTER: <br />
                    212-965-8340
                    <br />
                    HUDSON VALLEY CENTER: <br />
                    845-471-3348
                  </TeamP>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
