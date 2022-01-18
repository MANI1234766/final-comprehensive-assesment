import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:manikanta6952@gmail.com">
        <Button>Contact:manikanta6952@gmail.com</Button>
        <Button>Mobile Number:8217291068</Button>
      </a>
    </div>
  );
};

export default Contact;
