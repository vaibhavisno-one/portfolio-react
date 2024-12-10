import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import vaibhav2 from "../../Assets/vaibhav2.jpg";


function About() {
  return (
    <Container fluid className="about-section">
       <div>
              <div className="staranim">
                <div id="stars" />
                <div id="stars2" />
                <div id="stars3" />
              </div>
              <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                  <div className="wave waveTop" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-top.png")'}} />
                </div>
                <div className="waveWrapperInner bgMiddle">
                  <div className="wave waveMiddle" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-mid.png")'}} />
                </div>
                <div className="waveWrapperInner bgBottom">
                  <div className="wave waveBottom" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-bot.png")'}} />
                </div>
              </div>
            </div>

      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Curious About <strong className="purple">Me?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={vaibhav2} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

      </Container>
    </Container>
  );
}

export default About;
