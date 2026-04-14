import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../style/page/home.scss";
import Cover1 from "../image/cover_photo/cover1.jpg";
import Cover2 from "../image/cover_photo/cover2.jpg";
import Cover3 from "../image/cover_photo/cover3.jpg";
import File from "../image/file.png";
import Visual from "../image/visual.png";
import Develop from "../image/develop.png";
import About from "../image/aboutus.jpg";
import { TbPlayerPlayFilled } from "react-icons/tb";
import CardProject from "../components/CardProject";
import VideoCover from "../image/mics_project/mics1.jpg"
import { projectsData } from "../data";
import Unicef from "../image/unicef.png";
import WHO from "../image/who.png";
import MICS from "../image/micslogo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
  FreeMode,
} from "swiper/modules";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const iframeRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  const handleWatchVideo = () => {
    setShowVideo(true);
    setTimeout(() => {
      iframeRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <div className="home">
      {/* section 1 */}
      <section className="introduction">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          effect={"fade"}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          <SwiperSlide className="slideItems">
            <img src={Cover1} alt="coverphoto" />
            <div className="overlay"> </div>
            <div className="content" data-aos="fade-right">
              <div className="container">
                <h1>
                  Welcome to Evidence for Solutions (E4S) - Your Source for
                  High-Quality Research and Evidence
                </h1>

                <div className="visitWork">
                  <Link to="/projects" target="_blank">
                    <span> Visit Our Works </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slideItems">
            <img src={Cover2} alt="coverphoto" className="cover2" />
            <div className="overlay"></div>
            <div className="content" data-aos="fade-right">
              <div className="container">
                <h1>
                  Transforming Ideas into Action: Maximized Stakeholder
                  Involvement
                </h1>

                <div className="visitWork">
                  <Link to="/projects" target="_blank">
                    <span> Visit Our Works </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slideItems">
            <img src={Cover3} alt="coverphoto" />
            <div className="overlay"></div>
            <div className="content" data-aos="fade-right">
              <div className="container">
                <h1>
                  Empowering Decision-Makers: <br /> Expert Training Programs in
                  Data Management and Analysis
                </h1>

                <div className="visitWork">
                  <Link to="/projects" target="_blank">
                    <span> Visit Our Works </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* section 2 */}
      <section className="service">
        <div className="container">
          <div className="content" data-aos="fade-up">
            <span>Services</span>
            <h3>
              With a team of experts possessing over 10 years of project
              experience, E4S is highly committed to delivering profound
              research solutions for you
            </h3>
          </div>

          <div className="service-row" data-aos="fade-up">
            <div className="row">
              <div className="row-items">
                <img src={File} alt="" />
                <h3>Evidence Generation </h3>
                <p>
                  At E4S, we understand the importance of accurate and reliable
                  data in driving informed decision-making.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="row-items">
                <img src={Visual} alt="" />
                <h3>Data Analysis & Visualization</h3>
                <p>
                  Our skilled data analysts are adept at extracting meaningful
                  patterns and correlations from complex datasets.
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
                  comprehensive capacity development programs.
                </p>
              </div>
            </div>
          </div>

          <div className="moreInfo" data-aos="fade-up">
            <Link to="/services" target="_blank">
              <span> More Info </span>
            </Link>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="about">
        <div className="about">
          <div className="leftside">
            <img src={About} alt="" />
          </div>
          <div className="rightside">
            <div data-aos="fade-up">
              <h4>About us</h4>
              <span> Our Profil</span>
              <p>
                Evidence for Solutions (E4S) is an independent research company
                that is specialized in the generation of high - quality evidence
                (statistics, research, reviews, evaluations) to support our
                clients in understanding the problems, measuring the results and
                using the evidence to inform their decisions. 
              </p>

              <div className="aboutus">
                <Link to="/about" target="_blank">
                  <span> About us </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="previous_works">
        <div className="work" data-aos="fade-up">
          <div className="container">
            <div className="content">
              <h3>Previous Works</h3>
              <p>
                E4S has specialists with a long and positive track record of
                managing complex projects.
              </p>
            </div>

            <div className="projectsData">
              {projectsData.map((item) => (
                <CardProject
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  more={item.more}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className="how_we_work">
        <div className="how_work">
          <div className="leftside">
            <h3 data-aos="fade-right"> How we work </h3>
            <p data-aos="fade-left">
              E4S maximizes stakeholder involvement throughout the project cycle
              including design, implementation and evaluation phases, which
              informs our tailored to each stakeholder approach from the very
              start of the project.
            </p>

            <div className="watch">
              <div className="video_watch" data-aos="fade-right" >
            <button onClick={handleWatchVideo}>
                <TbPlayerPlayFilled className="play"  /> 
            </button>
         
      
              </div>
              <div className="text" data-aos="fade-left">
                <span> Watch video </span>
              </div>
            </div>
          </div>

          <div className="rightside">

  <div className="video-container">
    {!showVideo ? (
      <img src={VideoCover} alt="Video cover" />
    ) : (
      <iframe
        ref={iframeRef}
        src="https://www.youtube.com/embed/3FZJ5Icn8bs?autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      
      ></iframe>
    )}
  </div>

          </div>
        </div>
      </section>

      {/* section 6 */}
      <section className="partners">
        <div className="partners" data-aos="fade-up">
          <div className="container">
            <div className="content">
              <h3>Our Partners</h3>
              <p>
                At Evidence for Solutions (E4S), we are incredibly proud to work
                with highly esteemed institutions and companies to create
                positive change with the help of evidence-based solutions. Our
                valuable collaborations have advanced our objective to produce
                high-quality evidence and support decision-making processes.
              </p>
            </div>

            <div className="partners_logo">
              <Swiper
                modules={[FreeMode, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                freeMode={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                className="logo"
              >
                <SwiperSlide>
                  <div className="unicef">
                    <img src={Unicef} alt="uniceflogo" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="who">
                    <img src={WHO} alt="whologo" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="who">
                    <img src={MICS} alt="" className="mics" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="unicef">
                    <img src={Unicef} alt="uniceflogo" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="who">
                    <img src={WHO} alt="whologo" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* section 7 */}
      <section className="get_in_touch_area">
        <div className="get_in_touch">
          <div className="container">
            <div className="content" data-aos="fade-up">
              <h3>Get in Touch</h3>
              <p>
                Please use the contact details below to contact us if you have
                any questions. Our experienced team is ready to support you and
                ensure you receive a quick response.
              </p>
            </div>

            <div className="form">
              <form action="#">
                <div className="row1" data-aos="fade-up">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Email" />
                </div>
                <div className="row2" data-aos="fade-up">
                  <input type="text" placeholder="Subject" />
                  <textarea
                    className="message"
                    cols="30"
                    placeholder="Message"
                    rows="10"
                  ></textarea>
                  <button className="boxed_btn" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
