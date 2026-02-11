// import React from "react";
import React, { useState, useEffect } from "react";
import "../style/page/projects.scss";
import { Link } from "react-router-dom";
import Photo1 from "../image/mics_project/mics1.jpg";
import Photo2 from "../image/mics_project/mics2.jpg";
import Photo3 from "../image/mics_project/mics3.jpg";
import Photo4 from "../image/mics_project/mics4.jpg";
import Photo5 from "../image/mics_project/mics5.jpg";
import Photo6 from "../image/mics_project/mics6.jpg";
import Photo7 from "../image/mics_project/mics7.jpg";
import Photo8 from "../image/mics_project/mics8.jpg";
import Eore1 from "../image/eore_project/Photo1.jpg";
import Eore2 from "../image/eore_project/Photo2.jpg";
import Eore3 from "../image/eore_project/Photo3.jpg";
import Eore4 from "../image/eore_project/Photo4.jpg";
import Eore5 from "../image/eore_project/Photo5.jpg";
import EU1 from "../image/eu_project/EU1.jpg";
import EU2 from "../image/eu_project/EU2.jpg";
import EU3 from "../image/eu_project/EU3.jpg";
import EU4 from "../image/eu_project/EU4.jpg";
import EU5 from "../image/eu_project/EU5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// CORRECTED IMPORT: Removed 'Loop'
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Projects = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="projects">
      <div className="cover">
        <div className="overlay"></div>

        <div className="content">
          <div className="container">
            <h2 data-aos="fade-right">Our Projects</h2>
          </div>
        </div>
      </div>

      <div className="work_text">
        <div className="container">
          <div className="content">
            <h3>Awesome Work</h3>
            <p>
              E4S puts developing sustainable capacity in everything we do, as
              our high-quality work should leave a lasting legacy.
            </p>
          </div>
        </div>
      </div>

      <div className="work_row">
      <div className="project">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            // CORRECTED MODULES: Removed 'Loop'
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Photo1} alt="MICS Project Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Photo2} alt="MICS Project Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Photo3} alt="MICS Project Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Photo4} alt="MICS Project Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Photo5} alt="MICS Project Slide 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Photo6} alt="MICS Project Slide 6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Photo7} alt="MICS Project Slide 7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Photo8} alt="MICS Project Slide 8" />
            </SwiperSlide>
          </Swiper>
          <div className="text">
            <h3>MICS</h3>
            <p> Multiple Indicator Cluster Survey In Azerbaijan</p>
          </div>

          <div className="info">
            <Link to="/MICS">
              <span> more info </span>
              <BsArrowRight className="icon" />
            </Link>
          </div>
        </div>

        <div className="project">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            // CORRECTED MODULES: Removed 'Loop'
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Eore1} alt="EORE Project Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Eore2} alt="EORE Project Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Eore3} alt="EORE Project Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Eore4} alt="EORE Project Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Eore5} alt="EORE Project Slide 5" />
            </SwiperSlide>
          </Swiper>

          <div className="text">
            <h3>EORE</h3>
            <p>Explosive Ordnance Risk Education</p>
          </div>

          <div className="info">
            <Link to="/EORE">
              <span> more info </span>
              <BsArrowRight className="icon" />
            </Link>
          </div>
        </div>

        <div className="project">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            // CORRECTED MODULES: Removed 'Loop'
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={EU1} alt="EU Endline Survey Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={EU2} alt="EU Endline Survey Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={EU3} alt="EU Endline Survey Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={EU4} alt="EU Endline Survey Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={EU5} alt="EU Endline Survey Slide 5" />
            </SwiperSlide>
            
          </Swiper>

          <div className="text">
            <h3>EU Endline Survey</h3>
            <p>End line Survey for the Programme of Community and Family</p>
          </div>

          <div className="info">
            <Link to="/EU" >
              <span> more info </span>
              <BsArrowRight className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
