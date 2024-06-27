import Modal from "react-modal";
import React, { useState } from "react";
import projectImage from "../assests/images/project.jpeg";
import noticehub from "../assests/images/noticehub.png";
import localservice from "../assests/images/localservice.png";
import DabhiEdu from "../assests/images/dabhiedu.png";
import carasoul from "../assests/images/carasoul.png";
import filterData from "../assests/images/filter-data.png";
import filterImage from "../assests/images/filter-image.png";
import laundary from "../assests/images/laundary.png";
import laundaryProject from "../assests/images/laundary_project.png";
import parallax from "../assests/images/parallax.png";
import photoGallery from "../assests/images/photogallery.png";
import productCatalog from "../assests/images/product-catalog.png";
import reduxToolkit from "../assests/images/redux-toolkit.png";
import sneakerSelling from "../assests/images/sneaker-selling.png";
import taskTracker from "../assests/images/task-tracker.png";
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
      name: "DABHI EDUHUB",
      language: "HTML,CSS",
      github: "https://github.com/DabhiRavi009/CSS_Project",
      preview: "https://ravi-cssfinalproject.netlify.app/",
      description:
        "I developed a learning project incorporating HTML and CSS, focusing on fundamental CSS properties. This simple project has significantly enhanced my understanding of web design. I followed a tutorial from the Thapa Technical YouTube channel, which guided me through the process.",
      modalImage: DabhiEdu,
    },
    {
      image: projectImage,
      detail: "CSS Project",
      name: "Carasoul",
      language: "HTML,CSS",
      github: "This project is not added on github",
      preview: "https://ravi-carausal.netlify.app/",
      description:
        "I developed a learning project incorporating HTML and CSS, focusing on fundamental CSS properties. This simple project has significantly enhanced my understanding of web design. I followed a tutorial from the Thapa Technical YouTube channel, which guided me through the process.",
      modalImage: carasoul,
    },
    {
      image: projectImage,
      detail: "Javascript Project",
      name: "FilterData",
      language: "HTML,CSS,Javascript",
      github: "This project is not added on github",
      preview: "https://ravi-task16.netlify.app/",
      description:
        "This project involves using HTML, CSS, and JavaScript to cover fundamental JavaScript concepts. The data is provided in JSON format. Using the onchange event, we can filter the data based on a specified name. This task is part of the Upskill Mafia course and aims to enhance your JavaScript skills.",
      modalImage: filterData,
    },
    {
      image: projectImage,
      detail: "Javascript",
      name: "FilterImage",
      language: "HTML,CSS,Javascript",
      github: "This project is not added on github",
      preview: "https://ravi-filterimages.netlify.app/",
      description:
        "This project involves using HTML, CSS, and JavaScript to cover fundamental JavaScript concepts. The main focus is on filtering images based on certain criteria. I learned how to implement this project with the help of a YouTube video.",
      modalImage: filterImage,
    },
    {
      image: projectImage,
      detail: "CSS Project",
      name: "Laundary",
      language: "HTML,CSS,Javascript",
      github: "This project is not added on github",
      preview: "https://ravi-task17.netlify.app/",
      description:
        "This project utilizes HTML, CSS, and JavaScript to create a laundry service booking system. It offers various laundry-related services that users can select and book. The system calculates the total amount for the selected services than showing the booking services in alert box.",
      modalImage: laundary,
    },
    {
      image: projectImage,
      detail: "Javascript Project",
      name: "Laundary Project",
      language: "HTML,CSS,Javascript,Express JS",
      github: "https://github.com/DabhiRavi009/laundary_service",
      preview: "https://ravi-laundaryporject.netlify.app/",
      description:
        "This laundry project offers a range of services such as washing, ironing, and cleaning. Users can book the services they need, and upon booking, an email is sent to the user detailing the selected services and the total amount. The project also includes form validation to ensure all user inputs are correct before confirming the booking.",
      modalImage: laundaryProject,
    },
    {
      image: projectImage,
      detail: "CSS Project",
      name: "Parallax",
      language: "HTML,CSS",
      github: "This project is not added on github",
      preview: "https://ravi-parallax.netlify.app/",
      description:
        "This project involves using HTML and CSS to demonstrate and clear basic CSS functionalities. It covers fundamental CSS concepts and techniques, helping to build a strong foundation in styling web pages.",
      modalImage: parallax,
    },
    {
      image: projectImage,
      detail: "CSS Project",
      name: "Photo Gallery",
      language: "HTML,CSS",
      github: "This project is not added on github",
      preview: "https://ravi-photogallery.netlify.app/ ",
      description:
        "This project involves using HTML and CSS to demonstrate and clear basic CSS functionalities. It covers fundamental CSS concepts and techniques, helping to build a strong foundation in styling web pages.",
      modalImage: photoGallery,
    },
    {
      image: projectImage,
      detail: "React JS",
      name: "Product Catalog",
      language: "HTML,CSS,React JS",
      github: "https://github.com/DabhiRavi009/Product-Catalog",
      preview: "https://ravi-productcatalog.netlify.app/ ",
      description:
        "This project, created using HTML, CSS, and React.js, focuses on state management concepts. It allows users to add products to their cart dynamically using React's state management capabilities.",
      modalImage: productCatalog,
    },
    {
      image: projectImage,
      detail: "Redux Toolkit",
      name: "Redux Toolkit",
      language: "HTML,CSS,React,Redux tookit",
      github: "https://github.com/DabhiRavi009/redux_toolkit",
      preview: "https://ravi-redux-toolkit.netlify.app/ ",
      description:
        "Explore our Redux Toolkit CRUD project, where you can effortlessly add and remove items. Utilizing JSON-formatted data fetched dynamically from an online source, this project showcases efficient state management with Redux Toolkit. Experience seamless interaction and real-time updates as you manage your data with ease.",
      modalImage: reduxToolkit,
    },
    {
      image: projectImage,
      detail: "CSS Project",
      name: "Sneaker Selling",
      language: "HTML,CSS",
      github: "This project is not added on github",
      preview: "https://ravi-sneakerselling.netlify.app/ ",
      description:
        "This project involves using HTML and CSS to demonstrate and clear basic CSS functionalities. It covers fundamental CSS concepts and techniques, helping to build a strong foundation in styling web pages.",
      modalImage: sneakerSelling,
    },
    {
      image: projectImage,
      detail: "React Project",
      name: "Task Tracker",
      language: "HTML,CSS,React",
      github: "https://github.com/DabhiRavi009/task-tracker",
      preview: "https://ravi-tasktracker.netlify.app/ ",
      description:
        "Introducing our React To-Do application! This project helps you manage your tasks efficiently with an intuitive interface. Add, edit, and delete tasks seamlessly, and enjoy real-time updates powered by React's state management. Stay organized and boost your productivity with this dynamic and user-friendly to-do app.",
      modalImage: taskTracker,
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
