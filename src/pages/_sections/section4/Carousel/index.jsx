import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimony } from './Testimony';
import styles from './styles.module.css';

export function Carousel() {
  let sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.slickNext();
  };
  
  const handlePrev = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    arrows: false, // remove default buttons
    dots: true,
    infinite: true,
    centerMode: true,
    className: "center",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 600, // miliseconds
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <div className={styles.Carousel}>
      <button className={styles.prev} onClick={handlePrev}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="#fff" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"/></svg>
      </button>

      <div className={styles.wrapper}>
        <div className={styles.sliderContainer} style={{
          "--animation-speed": `${settings.speed}ms`,
        }}>
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div>
              <Testimony
                content="Vrume has been providing us with exceptional traffic for 2 years now, they provide fantastic support and are capable to supply traffic in numerous geos. Highly recommended"
                name="Matt"
                company="Tremendio Network"
              />
            </div>
            <div>
              <Testimony
                content="I've been working with Vrume for quite some time now. It's been a blast so far! Strong collaboration, fast communication and all round good guys Looking forward to see what the future will bring"
                name="Jarno"
                company="Rebll Network"
              />
            </div>
            <div>
              <Testimony
                content="We have been working with Mark and his team for many years. They provide profitable traffic and excellent support. We appreciate very much our cooperation. Highly recommended!"
                name="Alina"
                company="Mirelia Networks"
              />
            </div>
            <div>
              <Testimony
                content="Vrume has been providing MBNexus with exceptional traffic for 2 years now, they provide fantastic support and are capable to supply traffic in numerous geos. Highly recommended"
                name="Tarik"
                company="MB Nexus"
              />
            </div>
            <div>
              <Testimony
                content="Been working with Vrume for years now. They really know how to keep delivering high quality traffic along with all the assistance in maximizing the results. Highly recommend Vrume to anyone who is looking for a long term stable relationship in terms of buying traffic"
                name="Ovation"
                company="Ovation"
              />
            </div>
            <div>
              <Testimony
                content="We have been using Vrume for years! Solid clicks, solid service and solid ROI"
                name="Primary Marketing BV"
                company="Primary Marketing"
              />
            </div>
            <div>
              <Testimony
                content="I have worked with Vrume for 2+ years and it’s been a great experience. He provides high-quality traffic for multiple geos, is easy to work with, and always delivers on time."
                name="Marinus"
                company="Admolly"
              />
            </div>
            <div>
              <Testimony
                content="I have worked with Mark and his team from Vrume since 2005. They know how to drive quality traffic and work with their buyers to get results."
                name="Daniel"
                company="AdWorldMedia"
              />
            </div>
          </Slider>
        </div>
      </div>

      <button className={styles.next} onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="#fff" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"/></svg>
      </button>
    </div>
  );
}