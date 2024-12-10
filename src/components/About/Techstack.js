import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiPython,
  DiJava,
  DiBootstrap
} from "react-icons/di";
import { SiNextdotjs} from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

       <Col xs={4} md={2} className="tech-icons">
       <DiBootstrap />
      </Col>
      

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss/>
      </Col>

      
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

    

      <Col xs={4} md={2} className="tech-icons">
      <DiMysql />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      
      <IoLogoJavascript />
      </Col>
     
    </Row>
  );
}

export default Techstack;
