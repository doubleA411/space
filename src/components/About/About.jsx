import React from "react";
import "./About.css";
import SubHeader from "../SubHeader/SubHeader";

function About() {
  return (
    <div className="about">
      <SubHeader title="About us" />
      <p className="content">
        Our company is a full-service agency specializing in web and app
        development, as well as branding. We have a team of skilled and
        experienced developers and designers who are dedicated to helping
        businesses establish a strong online presence through intuitive and
        visually appealing websites and apps, as well as cohesive and effective
        branding. <br /><br />
        
        We have a passion for delivering high-quality products and
        excellent customer service, and have established a reputation as a
        trusted and reliable partner for businesses in a variety of industries.
        Our team is constantly staying up-to-date on the latest technologies and
        trends in the field to ensure that our clients receive the best
        solutions for their needs. <br /><br />
        
        Whether you are looking to build a new
        website from scratch, revamp your existing site, develop a custom app,
        or establish a strong brand identity, we have the skills and resources
        to bring your vision to life. Contact us today to learn more about how
        we can help you succeed online.
      </p>
    </div>
  );
}

export default About;
