import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import "../style/page/contact.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="contact">
      <div className="cover">
        <div className="overlay"></div>

        <div className="content">
          <div className="container">
            <h2 data-aos="fade-right">Contact Us</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="contactInfo">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.7033321453356!2d49.802838545907925!3d40.39120507395597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d8b713f43c3%3A0xc318777b1aa38871!2sAbbas%20Mirza%20Sharifzadeh%20St%2C%20Baku!5e0!3m2!1sen!2saz!4v1685853324284!5m2!1sen!2saz"
              width="100%"
              height="600"
              style={{ border: "0", borderRadius: "20" }}
            ></iframe>
          </div>

          <div className="adress">
            <div className="adress_i">
              <div className="contact_icon">
                <ImLocation className="icon" />

                <p>Abbas Mirza Sharifzadeh St</p>
              </div>
              <div className="contact_icon">
                <MdEmail className="icon" />

                <p>info@e4s.com</p>
              </div>
              <div className="contact_icon">
                <BsFillPhoneFill className="icon" />

                <p>+994 51 573 62 23</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="get_in_touch_area">
        <div className="get_in_touch">
          <div className="container">
            <div className="content">
              <h3>Get in Touch</h3>
              <p>
                Please use the contact details below to contact us if you have
                any questions. Our experienced team is ready to support you and
                ensure you receive a quick response.
              </p>
            </div>

            <div className="form">
              <form action="#">
                <div className="row1">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Email" />
                </div>
                <div className="row2">
                  <input type="text" placeholder="Subject" />
                  <textarea
                    className="message"
                    cols="30"
                    placeholder="Message"
                    rows="10"
                  ></textarea>
                  <button class="boxed_btn" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
