import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I've become enchanted by coding and have managed to grasp a few concepts, I believe... 🤔
              <br />
              <br />
              My passion lies in developing&nbsp;
                <b className="purple">new and innovative</b> web applications
                that address real-world challenges.{" "}
                <b className="purple">
                I take pleasure in transforming ideas into reality with the power of programming.
                </b>
              <br />
              <br />
              Whenever I can, I channel my enthusiasm into creating products
              using <b className="purple">the latest technologies</b> and
                <b className="purple">
                  {" "}
                  keep myself
                </b>
              &nbsp; with
                <b className="purple"> abreast of the newest trends in web development.</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Guggilam-sai-prabhat"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/ph_prabhat"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ph.prabhat/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&source=mailto&to=guggliamprabhat@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope  />
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
