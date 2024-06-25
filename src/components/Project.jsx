import React from "react";
import "../assests/css/style.css";

export const Project = ({ project }) => {
  if (!project) return null;

  return (
    <div className="Project_container">
      <h1 className="head-1">Web Development</h1>
      <div className="project">
        <div className="left">
          <h4 className="head-2">
            <i className="fa-solid fa-file"></i> Project : {project.name}
          </h4>
          <h4 className="head-2">
            <i className="fa-solid fa-code"></i> Language: {project.language}
          </h4>
        </div>
        <div className="right">
          <a
            href="https://github.com/DabhiRavi009"
            className="head-2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i> Github : {project.github}
          </a>
          <a
            href={project.preview}
            className="head-2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-expand"></i> Preview : {project.preview}
          </a>
        </div>
      </div>
      <div className="paragraph-container">
        <p>{project.description}</p>
      </div>
      <div className="image-container">
        <img src={project.modalImage} alt={project.name} />
      </div>
    </div>
  );
};
