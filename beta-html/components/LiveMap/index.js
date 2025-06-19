import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router'

import MapSVG from '../../public/assets/images/map.svg';

import Countries from './countries.json';

const codes = ["22","17","39","59","35","09","10","45","77","48","34","16","64","20","41","43","11","15","54","32","03","81","26","67","14","07","74","78","06","18","71","70","68","42","37","40","50","33","51","57","19","66","05","01","80","31","38","55","60","79","46","27","52","58","28","44","02","29","63","23","61","62","24","69","53","12","21","72","47","08","25","49","56","13","73","75","36","04","65","76","30"];
const types = ["wide", "mobile", "wide"];

const LiveMap = () => {
  const router = useRouter()
  if(process.browser && (router.pathname === '/live#' || router.pathname === '/live')) {
    const removePin = () => {
      document.querySelectorAll('.pin')[0].remove();
    };

    const addPin = item => {
      Countries.map((country, idx) => {
        if(item.code == country.code && typeof document.querySelectorAll('svg > g > g')[idx] !== 'undefined') {
          let randomDot = Math.floor(Math.random() * document.querySelectorAll('svg > g > g')[idx].children.length) + 1;
          const mapContainer = document.querySelector('.map-content-area');
          const bodyRect = mapContainer.getBoundingClientRect();
          if(typeof document.querySelectorAll('svg > g > g')[idx].children[randomDot] !== 'undefined') {
            const itemOffset = document.querySelectorAll('svg > g > g')[idx].children[randomDot].getBoundingClientRect();
            const offset = { 
                top: itemOffset.top - bodyRect.top, 
                left: itemOffset.left - bodyRect.left, 
            };            

            mapContainer.insertAdjacentHTML('beforeend', `
              <div class="pin ${item.type == 'mobile' ? 'blue' : 'green'}" style="left: ${offset.left}px; top: ${offset.top}px"></div>
            `);
          }            
        } 
      });
    };

    useEffect(() => {
      addPin({code: codes[Math.floor(Math.random() * 81) + 1], type: types[Math.floor(Math.random() * 2) + 1]});
      setInterval(() => {
        addPin({code: codes[Math.floor(Math.random() * 81) + 1], type: types[Math.floor(Math.random() * 2) + 1]});
        addPin({code: codes[Math.floor(Math.random() * 81) + 1], type: types[Math.floor(Math.random() * 2) + 1]});
      }, 15000);
    }, []);
  }
  return (
    <div className="map-content-area">
      <MapSVG />
    </div>
  );
}

export default LiveMap;
