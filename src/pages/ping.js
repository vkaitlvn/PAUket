import React, { useState } from "react";


import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import PingMessage from "../components/PingMessage/PingMessage";



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <PingMessage/>
      {/* Message for users confirming security has been alerted */}
      
      
     
      <Footer />
      {/* Footer element with company name, copyright message, and external links back to the AU site, ecampus, etc */}
    </div>
  );
};

export default Home;
