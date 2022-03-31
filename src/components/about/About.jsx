import React from "react";
import "./about.css";
import ME from "../../assets/meee.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>2+ Years Worging Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>100+ Happy Clients</small>
            </article>

            <article className="about__card">
              <VscFolderActive className="about-icon" />
              <h5>Projetcs</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos nisi a aliquid, sint id molestias voluptas? Dolor
            excepturi architecto harum magnam omnis alias distinctio tenetur,
            quibusdam eius, ad eveniet quod!
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
