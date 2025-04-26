import React from "react";

interface SkillCategory {
  id: number;
  title: string;
  skills: string[];
  badgeColor: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: "Backend",
      skills: ["Express.js", "Node.js", "NestJS", "TypeScript"],
      badgeColor: "primary",
    },
    {
      id: 2,
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap5",
        "JavaScript",
        "jQuery",
        "React.js",
      ],
      badgeColor: "success",
    },
    {
      id: 3,
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL"],
      badgeColor: "danger",
    },
    {
      id: 4,
      title: "Other Technical Skills",
      skills: ["Git & GitHub", "S3", "Jest", "Joi", "GraphQL"],
      badgeColor: "dark",
    },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-5">Technical Skills</h2>

        <div className="row">
          {skillCategories.map((category) => (
            <div className="col-md-6 mb-4" key={category.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">{category.title}</h4>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {category.skills.map((skill, index) => (
                      <span
                        className={`badge bg-${category.badgeColor}`}
                        key={index}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
