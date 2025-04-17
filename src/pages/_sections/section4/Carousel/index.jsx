import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    // speed: 600, // miliseconds
    // autoplay: true,
    // autoplaySpeed: 5000,
    // cssEase: "linear",
    // pauseOnHover: true,
    // swipeToSlide: true,
  };

  return (
    <div className={styles.xd}>
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
              <div className={styles.item}>
                <div className={styles.card}>
                  <p className={styles.comment}>“Vrume has been providing us with exceptional traffic for 2 years now, they provide fantastic support and are capable to supply traffic in numerous geos. Highly recommended”</p>
                  <span className={styles.client}>Matt</span>
                  <span className={styles.company}>Tremendio Network</span>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.item}>
                <div className={styles.card}>
                  <p className={styles.comment}>“I've been working with Vrume for quite some time now. It's been a blast so far! Strong collaboration, fast communication and all round good guys Looking forward to see what the future will bring”</p>
                  <span className={styles.client}>Jarno</span>
                  <span className={styles.company}>Rebll Network</span>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.item}>
                <div className={styles.card}>
                  <p className={styles.comment}>“We have been working with Mark and his team for many years. They provide profitable traffic and excellent support. We appreciate very much our cooperation. Highly recommended!”</p>
                  <span className={styles.client}>Alina</span>
                  <span className={styles.company}>Mirelia Networks</span>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.item}>
                <div className={styles.card}>
                  <p className={styles.comment}>“Vrume has been providing MBNexus with exceptional traffic for 2 years now, they provide fantastic support and are capable to supply traffic in numerous geos. Highly recommended”</p>
                  <span className={styles.client}>Tarik</span>
                  <span className={styles.company}>MB Nexus</span>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.item}>
                <div className={styles.card}>
                  <p className={styles.comment}>“Been working with Vrume for years now. They really know how to keep delivering high quality traffic along with all the assistance in maximizing the results. Highly recommend Vrume to anyone who is looking for a long term stable relationship in terms of buying traffic”</p>
                  <span className={styles.client}>Ovation</span>
                  <span className={styles.company}>Ovation</span>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.item}>
                <div className={styles.card}>
                  <p className={styles.comment}>“We have been using Vrume for years! Solid clicks, solid service and solid ROI”</p>
                  <span className={styles.client}>Primary Marketing BV</span>
                  <span className={styles.company}>Primary Marketing</span>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.item}>
                <div className={styles.card}>
                  <p className={styles.comment}>“I have worked with Vrume for 2+ years and it’s been a great experience. He provides high-quality traffic for multiple geos, is easy to work with, and always delivers on time.”</p>
                  <span className={styles.client}>Marinus</span>
                  <span className={styles.company}>Admolly</span>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.item}>
                <div className={styles.card}>
                  <p className={styles.comment}>“I have worked with Mark and his team from Vrume since 2005. They know how to drive quality traffic and work with their buyers to get results.”</p>
                  <span className={styles.client}>Daniel</span>
                  <span className={styles.company}>AdWorldMedia</span>
                </div>
              </div>
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