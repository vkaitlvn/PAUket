import React, { useState } from "react";

import HeroSection from "../components/HeroSection";
// import InfoSection from '../components/InfoSection';
import InfoSectionTwo from "../components/InfoSectionTwo";
// import Events from '../components/Events';

// import Services from '../components/Services';
import PingBanner from "../components/PingBanner";
// import CallBanner from '../components/CallBanner';
// import ReportBanner from '../components/ReportBanner';

// import LocationServices from '../components/LocationServices';
// import FindFriend from '../components/FindFriend';

import Navbar from "../components/Navbar";
// import Sidebar from '../components/Sidebar';
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid">
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
      <InfoSectionTwo />
      <PingBanner />
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
    

      <HeroSection />
      {/* Front home page with a log in button */}
      {/* <InfoSection /> */}
      {/* Description of PAUket */}
      {/* <InfoSectionTwo /> */}
      {/* Button that says to begin navigating and that will open up the unity based platform */}

      {/* <Events/> */}
      {/* Campus events section */}

      {/* <Services/> */}
      {/* Campus Security information  */}
      {/* <PingBanner/> */}
      {/* Ping security button */}
      {/* <CallBanner/> */}
      {/* Call button to initiate calls to campus security */}
      {/* <ReportBanner/> */}
      {/* file report button to make a report to campus security */}

      {/* <LocationServices/> */}
      {/* Location Services button */}
      {/* <FindFriend /> */}
      {/* Find a friend */}

      <Footer />
      {/* Footer element with company name, copyright message, and external links back to the AU site, ecampus, etc */}
    </div>
  );
};

export default Home;
