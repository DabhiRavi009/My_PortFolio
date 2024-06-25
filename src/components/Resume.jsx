import React from "react";
import "../assests/css/style.css";
import { Footer } from "./Footer";

export const Resume = () => {
  const education = [
    {
      year: "2017-2018",
      name: "Class 10",
      school: "SMT. C.S. Gadani HighSchool, Ranpur",
    },
    {
      year: "2019-2020",
      name: "Class 12 (Science)",
      school: "Aradhana Ucchattar Madhayamik Shala, Botad",
    },
    {
      year: "2020-2024",
      name: "BE - Information Technology",
      school: "Shantilal Shah Engineering College, Bhavanagar",
    },
  ];

  const experience = [
    {
      para: "Present",
      desc: "I am a fresher candidate. I have done an internship for 3 months in MERN STACK.",
    },
    {
      para: "Frontend Using React and Redux",
    },
    {
      para: "Backend Using Node JS",
    },
  ];

  const frontendSkill = [
    {
      skillName: "HTML",
      percentage: "95%",
      color: "red",
    },
    {
      skillName: "CSS",
      percentage: "80%",
      color: "purple",
    },
    {
      skillName: "JavaScript",
      percentage: "70%",
      color: "blue",
    },
    {
      skillName: "React",
      percentage: "65%",
      color: "pink",
    },
  ];

  const backendSkill = [
    {
      skillName: "Node.js",
      percentage: "70%",
      color: "red",
    },
    {
      skillName: "Express",
      percentage: "65%",
      color: "purple",
    },
    {
      skillName: "MongoDB",
      percentage: "60%",
      color: "blue",
    },
  ];

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div className="skills" key={index}>
        <div className="skill">
          <div className="technology-name">
            <p>{skill.skillName}</p>
          </div>
          <div className="technology-percentage">
            <p>{skill.percentage}</p>
          </div>
        </div>
        <div className="progress-bar-container">
          <div
            className={`progress-bar ${skill.color}`}
            style={{ width: skill.percentage }}
          ></div>
        </div>
      </div>
    ));
  };

  return (
    <div className="resume_container">
      <h1 className="head-1">Resume</h1>
      <div className="container">
        <div className="container-1">
          <div className="educations">
            <h2 className="head-2">
              <i className="fa-solid fa-graduation-cap"></i> Education
            </h2>
            <div className="education">
              {education.map((edu, index) => (
                <div className="edu" key={index}>
                  <p className="para-3">{edu.year}</p>
                  <h3 className="head-3">{edu.name}</h3>
                  <h4 className="head-4">{edu.school}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="experiences">
            <h2 className="head-2">
              <i className="fa-solid fa-briefcase"></i> Experience
            </h2>
            <div className="experience">
              {experience.map((exp, index) => (
                <div className="exp" key={index}>
                  <p className="para">{exp.para}</p>
                  <h3 className="description">{exp.desc}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-2">
          <div className="frontend_container">
            <h2 className="head-2">Frontend Skills</h2>
            <div className="frontend">{renderSkills(frontendSkill)}</div>
          </div>

          <div className="backend_container">
            <h2 className="head-2">Backend Skills</h2>
            <div className="backend">{renderSkills(backendSkill)}</div>
          </div>
        </div>
      </div>

      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
};
