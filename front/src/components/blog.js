import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './blog.css'
// import UC from '../img/UnderConstruction.png'
import test from '../photos/ddmt/MG_3232.jpg'

// https://reactstrap.github.io/components/card/

export default function Blog() {
  return (
      // <div className="FlexContainer">
      //     <img className="UC" src={UC} />
      // </div>
    <div className="FlexContainer">
      <Card className="card">
        <CardImg  src={test} alt="TEST" />
        <CardBody>
          <CardTitle>Essai R1 2015</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};
