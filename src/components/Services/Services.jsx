import React from "react";
import "./Services.css";
import SubHeader from "../SubHeader/SubHeader";

function Services() {
  return (
    <div className="services">
      <SubHeader title="Services" />
      <p className="content">
        <b>What We Provide</b>
        <br />
        <br />
        At our company, we provide a range of services to help businesses
        establish a strong online presence and achieve their goals. Some of the
        services we offer include:
        <br />
        <br />
        <b> Web development:</b> Our team of experienced developers can help you
        build a new website from scratch, revamp your existing site, or add new
        features to enhance its functionality and performance.
        <br />
        <br />
        <b>App development:</b> We have the skills and resources to develop
        custom apps for a variety of platforms, including iOS, Android, and the
        web. Our apps are designed to be intuitive and user-friendly, delivering
        an exceptional user experience.
        <br />
        <br />
        <b>Branding:</b> Our designers and branding strategists will work with
        you to create a cohesive and effective branding strategy that accurately
        reflects your business and resonates with your target audience. We offer
        a range of branding services, including logo design, brand guidelines,
        and visual identity development.
        <br /><br />
        <i>
          Contact us today to learn more about how we can help your
          business succeed online.
        </i>
      </p>
    </div>
  );
}

export default Services;
