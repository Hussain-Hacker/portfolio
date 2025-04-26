import React from "react";

interface Project {
  id: number;
  title: string;
  role: string;
  technologies: string;
  description: string;
  tasks: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Willo Box",
      role: "Backend Developer",
      technologies: "Node.js, VectorDB, OpenAI APIs, LangChain",
      description:
        "A platform where users can upload PDF files and ask context-based questions about the content.",
      tasks: [
        "Implemented backend logic to process user queries and retrieve accurate answers using OpenAI APIs and LangChain.",
        "Utilized VectorDB to store vector embeddings of uploaded PDFs for efficient semantic search and query resolution.",
      ],
    },
    {
      id: 2,
      title: "Crypto Broker",
      role: "Backend Developer",
      technologies: "NestJS, MongoDB, ReactJS, React Native",
      description:
        "A crypto exchange platform where users can sell cryptocurrency to the admin, who then transfers the equivalent cash amount to their bank.",
      tasks: [
        "Developed a secure backend to support the platform's functionality.",
        "Integrated MongoDB to store and manage user data effectively.",
        "Supported cross-platform compatibility with an admin panel built on ReactJS and iOS/Android apps developed with React Native.",
      ],
    },
    {
      id: 3,
      title: "KatanaInu",
      role: "Backend Developer",
      technologies: "MERN Stack (MongoDB, Express.js, Node.js, React.js)",
      description:
        "A gaming platform similar to Epic or Steam, where users can play games, and admins can upload games.",
      tasks: [
        "Built the complete backend infrastructure for game management and user accounts.",
        "Implemented a social media feature designed for organizing tournaments.",
      ],
    },
    {
      id: 4,
      title: "Obon",
      role: "Backend Developer",
      technologies: "PERN Stack (PostgreSQL, Express.js, Node.js, React.js)",
      description:
        "A restaurant tipping platform, allowing waitstaff and restaurants to register and receive tips from customers.",
      tasks: [
        "Contributed to the core tipping functionality and user authentication system.",
        "Implemented a change request (CR) to display Google Reviews provided by customers to the restaurant within the app.",
      ],
    },
    {
      id: 5,
      title: "Parry Script",
      role: "Backend Developer",
      technologies: "PERN Stack (PostgreSQL, Express.js, Node.js, React.js)",
      description:
        "A platform for buying and selling medicines among pharmacies.",
      tasks: [
        "Created a comprehensive marketplace system for medication exchange.",
        "Enabled users to register their pharmacies and manage transactions for purchasing and selling medications.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">Projects</h2>

        <div className="row">
          {projects.map((project) => (
            <div className="col-md-6 mb-4" key={project.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">{project.title}</h4>
                  <p className="fw-semibold">Role: {project.role}</p>
                  <p>Technologies: {project.technologies}</p>
                  <p className="card-text">{project.description}</p>
                  <ul>
                    {project.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
