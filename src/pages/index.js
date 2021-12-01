import React, { useState } from "react";

import HeroSection from "../components/HeroSection";
// import InfoSection from '../components/InfoSection';
import InfoSectionTwo from "../components/InfoSectionTwo";

import SecurityServices from "../components/SecurityServices";
import PingBanner from "../components/PingBanner";
import CallBanner from "../components/CallBanner";
import ReportBanner from "../components/ReportBanner";

import LocationServices from '../components/LocationServices';
import FindFriends from '../components/FindFriends';

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import InfoSectionThree from "../components/InfoSectionThree";
import Events from "../components/Events";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
            {/* Front home page with a log in button */}

      <InfoSection />
            {/* Description of PAUket */}

      <InfoSectionTwo />
            {/* Button that says to begin navigating and that will open up the unity based platform */}



      <SecurityServices />
            {/* Campus Security information  */}
      <PingBanner />
            {/* Ping security button, in collaboration with the app, it will give public safety the user's exact location so that they can immediately get to them. */}
      <CallBanner />
            {/* Call button to initiate calls to campus security */}
      <ReportBanner />
            {/* file report button to make a report to campus security */}


      {/* Campus Life */}
      <InfoSectionThree />
      <Events />
        {/* Campus events section */}
      <FindFriends />
      {/* Find a friend */}
      <LocationServices />
      {/* Location Services button */}
      

      <Footer />
      {/* Footer element with company name, copyright message, and external links back to the AU site, ecampus, etc */}
    </div>
  );
};

export default Home;
