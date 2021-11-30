import React, { useState } from "react";


import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import LogIn from "../components/Login/login";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <LogIn />
      {/* Log in component that prompts users to log in with their ecampus credentials. */}

      
      
     
      <Footer />
      {/* Footer element with company name, copyright message, and external links back to the AU site, ecampus, etc */}
    </div>
  );
};

export default Home;
