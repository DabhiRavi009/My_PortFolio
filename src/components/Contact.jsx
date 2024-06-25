import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Footer } from "./Footer";
import "../assests/css/style.css";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();

  const validationSchema = {
    to_name: {
      required: {
        value: true,
        message: "This field is required",
      },
      maxLength: {
        value: 20,
        message: "Maximum character is 30",
      },
    },
    email: {
      required: {
        value: true,
        message: "This field is required",
      },
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Email should be valid",
      },
    },
    msg: {
      required: {
        value: true,
        message: "This field is required",
      },
    },
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_k8sx3tc",
        "template_zniqvwt",
        form.current,
        "2XhO26h2YDZ_cxI7U"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Message sending failed!", error.text);
        }
      );
    reset();
  };

  return (
    <div className="contact_container">
      <h1 className="head-1">Contact</h1>
      <div className="container">
        <div className="content-section">
          <h4 className="head-2">I'm always open to discussing product</h4>
          <h4 className="head-3">design, work, or partnerships.</h4>
          <p className="para">Please fill the required fields.</p>
        </div>

        <div className="form-container">
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <div className="form-element">
              <label htmlFor="name">
                Name <i className="fa-solid fa-star"></i>
              </label>
              <input
                type="text"
                id="name"
                {...register("to_name", validationSchema.to_name)}
                name="to_name"
                className="form"
                autoComplete="name"
              />
              <span className="error-message">
                {errors.to_name && errors.to_name.message}
              </span>
            </div>

            <div className="form-element">
              <label htmlFor="email">
                Email <i className="fa-solid fa-star"></i>
              </label>
              <input
                type="email"
                id="email"
                {...register("email", validationSchema.email)}
                name="email"
                className="form"
                autoComplete="email"
              />
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
            </div>

            <div className="form-element">
              <label htmlFor="msg">
                Message <i className="fa-solid fa-star"></i>
              </label>
              <textarea
                name="msg"
                id="msg"
                {...register("msg", validationSchema.msg)}
                className="form"
                autoComplete="message"
              ></textarea>
              <span className="error-message">
                {errors.msg && errors.msg.message}
              </span>
            </div>

            <div className="btn-container">
              <input type="submit" value="Submit" className="btn" />
            </div>
          </form>
        </div>
      </div>

      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
};
