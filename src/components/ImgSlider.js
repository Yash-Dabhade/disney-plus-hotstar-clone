import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  let settings = {
    dots: true,
    infinte: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/RayaSlider.jfif" alt="img1" />
      </Wrap>
      <Wrap>
        <img src="/images/LokiSlider.webp" alt="img2" />
      </Wrap>
      <Wrap>
        <img src="/images/WandaSlider.jfif" alt="img3" />
      </Wrap>
      <Wrap>
        <img src="/images/BlackWidowSlider.jpg" alt="img4" />
      </Wrap>
      <Wrap>
        <img src="/images/falconSlider.png" alt="img4" />
      </Wrap>
      <Wrap>
        <img src="/images/LucaSlider.jfif" alt="img4" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 30rem;
    border-radius: 4px;
    border: 4px solid transparent;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
