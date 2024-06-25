import Modal from "react-modal";
import React, { useState } from "react";
import projectImage from "../assests/images/project.jpeg";
import noticehub from "../assests/images/noticehub.png";
import localservice from "../assests/images/localservice.png";
import { Project } from "./Project";
import { Footer } from "./Footer";
import "../assests/css/style.css";

Modal.setAppElement("#root");

export const Work = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const workPortfolio = [
    {
      image: projectImage,

      detail: "Summer Internship Project",

      name: "Notice Hub",
      language: "Python D'jango",

      github: "https://github.com/DabhiRavi009/summer_internship",

      preview:
        "https://drive.google.com/drive/folders/126Q-5LBXTyPTYeGVjobjkKu35SMS7qWF",

      description:
        "Notice Hub is a web application by which admin can post the notice of fees, circular or activities and student can view all the notice. The “Notice Hub” project aims to revolutionize the way organizations and communities manage and disseminate information, fostering improved communication, engagement, and collaboration among users. The notice hub is a designed to be a versatile communication tool that caters to the needs of various sectors, including educational institutions, businesses and government agencies.",

      modalImage: noticehub,
    },
    {
      image: projectImage,

      detail: "Internship Project",

      name: "Local Service",

      language: "MERN STACK",

      github:
        "https://github.com/DabhiRavi009/Internship_Project_Frontend, https://github.com/DabhiRavi009/Internship_Project_Backend",

      preview:
        "https://drive.google.com/drive/folders/129qWZwrhxAqcINvKWs_1M4I_kqFMPoHY",

      description:
        "A Local Service Project aims to address pressing social issues within our immediate vicinity by mobilizing local resources and community members. This project is driven by the belief that sustainable change begins at the grassroots level and that local initiatives have the power to create meaningful impact. The project focuses on several key areas including education, healthcare, environmental sustainability, and socio-economic development. Through collaborative efforts with local organizations, volunteers, and stakeholders, we aim to implement a range of activities and interventions tailored to the specific needs of our community.",

      modalImage: localservice,
    },
    {
      image: projectImage,
      detail: "CSS Project",
      name: "DABHI EDU",
      language: "HTML,CSS",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "60%",
      height: "80%",
      backgroundColor: "#f8f8f8",
      padding: "20px",
      zIndex: "1000",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex: "1000",
    },
  };

  return (
    <div className="work_container">
      <h1 className="head-1">Portfolio</h1>
      <div className="portfolio-container">
        {workPortfolio.map((port, index) => {
          return (
            <div
              className="portfolio"
              key={index}
              onClick={() => openModal(port)}
              style={{ cursor: "pointer" }}
            >
              <img src={port.image} alt={port.name} />
              <p>{port.detail}</p>
              <h4>{port.name}</h4>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Modal"
        style={customStyles}
      >
        {selectedProject && (
          <Project project={selectedProject} onClick={closeModal} />
        )}
      </Modal>

      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
};
