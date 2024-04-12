import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import Gradient from "../../Assets/Projects/gradient.gif";
// import Crypto from "../../Assets/Projects/crypto.png";
import Netflix from "../../Assets/Projects/Netflix.png";
import Maze from "../../Assets/Projects/Maze.png";
import portal from "../../Assets/Projects/class-portal.png";
import Gemini from "../../Assets/Projects/Gemini.png";
import Restuarnt from "../../Assets/Projects/Restuarant.png";
// import Shortener from "../../Assets/Projects/shortener.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Developed a responsive web application featuring user authentication, 
              real-time database interactions, a favorites system, and Firebase hosting, highlighting full-stack development capabilities. 
              Integrated with The Movie Database (TMDB) API for dynamic movie content display, showcasing expertise in API utilization and data management. 
              Used TailwindCSS for design, emphasizing responsive and modern web development practices."
              
              demoLink = "https://netflixy-c8d03.web.app/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Maze}
              isBlog={false}
              title="📑 MAZE GENERATOR & CRACKER"
              description="A maze has been constructed using a collaborative approach, where the
design and solution processes are visually presented to users through a
graphical interface. The correct path through the maze is highlighted
upon completion. 
               "
              ghLink="https://github.com/BOLISETTYSUJITH/MAZE-GENERATOR-AND-CRACKER"
              
            />
          </Col>

          {/* <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Gradient}
              isBlog={false}
              title="Gradient Generator"
              description="Generate the gradient quickly and easily."
              ghLink="https://github.com/7GitGuru/gradient-generator"
              demoLink="https://7gitguru.github.io/gradient-generator/"              
            />
          </Col> */}

          {/* <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Shortener}
              isBlog={false}
              title="🔗URL Shortener"
              description="This Telegram bot is designed to shorten URLs using the TinyURL service."
              ghLink="https://github.com/7GitGuru/TinyUrlrobot"
              demoLink="https://t.me/tinyURLrobot"
            />
          </Col> */}

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={portal}
              isBlog={false}
              title="CLASS MANAGER PORTAL"
              description="Developed a Student‑Teacher Portal using HTML, CSS, Python, and
Django, adept at managing online student records and assessments,
including mark updates, notices, and assignment uploads."
              ghLink="https://github.com/GUGGILAM-SAI-PRABHAT/CLASSMANAGER-STUDENT-TEACHER-PORTAL"
              
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Gemini}
              isBlog={false}
              title="GEMINI"
              description="Gemini, a React.js-powered application, seamlessly integrates with the Gemini API to deliver a dynamic user experience through state-of-the-art Generative AI content generation. 
              Its architecture follows a client-server model, utilizing React components and RESTful API calls for efficient communication and rendering."
              ghLink="https://github.com/Guggilam-sai-prabhat/Gemini-clone"
              demoLink = "https://geminiclone1.netlify.app/"
              
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Restuarnt}
              isBlog={false}
              title="GEMINI"
              description="It is Mern Stack Application with the following features: Reserve the table, Succes page and Error page "
              
              demoLink = "https://restaurant-reservation-dun.vercel.app/"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
