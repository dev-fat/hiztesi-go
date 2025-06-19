import React from 'react';
import { FormattedMessage } from 'react-intl';
import AnimatedNumber from "react-animated-numbers"
import Slider from "react-slick";
import AdSense from 'react-adsense';

import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveMap from '../components/LiveMap';

export default function Live() {
  const router = useRouter()

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
    <div className="page">
      <Head>
        <title>HızTesti App - Canlı Harita</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="My page description" key="description" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Header />
      <div className="live-map-container">
        <div className="top-ad">
          <AdSense.Google
            client='ca-pub-0902371233895064'
            slot='3957011982'
            style={{ width: 728, height: 90 }}
            format=""
          />
        </div>      
        <div className="map-container">
          <div className="wrapper">
            <div className="live-map">
              <div className="side-ad">
                <AdSense.Google
                  client='ca-pub-0902371233895064'
                  slot='1139276952'
                  style={{ width: 160, height: 600 }}
                  format=""
                />
              </div>
              <div className="map-content">
                <div className="test-count">
                  <div className="number">
                    <AnimatedNumber
                      className="number"
                      animateToNumber={12345678}
                      includeComma
                      config={{ tension: 50, friction: 15 }}
                    />   
                  </div>
                  <div className="label">
                    <FormattedMessage id="liveTestCountText" />
                  </div>
                </div>
                <div className="types">
                  <p className="wide-band"><FormattedMessage id="wideBand" /></p>
                  <p className="mobile"><FormattedMessage id="mobile" /></p>
                </div>
                <LiveMap />
              </div>
            </div>
          </div>
        </div>
        <div className="live-results-carousel">
          <div className="hero">
            <FormattedMessage id="liveResultsMbps" />
          </div>
          <Slider {...settings}>
            <div className="item">
              <span className="label">Superonline</span>
              <span className="upload">35.9</span>
              <span className="download">15.3</span>
            </div>
            <div className="item">
              <span className="label">Kablonet</span>
              <span className="upload">35.9</span>
              <span className="download">15.3</span>
            </div>
            <div className="item">
              <span className="label">Turknet</span>
              <span className="upload">35.9</span>
              <span className="download">15.3</span>
            </div>
            <div className="item">
              <span className="label">Superonline</span>
              <span className="upload">35.9</span>
              <span className="download">15.3</span>
            </div>      
            <div className="item">
              <span className="label">Superonline</span>
              <span className="upload">35.9</span>
              <span className="download">15.3</span>
            </div>
            <div className="item">
              <span className="label">Kablonet</span>
              <span className="upload">35.9</span>
              <span className="download">15.3</span>
            </div>
            <div className="item">
              <span className="label">Turknet</span>
              <span className="upload">35.9</span>
              <span className="download">15.3</span>
            </div>
            <div className="item">
              <span className="label">Superonline</span>
              <span className="upload">35.9</span>
              <span className="download">15.3</span>
            </div>      
            <div className="item">
              <span className="label">Superonline</span>
              <span className="upload">35.9</span>
              <span className="download">15.3</span>
            </div>
            <div className="item">
              <span className="label">Kablonet</span>
              <span className="upload">35.9</span>
              <span className="download">15.3</span>
            </div>
            <div className="item">
              <span className="label">Turknet</span>
              <span className="upload">35.9</span>
              <span className="download">15.3</span>
            </div>
            <div className="item">
              <span className="label">Superonline</span>
              <span className="upload">35.9</span>
              <span className="download">15.3</span>
            </div>                                                            
          </Slider>
        </div>        
      </div>
      <Footer noMargin />
    </div>
  )
}
