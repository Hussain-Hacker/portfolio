import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-5">Work Experience</h2>

        {/* Experience 1 */}
        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-title">Associate Software Engineer</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              Futurenostics | 12/2024 – Current
            </h6>
            <p className="card-text">Location: Islamabad, Pakistan</p>

            <div className="mt-3">
              <h5>Promethium</h5>
              <p className="fw-semibold">Role: Full Stack Developer</p>
              <p>Technologies: NestJS, PostgreSQL, GraphQL</p>
              <ul>
                <li>
                  Worked on DAS Management within a microservices architecture.
                </li>
                <li>
                  Developed and maintained GraphQL APIs for seamless data
                  querying and communication between services.
                </li>
                <li>
                  Designed and implemented scalable backend solutions using
                  NestJS.
                </li>
                <li>
                  Utilized PostgreSQL for efficient data storage and retrieval.
                </li>
                <li>
                  Wrote extensive unit tests and integration tests to ensure
                  system reliability and maintain high code quality.
                </li>
                <li>
                  Collaborated with a large team of developers to integrate DAS
                  with other microservices across the platform.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-title">Backend Developer</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              Argonteq | 08/2023 – 12/2024
            </h6>
            <p className="card-text">Location: Lahore</p>

            <div className="mt-3">
              <h5>Solutionz</h5>
              <p className="fw-semibold">Role: Backend Developer</p>
              <p>Technologies: MongoDB, Express.js, React.js, Node.js</p>
              <ul>
                <li>
                  Designed and implemented a comprehensive backend for an
                  educational CRM system.
                </li>
                <li>
                  Developed user registration and authentication modules for
                  both admins and parents.
                </li>
                <li>
                  Created a robust system for managing student profiles,
                  enrollments, and progress tracking.
                </li>
                <li>
                  Implemented features for parents to monitor their children's
                  academic performance and receive notifications.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
