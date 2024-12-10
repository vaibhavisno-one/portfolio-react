import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import laptopImg from "../../Assets/about.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
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

          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Vaibhav Kumar</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={laptopImg}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
