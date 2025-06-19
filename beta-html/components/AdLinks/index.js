import React from 'react';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

export default function AddLinks() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]    
  };  
    
  return (
    <div className="wrapper">
      <div className="popular-links popular-links--margin">
        <div className="hero">
          <FormattedMessage id="popularLinksHero" />
        </div>
        <div className="adlinks-carousel">
        <Slider {...settings}>
          <div className="item">
            <a href="#" rel="noopener">
              <img src="./assets/images/netflix.svg" alt="" />
              Skype
            </a>
          </div>      
          <div className="item">
            <a href="#" rel="noopener">
              <img src="./assets/images/netflix.svg" alt="" />
              <span>SPONSOR</span>
              Netflix
            </a>
          </div>    
          <div className="item">
            <a href="#" rel="noopener">
              <img src="./assets/images/netflix.svg" alt="" />
              Turkcell TV+
            </a>
          </div>    
          <div className="item disabled">
            <a href="#" rel="noopener">
              <img src="./assets/images/netflix.svg" alt="" />
              Facetime
            </a>
          </div> 
          <div className="item">
            <a href="#" rel="noopener">
              <img src="./assets/images/netflix.svg" alt="" />
              puhutv
            </a>
          </div> 
          <div className="item disabled">
            <a href="#" rel="noopener">
              <img src="./assets/images/netflix.svg" alt="" />
              Tivibu
            </a>
          </div>
        </Slider>
        </div>
      </div>
    </div>
  );
}
