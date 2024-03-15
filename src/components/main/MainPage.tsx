
import React from "react";
import Header from "../header/Header";
import NavBar from "../navbar/NavBar";
import Home from "../home/Home";
import Form from "../form/Form";

const MainPage = ({ children }) => {

  return (
    <div className="flex flex-col w-1200">
      <Header />
      <div className="flex flex-row">
        <NavBar></NavBar>
        
          <Home></Home>
    
          {/* <Form/> */}
        
      </div>

      <main>{children}</main>
    </div>
  );
};

export default MainPage;
