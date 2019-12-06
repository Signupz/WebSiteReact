import React from "react";
import "./form.css";

export default function form() {
  return (
    <div className="container" id="formContainer">
        <div class="shadow p-3 mb-5 bg-white rounded">
          <form>
            <h2 id="contacttitle">Me contacter</h2>
            <p id="phoneNumberEmailAdress">
              <i className="fa fa-phone"></i> +33 6 12 65 72 23 <br />
              <br />
              <i className="fa fa-at"></i> ludovic.mazet@gmail.com
            </p>
          </form>
          <div className="RS">
            <a href="https://twitter.com/LudoMzt" target="_blank" rel="noopener noreferrer"><div className="fa fa-twitter" href="https://twitter.com/LudoMzt"></div></a>
            <a href="https://www.instagram.com/ldvcmzt/?hl=fr" target="_blank" rel="noopener noreferrer"><div className="fa fa-instagram"></div></a>
            <a href="https://www.facebook.com/ludovicmazet" target="_blank" rel="noopener noreferrer"><div className="fa fa-facebook-square"></div></a>
            <a href="https://github.com/Signupz" target="_blank" rel="noopener noreferrer"><div className="fa fa-github"></div></a>
            <a href="https://www.linkedin.com/in/ludovic-mazet/" target="_blank" rel="noopener noreferrer"><div className="fa fa-linkedin-square"></div></a>
          </div>
      </div>
    </div>
  );
}

