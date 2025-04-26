import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero py-5">
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-1 fw-bold">Muzammal Hussain</h1>
            <p className="lead mb-4">Full-Stack Developer</p>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://www.linkedin.com/in/muzammal-hussain-836a96151/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                LinkedIn
              </a>
              <a
                href="mailto:hussainhtp@gmail.com"
                className="btn btn-secondary"
              >
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
