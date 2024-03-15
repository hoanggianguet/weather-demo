import Form from "@/components/form/Form";
import Header from "@/components/header/Header";
import NavBar from "@/components/navbar/NavBar";
import React from "react";

const Register = ({ children }) => {
  return (
    <div className="flex flex-col w-1200">
      <Header />
      <div className="flex flex-row">
        <NavBar></NavBar>
    
          <Form/>
        
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Register;
