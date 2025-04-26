import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2 className="section-title">About Me</h2>
            <p className="lead">Hey, I'm Muzammal!</p>
            <p>
              I'm a Full-Stack Developer with 2+ years of experience building
              web applications. I work with Node.js and NestJS on the backend
              and React.js on the frontend. I've worked with SQL (PostgreSQL)
              and NoSQL (MongoDB) to design efficient databases and APIs.
            </p>
            <p>
              I use Git & GitHub daily, write unit and integration tests with
              Jest. I've also implemented data validation using Joi to ensure
              clean and secure inputs. I enjoy solving problems, writing clean
              code, and learning new technologies to build better applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
