import Form from "@/components/form/Form";
import Header from "@/components/header/Header";
import Home from "@/components/home/Home";
import NavBar from "@/components/navbar/NavBar";
import React from "react";

const Main = ({ children }) => {
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

export default Main;
