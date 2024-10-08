import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import Gradient from "../../Assets/Projects/gradient.gif";
// import Crypto from "../../Assets/Projects/crypto.png";
import Moviexy from "../../Assets/Projects/Moviexy.png";
import Maze from "../../Assets/Projects/Maze.png";
import portal from "../../Assets/Projects/class-portal.png";
import Gemini from "../../Assets/Projects/Gemini.png";
import Restuarnt from "../../Assets/Projects/Resturant.png";
import Twitter from "../../Assets/Projects/Twitter.png";
import Generate from "../../Assets/Projects/AI_GENERATED.png";

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
              imgPath={Generate}
              isBlog={false}
              title="AI-GENERATED"
              description="This is an AI Image Generation MERN app that utilizes the openAI API for image generation,MongoDB Atlas for the database functionality and Cloudinary for uploading images generated so they can be shared with the community."

              demoLink='https://ai-image-generationn.netlify.app/'
              ghLink="https://github.com/Guggilam-sai-prabhat/AI_GENERATED"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Moviexy}
              isBlog={false}
              title="MOVIEXY"
              description="Developed a responsive web application featuring user authentication, 
              real-time database interactions, a favorites system, and Firebase hosting, highlighting full-stack development capabilities. 
              Integrated with The Movie Database (TMDB) API for dynamic movie content display, showcasing expertise in API utilization and data management. 
              Used TailwindCSS for design, emphasizing responsive and modern web development practices."

              demoLink="https://moviexy-c0c66.web.app/"
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
              demoLink="https://geminiclone1.netlify.app/"

            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Restuarnt}
              isBlog={false}
              title="RESTAURANT RESERVATION"
              description="It is Mern Stack Application with the following features: Reserve the table, Succes page and Error page "

              demoLink="https://restaurant-reservation-dun.vercel.app/"

            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Twitter}
              isBlog={false}
              title="X-Twitter"
              description="It is a Twitter clone built with MERN. It has all the features of a normal Twitter, including: User authentication, creating tweets, following other users, and viewing other user's tweets."

              demoLink="https://twitter-x-clone-frontend.vercel.app/login"

            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Maze}
              isBlog={true}
              title="📑 MAZE GENERATOR & CRACKER"
              description="A maze has been constructed using a collaborative approach, where the
design and solution processes are visually presented to users through a
graphical interface. The correct path through the maze is highlighted
upon completion. 
               "
              ghLink="https://github.com/BOLISETTYSUJITH/MAZE-GENERATOR-AND-CRACKER"

            />
          </Col>
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
