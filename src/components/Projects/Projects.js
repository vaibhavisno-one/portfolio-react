import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Clone from "../../Assets/Projects/Clone.png"
import chatbot from "../../Assets/Projects/chatbot.png"
import theme from "../../Assets/Projects/theme-switch.png"

function Projects() {
  return (
    <Container fluid className="project-section">
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
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theme}
              isBlog={false}
              title="Theme Switcher "
              description="Our Sophisticated Theme Switch leverages CSS to enable seamless and visually elegant transitions between light and dark modes. With a focus on clean design, it incorporates CSS variables for effortless theming, transition effects for smooth switching, and scalable styling that maintains consistency across your website.."
              ghLink="https://vaibhavisno-one.github.io/theme-switcher/"
      
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Clone}
              isBlog={false}
              title="Apple Website"
              description="Our Apple Website Clone showcases a stunning recreation of Apple's sleek design, built with React for dynamic UI, Three.js for immersive 3D visuals, GSAP for smooth animations, and 3D models for a realistic touch. The project delivers an engaging, high-performance user experience with precise attention to detail."
              ghLink="https://apple-clone-3-273671z5j-vaibhav-kumars-projects-4315bba1.vercel.app"
      
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Cusine Compass"
              description="Our restaurant chatbot, built with Flask, provides a smart, conversational interface to enhance customer interaction and streamline inquiries. Paired with your restaurant website, designed using HTML, Tailwind CSS, and JavaScript, it offers a modern, responsive, and visually appealing platform for users to explore your menu, services, and more. Together, they create a seamless digital experience for your restaurant.."
              ghLink=""
      
            />
          </Col>







        


           


           
          



          




          

          

          
          
          
           
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
