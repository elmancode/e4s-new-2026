import File from "../image/file.png";
import Visual from "../image/visual.png";
import Develop from "../image/develop.png";
import "../style/page/service.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="service">
      <div className="cover">
        <div className="overlay"></div>

        <div className="content">
          <div className="container">
            <h2 data-aos="fade-right">Our Services</h2>
          </div>
        </div>
      </div>

      <div className="service_teil">
        <div className="container">
          <div className="content">
            <span>Services</span>
            <h3>
              With a team of experts boasting over 15 years of relevant
              experience, we are committed to providing exceptional research
              solutions for you.
            </h3>
          </div>

          <div className="service-row">
            <div className="row">
              <div className="row-items">
                <img src={File} alt="" />
                <h3>Evidence Generation</h3>
                <p>
                  At E4S, we understand the importance of accurate and reliable
                  data in driving informed decision-making. Our data collection
                  services are designed to help you gather, organize, and
                  analyze data efficiently, enabling you to extract valuable
                  insights and make data-driven strategies for your business.
                  With our expertise and advanced methodologies, we offer a
                  comprehensive range of data collection services tailored to
                  your specific needs.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="row-items">
                <img src={Visual} alt="" />
                <h3> Data Analysis & Visualization</h3>
                <p>
                  Our skilled data analysts are adept at extracting meaningful
                  patterns and correlations from complex datasets. Whether you
                  need statistical analysis, or data visualization, we have the
                  tools and knowledge to transform raw data into actionable
                  insights.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="row-items">
                <img src={Develop} alt="" />
                <h3> Capacity Development</h3>
                <p>
                  At E4S, we go beyond providing research services; we also
                  empower individuals and organizations through our
                  comprehensive capacity development programs. We believe that
                  building skills and knowledge is essential for sustainable
                  growth and innovation. Our capacity development services are
                  designed to equip you with the tools, techniques, and
                  expertise needed to excel in research and data-driven
                  decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
