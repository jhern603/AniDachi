import React from "react";
import { ContactForm } from "../components/Forms";
import Navbar from "../components/Navbar";

const Contact = () => {
  
  return (
    <div className="">
      <Navbar />
      <div className="page">
        <ContactForm />
      </div>
    </div>
  );
}
export default Contact;