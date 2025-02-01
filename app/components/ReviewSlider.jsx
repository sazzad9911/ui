"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import img1 from "../../public/Our Partners 1.png";
import img2 from "../../public/Our Partners 2.png";
import img3 from "../../public/Our Partners 3.png";
import img4 from "../../public/Our Partners 4.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div style={{ ...style, display: "block" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div style={{ ...style, display: "block" }} onClick={onClick} />;
}

const PartnerSlider = () => {
  let sliderRef = useRef(null);
  if (sliderRef.current) {
    sliderRef.current.slickPlay();
  }
  const pause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  var settings = {
    pauseOnFocus: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const partnerImages = [img1, img2, img3, img4];

  return (
    <div className="slider-container">
      <Slider {...settings} className="">
        {partnerImages.map((img, i) => (
          <Card img={img} key={i}></Card>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerSlider;

const Card = ({ img }) => {
  return (
    <div className="mx-2">
      <Image className="h-[100px]" src={img} alt="technology"></Image>
    </div>
  );
};
