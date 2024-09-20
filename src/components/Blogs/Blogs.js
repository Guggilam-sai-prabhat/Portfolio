import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import firebase from "../../Assets/Firebase.png"



function Blogs () {

    return(
        <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={firebase}
              isBlog={true}
              title="Understanding Firebase Pricing: A Complete Guide for Developers"
              description="First-time users who are using Firebase and are confused about the plans will get a clear-cut idea and understand the costs after reading the blog"
            //   demoLink='https://ai-image-generationn.netlify.app/'
              ghLink="https://medium.com/@guggliamprabhat/understanding-firebase-pricing-a-complete-guide-for-developers-57ad6031750c"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
    
}


export default Blogs;