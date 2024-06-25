import React from "react";
import "../assests/css/style.css";
import { Footer } from "./Footer";

export const About = () => {
  const aboutSection = [
    {
      para: `In just three months at Grownited Private Limited, I immersed myself in mastering the comprehensive MERN STACK. Within this short span, I not only grasped the intricacies of each
                component but also showcased my skills by delivering a LOCAL SERVICE
                project with finesse.`,

      btnName: "MERN SATCK",
      btnStyle: "mern",
    },
    {
      para: `In a short 15-day stint at Creart Solution, I done an internship in Python Django. Despite the brevity, I managed to complete NoticeHub, a project that showcases my skills and adaptability.`,
      btnName: "Python D'jango",
      btnStyle: "python",
    },
  ];

  return (
    <div className="about_container">
      <h1 className="head-1">About Me</h1>
      <div className="intro">
        <p>
          Hi, I'm Dabhi Ravi, an IT graduate from Shantilal Shah Engineering
          College. Originally from Ranpur near Botad, I'm currently based in
          Odhav, Ahmedabad.
        </p>

        <p>
          I recently completed a rewarding three-month MERN stack internship at
          Grownited Private Limited. I'm known for my honesty, patience, and
          hard work, constantly honing my skills to become an exceptional
          developer.
        </p>

        <p>
          My goal is to excel in React and Node technologies, contributing to
          the success of any company I join. Let's chat about how I can add
          value to your team!
        </p>

        <h3 className="head-2">Best Regards,</h3>
        <h4 className="head-2">Dabhi Ravi</h4>
      </div>

      <h1 className="head-1">What I Learned During Internship!</h1>
      <div className="technologies">
        {aboutSection?.map((tech, index) => {
          return (
            <div className="technology" key={index}>
              <p>{tech.para}</p>
              <button className={tech.btnStyle}>{tech.btnName}</button>
            </div>
          );
        })}
      </div>

      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
};
