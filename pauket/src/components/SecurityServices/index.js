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
                  <Title>AIRDROPS</Title>
                  <TeamP>
                    As long as you are a holder, you may be gifted airdrops.
                    Previous airdrops may have surprise utilities.
                  </TeamP>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="box">
                <div class="our-services speedup">
                  <Title>COMMUNITY</Title>
                  <TeamP>
                    Join the shiver for unlimited access to a supporting
                    community with endless perks.
                  </TeamP>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="box">
                <div class="our-services privacy">
                  <Title>RIGHTS</Title>
                  <TeamP>
                    All sharks are granted full commercial rights excluding the
                    brand name, logo, + special characters.{" "}
                  </TeamP>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="box">
                <div class="our-services backups">
                  <Title>WEARABLES</Title>
                  <TeamP>
                    All sharks will be periodically airdropped free wearable
                    sets for your choice of usage.{" "}
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
