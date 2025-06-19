import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import StarRatings from 'react-star-ratings';

import ServerModal from '../ServerModal';

import { useRouter } from 'next/router'

export default function StepOne() {
  const [rating, setRating] = useState(0);
  const [ratingText, setRatingText] = useState('');
  const [isModalShown, setModalVisibility] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.querySelector('.star-ratings').addEventListener('mouseover', function() {
      const stars = document.querySelector('.star-ratings').getAttribute('title');
      document.querySelector('.tooltip-text').style = 'display: block;';
      if(stars == '1 Star') {
        setRatingText(<FormattedMessage id="verybad" />)
      }
      if(stars == '2 Stars') {
        setRatingText(<FormattedMessage id="bad" /> ) 
      }
      if(stars == '3 Stars') {
        setRatingText(<FormattedMessage id="nocomment" />)
      }
      if(stars == '4 Stars') {
        setRatingText(<FormattedMessage id="nice" />)
      }
      if(stars == '5 Stars') {
       setRatingText(<FormattedMessage id="verynice" />) 
      }       
    });

    document.querySelector('.star-ratings').addEventListener('mouseleave', function() {
      document.querySelector('.tooltip-text').style = 'display: none;';
    });
  }, [])

  const handleRateChange = rating => {
    setRating(rating);               
  };
  
  return (
    <div>
      {isModalShown && <ServerModal handleClose={() => setModalVisibility(false)}/>}
      <div className="test-begin">
        <div className="button-container js-start-button">
          <div className="test-begin__button">
            <div className="test-begin__button__bg"></div>
            <span><FormattedMessage id="start" /></span>
          </div>
          <svg width="180" height="180" className="bar-container">
            <defs>
              <pattern id="p1" width="180" height="180">
                <image xlinkHref="./assets/images/radial-bg.svg" width="180" height="180" />
              </pattern>
            </defs>        
              <circle cx="90" cy="90" r="85" className="front" fill="none" stroke="url(#p1)"></circle>
              <circle cx="90" cy="90" r="85" className="front" fill="none" stroke="url(#p1)"></circle>
            </svg>
        </div>
      </div>
      <div className="speed-info">
        <div className="col">
          <div className="icon"></div>
          <div className="hero">Turkcell Superonline</div>
          <div className="label">212.252.115.21</div>
          <StarRatings
            rating={rating}
            starDimension="18px"
            starSpacing="0px"
            starEmptyColor="rgba(26, 255, 252, 0.5)"
            starRatedColor="#1afffc"
            starHoverColor="#1afffc"
            changeRating={(newRating, name) => handleRateChange(newRating)}
          />             
          <div className="tooltip-text">{ratingText}</div>
        </div>
        <div className="col">
          <div className="icon"></div>
          <div className="hero">Radore DC</div>
          <div className="label">İstanbul</div>
          <a href="#" onClick={() => setModalVisibility(true)}>
            <FormattedMessage id="changeServer" />
          </a>
        </div>                
      </div>
      <a href="#" className="live-map-toggle" onClick={() => router.push('/live')}>
        <div className="icon"></div>
        <FormattedMessage id="liveMapText" />
      </a>  
    </div> 
  );
}
