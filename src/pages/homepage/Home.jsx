import React from "react";
import "./Home.css";
import Banner from "../../components/banner/Banner.jsx";

import oracle from "../../assets/Group.png";
import morpheus from "../../assets/Group (1).png";
import samsung from "../../assets/Vector (1).png";
import monday from "../../assets/Group (2).png";
import segment from "../../assets/Group (3).png";
import pagination from "../../assets/Pagination.png";
import ellipse from "../../assets/Display Icon.png";
import ellipse1 from "../../assets/Ellipse (1).png";
import ellipse2 from "../../assets/Ellipse (2).png";
import ellipse3 from "../../assets/Ellipse (3).png";
import group from "../../assets/Group 23 (1).png";
import about from "../../assets/Group 1261153016.png";
import right from "../../assets/right.png";
import Services from "../../components/services/Services";
import Why from "../../components/why-us/Why";
import Video from "../../components/video/Video";
import Digital from "../../components/digital-transformation/Digital";
import Testimonials from "../../components/testimonials/Testimonials";
import Faq from "../../components/Faq/Faq";
import Numbers from "../../components/Numbers/Numbers";
import Email from "../../components/email/Email";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
const Home = () => {
  return (
    <>
      <div className="container">
        {/* header */}
        {/* <div className="blue-header"></div> */}
        {/* Navbar Component */}
        <Navbar></Navbar>
        
        {/* Banner */}
        <Banner></Banner>
        {/* Success Section */}
        <div className="success-container">
          <div className="success-heading">
            <p>Trusted By Over 100+ Startups and freelance business</p>
          </div>
          <div className="success-images">
            <div className="images">
              <img src={oracle}></img>
            </div>
            <div className="images">
              <img src={morpheus}></img>
            </div>
            <div className="images">
              <img src={morpheus}></img>
            </div>
            <div className="images">
              <img src={samsung}></img>
            </div>
            <div className="images">
              <img src={monday}></img>
            </div>
            <div className="images">
              <img src={segment}></img>
            </div>
          </div>
        </div>
        {/* Services */}
        <Services></Services>
        {/* About Us Section */}
        <div className="about">
          <div className="about-left">
            <div className="about-heading">
              <p>WELCOME TO REGISTER KARO.IN</p>
              <h2>
                <span>About</span> Register Karo
              </h2>
            </div>
            <div className="about-description">
              <p>
                We have been using Intelegencia as our DevOps vendor for our
                field service applications over the last couple of years and I’m
                extremely pleased with their performance, ability to execute,
                and willingness to adapt in our ever changing environment. Perry
                is an outstanding leader who is fanatical about customer
                satisfaction. He has built a solid team which has consistently
                delivered on projects thereby exceeding everyone’s expectations.
              </p>
              <p>
                I would strongly recommend their services to any organization
                that is looking for solid, reliable, and predictable outcomes.
              </p>
            </div>
            <div className="about-button">
              <button class="learn-more">Learn More</button>
            </div>
          </div>
          <div className="about-right">
            <img src={about}></img>
          </div>
        </div>
        {/* why */}
        <Why></Why>
        {/* video */}
        <Video></Video>
        {/* happy-clients */}
        <div className="happy-clients">
          <div className="data-div">
            <div className="client-data">
              <div className="client-heading">
                <h2>Our Happy Clients</h2>
              </div>
              <div className="client-description">
                <p>
                  Professionally cultivate one-to-one customer service with
                  robust ideas. Dynamically innovate resource-leveling customer
                  service for state of the art customer service.
                </p>
              </div>
            </div>
          </div>
          <div className="client-image">
            <img src={pagination}></img>
          </div>
          <div className="text-div">
            <p>
              Show More<img src={right}></img>
            </p>
          </div>
        </div>
        <div className="orange-div">
          <div className="orange-container">
            <div className="item">
              <div className="item-logo">
                <img src={ellipse}></img>
              </div>
              <div className="item-text">Fill up Application Form</div>
            </div>
            <div className="item">
              <div className="item-logo">
                <img src={ellipse1}></img>
              </div>
              <div className="item-text">Make Online Payment</div>
            </div>
            <div className="item">
              <div className="item-logo">
                <img src={ellipse2}></img>
              </div>
              <div className="item-text">
                Executive will Process Application
              </div>
            </div>
            <div className="item">
              <div className="item-logo">
                <img src={ellipse3}></img>
              </div>
              <div className="item-text">Get Confirm Mail</div>
            </div>
          </div>
        </div>
        {/* explore -digital transfomation */}
        <Digital></Digital>
        {/* Testimonials */}
        <Testimonials></Testimonials>
        {/* Faq */}
        <Faq></Faq>
        <div className="blue-component">
          <div className="blue-left">
            <div className="blue-heading">
              <h2>Manage Your Services by your Mobile Phone</h2>
            </div>
            <div className="blue-description">
              <p>
                Download our app to manage and track your services. Our app
                enables you to stay in touch with our experts and aids you in
                tracking your progress.
              </p>
            </div>
            <div className="blue-buttons">
              <p class="blues">Get the App</p>
              <div className="blue-button">
                <button className="icon-button">
                  <div className="button-icon">
                    <i class="fa-brands fa-apple"></i>
                  </div>
                  <div className="button-data">
                    <p>Get it on</p>
                    <h4>App Store</h4>
                  </div>
                </button>
                <button className="icon-button">
                  <div className="button-icon">
                    <i class="fa-brands fa-google-play"></i>
                  </div>
                  <div className="button-data">
                    <p>Get it on</p>
                    <h4>Google Play</h4>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="blue-right">
            <div className="blue-image">
              <img src={group}></img>
            </div>
          </div>
        </div>
        {/* numbers */}
        <Numbers></Numbers>
        {/*  */}
        <Email></Email>
        {/*  */}
        <div className="success-container">
          <div className="success-images">
            <div className="images">
              <img src={oracle}></img>
            </div>
            <div className="images">
              <img src={morpheus}></img>
            </div>
            <div className="images">
              <img src={morpheus}></img>
            </div>
            <div className="images">
              <img src={samsung}></img>
            </div>
            <div className="images">
              <img src={monday}></img>
            </div>
            <div className="images">
              <img src={segment}></img>
            </div>
          </div>
        </div>

        {/* Foter */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
