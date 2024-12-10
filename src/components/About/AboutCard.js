import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="grey">Vaibhav Kumar </span>
            from <span className="purple"> Renukoot, Uttar Pradesh, India.</span>
            <br /> I am a Second year student pursuing BTech in Computer Science  From GLA University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>   
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "No One Knows Anything"{" "}
          </p>
          <footer className="blockquote-footer">Vaibhav Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
