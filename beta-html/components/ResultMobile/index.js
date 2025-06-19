import dynamic from "next/dynamic"
import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { useRouter } from 'next/router'
import AdSense from 'react-adsense';
import MediaQuery from 'react-responsive';

const UploadChartContainer = dynamic(() => import("./uploadChart"), { ssr: false })
const DownloadChartContainer = dynamic(() => import("./downloadChart"), { ssr: false })

import { FormattedMessage } from 'react-intl';

const ResultMobile = props => {
  const [rating, setRating] = useState(0);
  const router = useRouter();

  return (
    <div className="mobile-results mobile-visible">
      <div className="top-ad">
      <MediaQuery maxDeviceWidth={767}>
        <AdSense.Google
          client='ca-pub-0902371233895064'
          slot='2318650777'
          style={{ display: 'block', height: 120 }}
        />
        </MediaQuery>   
      </div>      
      <div className="date">
        19.06.2018 - 12:29
      </div>
      <div className="stats">
        <div className="item item--chart">
          <div className="label download"><FormattedMessage id="download" /></div>
          <div className="value">
            10,52 <strong>Mbps</strong>
          </div>
          <DownloadChartContainer />
        </div>
        <div className="item item--chart">
          <div className="label upload"><FormattedMessage id="upload" /></div>
          <div className="value">
            10,52 <strong>Mbps</strong>
          </div>
          <UploadChartContainer />
        </div>    
        <div className="item item--multiple">
          <div className="col">
            <div className="hero">
              Ping
            </div>
            <div className="value-col">2<strong>ms</strong></div>
          </div>
          <div className="col">
            <div className="hero">
              <FormattedMessage id="jitter" />
            </div>
            <div className="value-col">0,84<strong>ms</strong></div>
          </div>
          <div className="col">
            <div className="hero">
              <FormattedMessage id="loss" />
            </div>
            <div className="value-col">5<strong>%5</strong></div>
          </div>                        
        </div>      
      </div>
      <div className="huge-ad">
        <MediaQuery maxDeviceWidth={767}>
          <AdSense.Google
            client='ca-pub-0902371233895064'
            slot='6914154291'
            style={{ width: 300, height: 250 }}
            format=""
          />
        </MediaQuery>   
      </div>
      <div className="speed-info">
        <div className="col">
          <div className="icon"></div>
          <div className="hero">Turkcell Superonline</div>
          <div className="label">Kahve Dünyası Hotspot Wi-Fi</div>
          <StarRatings
            rating={rating}
            starDimension="18px"
            starSpacing="0px"
            starEmptyColor="rgba(26, 255, 252, 0.5)"
            starRatedColor="#1afffc"
            starHoverColor="#1afffc"
            changeRating={() => {}}
          />             
        </div>
        <div className="col">
          <div className="icon"></div>
          <div className="hero">Netinternet Bilişim Teknolojileri H..</div>
          <div className="label">İstanbul</div>
        </div>        
        <div className="col">
          <div className="icon"></div>
          <div className="hero"><FormattedMessage id="userLocation" /></div>
          <div className="label"><FormattedMessage id="lat" />: <span>41,019</span>  <FormattedMessage id="lng" />: <span>28,965</span></div>
          <div className="label">
            Dış IP: <span>212.252.115.21</span><br />
            İç IP: <span>192.168.1.44</span>
          </div>
        </div>                        
      </div>  
      <div className="test-begin__button" onClick={() => router.push('/')}>
        <div className="test-begin__button__bg"></div>
        <span><FormattedMessage id="testAgain" /></span>
      </div>            
    </div>
  );
};

export default ResultMobile;
