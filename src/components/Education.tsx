import React from "react";

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
}

const Education: React.FC = () => {
  const educations: Education[] = [
    {
      id: 1,
      degree: "BS Software Engineering",
      institution: "Virtual University of Pakistan",
      period: "2021 – Current",
      location: "Lahore",
      grade: "3.66/4",
    },
    {
      id: 2,
      degree: "BS (Hons) Physics",
      institution: "University of Education Township",
      period: "2017 – 2021",
      location: "Lahore",
      grade: "3.53/4",
    },
    {
      id: 3,
      degree: "F.Sc Pre Engineering",
      institution: "Govt. Degree College",
      period: "2014 – 2016",
      location: "Pattoki",
      grade: "82%",
    },
    {
      id: 4,
      degree: "Matric",
      institution: "Govt. High School",
      period: "2012 – 2014",
      location: "Pattoki",
      grade: "69%",
    },
  ];

  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">Education</h2>

        <div className="row">
          {educations.map((education) => (
            <div className="col-md-6 mb-4" key={education.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">{education.degree}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {education.institution} | {education.period}
                  </h6>
                  <p className="card-text">
                    <strong>Location:</strong> {education.location}
                    <br />
                    <strong>
                      {education.degree.includes("BS") ? "GPA" : "Grade"}:
                    </strong>{" "}
                    {education.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
