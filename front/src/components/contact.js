import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="FlexContainer" >
        <div className="contactContainer">
            <h2 className="contacttitle">Me contacter</h2>
              <div className="PhoneEmail"><i className="fa fa-phone"></i> +33 6 12 65 72 23</div>
              <div className="PhoneEmail"><i className="fa fa-at"></i> ludovic.mazet@gmail.com</div>
                <div className="RS">
                  <a href="https://twitter.com/LudoMzt" target="_blank" rel="noopener noreferrer"><div className="fa fa-twitter" href="https://twitter.com/LudoMzt"></div></a>
                  <a href="https://www.instagram.com/ludz675/?hl=fr" target="_blank" rel="noopener noreferrer"><div className="fa fa-instagram"></div></a>
                  <a href="https://www.facebook.com/ludovicmazet" target="_blank" rel="noopener noreferrer"><div className="fa fa-facebook-square"></div></a>
                  <a href="https://github.com/Signupz" target="_blank" rel="noopener noreferrer"><div className="fa fa-github"></div></a>
                  <a href="https://www.linkedin.com/in/ludovic-mazet/" target="_blank" rel="noopener noreferrer"><div className="fa fa-linkedin-square"></div></a>
                </div>
        </div>
    </div>
  );
}

