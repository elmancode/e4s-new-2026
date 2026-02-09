import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import "../style/page/about.scss";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="cover">
        <div className="overlay"></div>

        <div className="content">
          <div className="container">
            <h2 data-aos="fade-right">
              We are a creative agency that focus on one-to-one customer service
              with robust ideas.
            </h2>
          </div>
        </div>
      </div>

      <div className="our_mission">
        <div className="container">
          <div className="content">
            <h3>Our Mission</h3>

            <div className="text">
              <p>
                Our mission at “Evidence for Solutions” (E4S) is to provide
                unparalleled research services and solutions to empower
                businesses, organizations, and individuals with actionable
                insights. We are committed to conducting rigorous and
                comprehensive research, leveraging our expertise and advanced
                methodologies to deliver accurate, reliable, and timely results.
                Through our research, we aim to drive informed decision-making,
                foster innovation, and contribute to the advancement of
                knowledge in various fields.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="our_vision">
        <div className="container">
          <div className="content">
            <h3>Our Vision</h3>

            <div className="text">
              <p>
                At E4S, our vision is to be a leading research company, driving
                innovation and shaping the future through cutting-edge research
                and insights. We strive to be at the forefront of advancements
                in research methodologies, technologies, and industry trends,
                delivering exceptional value to our clients and making a
                positive impact on society.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="core_values">
        <div className="container">
          <div className="content">
            <h3>Core Values:</h3>

            <div className="text">
              <p>
                <i>Excellence:</i> We are dedicated to delivering excellence in
                all aspects of our research services. We strive for the highest
                standards of quality, precision, and professionalism in our
                work.
              </p>
              <p>
                <i>Integrity::</i> We uphold the principles of integrity,
                transparency, and ethical conduct in all our research endeavors.
                We respect confidentiality, protect the rights of participants,
                and ensure responsible data management.
              </p>
              <p>
                <i>Collaboration:</i> We believe in the power of collaboration.
                We actively engage with our clients, partners, and stakeholders,
                fostering open communication, mutual respect, and teamwork to
                achieve shared goals.
              </p>
              <p>
                <i>Innovation:</i> We embrace innovation and continuously seek
                out new approaches, methodologies, and technologies to enhance
                our research capabilities. We are committed to staying at the
                forefront of advancements in our field.
              </p>
              <p>
                <i>Client Focus: </i> We prioritize our clients' needs and
                objectives, striving to exceed their expectations. We tailor our
                research solutions to address their specific requirements and
                provide exceptional customer service and support.
              </p>
              <p>
                <i>Continuous Learning:</i> We foster a culture of continuous
                learning and professional development. We encourage our team
                members to expand their knowledge, refine their skills, and stay
                abreast of the latest trends and advancements in research
                methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about_text">
        <div className="container">
          <p>
            Through our vision, mission, and core values, we aim to be a trusted
            partner, empowering our clients with valuable insights and
            research-driven solutions that enable them to make informed
            decisions, drive growth, and achieve their goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
