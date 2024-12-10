import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import vaibhav from "../../Assets/vaibhav.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
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
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> JAVA,PYTHON AND FRONTEND </b>
              </i>
               and espicially in 
               <i>
                <b className="purple">React-js</b>
              </i>

              
              
              
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple"></b>
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.JS  </b>
              </i>
                and
              <i>
                <b className="purple"> Three-JS </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={vaibhav} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Digital<span className="purple"> Profiles </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vaibhavisno-one"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
      
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/vaibhav-kumar-b2a1662b6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_v4ibhavkumar?igsh=MzJ2a3Vja21qOHBy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
                <li className="social-icons">
                <a
                  href="https://leetcode.com/u/kumar_vaibhav/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode />
                </a>
                </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
