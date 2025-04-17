import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './styles.module.css';

export function Carousel() {
  const settings = {
    arrows: false, // remove default buttons
    dots: true,
    infinite: true,
    centerMode: true,
    className: "center",
    // centerPadding: "120px",
    slidesToShow: 3,
    // slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // pauseOnHover: true,
    // swipeToSlide: true,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          <div>
            <h2 className={styles.item}>1</h2>
          </div>
          <div>
            <h2 className={styles.item}>2</h2>
          </div>
          <div>
            <h2 className={styles.item}>3</h2>
          </div>
          <div>
            <h2 className={styles.item}>4</h2>
          </div>
          <div>
            <h2 className={styles.item}>5</h2>
          </div>
          <div>
            <h2 className={styles.item}>6</h2>
          </div>
        </Slider>
      </div>
    </div>
  );
}