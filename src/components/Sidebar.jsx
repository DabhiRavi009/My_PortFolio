import React from "react";
import profile_pic from "../assests/images/profile_pic.png";
import "../assests/css/style.css";

export const Sidebar = () => {
  const socialIcon = [
    {
      Name: "fa-brands fa-linkedin-in",
      link: "https://www.linkedin.com/in/dabhi-ravi-233962291/",
    },
    {
      Name: "fa-brands fa-github",
      link: "https://github.com/DabhiRavi009?tab=repositories",
    },
    {
      Name: "fa-brands fa-instagram",
      link: "https://www.instagram.com/_r_a_v_i_d_a_b_h_i_2_9_/",
    },
  ];

  const handleEmailButtonClick = (event) => {
    event.preventDefault();
    const predefinedEmailId = "dabhiravi369@gmail.com";
    const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(
      predefinedEmailId
    )}`;
    window.open(gmailComposeUrl, "_blank");
  };

  const contactIcon = [
    {
      iName: "fa-solid fa-mobile-screen",
      Name: "Phone",
      detail: "+91 8153889232",
      link: "tel:+918153889232",
    },
    {
      iName: "fa-regular fa-envelope",
      Name: "Email",
      detail: "dabhiravi369@gmail.com",
      link: "",
    },
    {
      iName: "fa-solid fa-location-dot",
      Name: "Location",
      detail: "Odhav, Ahmedabad",
      link: "https://www.google.com/maps/place/23%C2%B000'59.1%22N+72%C2%B038'27.8%22E/@23.0164281,72.6384821,17z/data=!3m1!4b1!4m4!3m3!8m2!3d23.0164281!4d72.641057?entry=ttu",
    },
    {
      iName: "fa-regular fa-calendar",
      Name: "Birthdate",
      detail: "20 Oct, 2002",
      link: "",
    },
  ];

  return (
    <div className="sidebar_container">
      <div className="profile_picture">
        <img src={profile_pic} alt="profile_pic.jpg" />
      </div>

      <div className="profile">
        <div className="heading">
          <h1>DABHI RAVI</h1>
          <h3>MERN STACK INTERN</h3>
        </div>

        <div className="social">
          {socialIcon.map((social, index) => (
            <div className="icon" key={index}>
              <a href={social.link} target="_blank" rel="noreferrer">
                <i className={social.Name}></i>
              </a>
            </div>
          ))}
        </div>

        <div className="contact">
          {contactIcon.map((icon, index) => (
            <div className="detail" key={index}>
              <div className="contact-icon">
                {icon.iName === "fa-regular fa-envelope" ? (
                  <a href="/" onClick={handleEmailButtonClick}>
                    <i className={icon.iName}></i>
                  </a>
                ) : icon.iName === "fa-solid fa-mobile-screen" ? (
                  <a href={icon.link}>
                    <i className={icon.iName}></i>
                  </a>
                ) : icon.link ? (
                  <a href={icon.link} target="_blank" rel="noreferrer">
                    <i className={icon.iName}></i>
                  </a>
                ) : (
                  <i className={icon.iName}></i>
                )}
              </div>
              <div className="description">
                <h4>{icon.Name}</h4>
                <p>{icon.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="download">
          <a href="/RAVI_CV.pdf" download="DABHI_RAVI_CV.pdf" className="btn">
            <i className="fa-solid fa-download"></i> Download CV
          </a>
        </div>
      </div>
    </div>
  );
};
