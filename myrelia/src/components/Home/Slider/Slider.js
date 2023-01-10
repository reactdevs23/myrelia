import React from "react";
import Slider from "react-slick";
import image from "../../../images/image.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import styles from "./Slider.module.css";

const MySlider = () => {
  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      image: image,
      title: "Stacker-Pack 15 members",
      discount: "/images/ribbon.png",
      text: "JOIN US ON <b class='bold'>PLAY.MYRELIA</b> AND ON DISCORD. <b class='bold'>PLAY.MYRELIA.FR</b> AND COME AND COLLECT YOUR STARTER-PACK AND...",
      to: "#",
    },
    {
      image: image,
      title: "Stacker-Pack 15 members",
      text: "JOIN US ON <b class='bold'>PLAY.MYRELIA</b> AND ON DISCORD. <b class='bold'>PLAY.MYRELIA.FR</b> AND COME AND COLLECT YOUR STARTER-PACK AND...",
      to: "#",
    },
    {
      image: image,
      title: "Stacker-Pack 15 members",
      text: "JOIN US ON <b class='bold'>PLAY.MYRELIA</b> AND ON DISCORD. <b class='bold'>PLAY.MYRELIA.FR</b> AND COME AND COLLECT YOUR STARTER-PACK AND...",
      to: "#",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Offer of The Day!</h2>
      <Slider {...settings}>
        {data.map((el, i) => (
          <div key={i}>
            <div className={styles.sliderWrapper}>
              {el.discount && (
                <img src={el.discount} alt="#" className={styles.discount} />
              )}

              <img src={el.image} alt="#" className={styles.image} />
              <div className={styles.textContainer}>
                <h5 className={styles.title}>{el.title} </h5>
                <p
                  className={styles.text}
                  dangerouslySetInnerHTML={{ __html: el.text }}
                ></p>
              </div>
              <button className={styles.button}>Buy Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
