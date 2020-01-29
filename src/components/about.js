import React from "react";
import "./about.css";
import self from "../images/self.jpg";

export default function About() {
  return (
    <div className="FlexContainer">
      <div className="aboutContainer">
        <img className="shibuyapic" src={self} alt="Me at Shibuya"/>
        <p className="textabout">
          Né à Paris dans la nuit du 2 janvier 1988 et Drômois d'adoption depuis
          1994, je vis à Lyon depuis septembre 2012.
          <br/>
          <br/>
          Après avoir été responsable de bar pendant plusieurs années je suis
          actuellement un cursus de reconversion professionnelle en développement
          web axé JS / <a
            className="reactLink"
            href="https://fr.reactjs.org/"
          >
            React
          </a> sur le campus de la{" "}
          <a
            className="wildcodeschoollink"
            href="https://www.wildcodeschool.com/fr-FR/campus/lyon"
          >
            Wild Code School Lyon
          </a>.
          <br/>
          <br/>
          Grand passionné de moto et plus particulièrement de Triumph, je roule
          actuellement sur une Daytona 675R 2014 que j'emmène sur circuit dès que
          j'en ai l'occasion.
        </p>
      </div>
    </div>
  );
}
