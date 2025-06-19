import Head from 'next/head'
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import AdSense from 'react-adsense';
import MediaQuery from 'react-responsive';

import { PieChart } from 'react-minimal-pie-chart';
import StarRatings from 'react-star-ratings';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PopularLinks from '../components/PopularLinks';
import AdLinks from '../components/AdLinks';
import ResultMobile from '../components/ResultMobile';

import ServerModal from '../components/ServerModal';

export default function Result() {
  let dataDownload = [
    { title: 'Filled', value: 70, color: '#1afffc' },
    { title: 'Empty', value: 30, color: 'rgba(26, 255, 252, 0.3)' },
  ];
  let dataUpload = [
    { title: 'Filled', value: 50, color: '#bf71ff' },
    { title: 'Empty', value: 50, color: 'rgba(191, 113, 255, 0.3)' },
  ];

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

  
    document.querySelectorAll('.js-share-dropdown li').forEach(function (item, idx) {
      item.querySelector('.copy').addEventListener('click', function (e) {
        this.classList.add('active');
        this.closest('li').querySelector('input').select();
        document.execCommand("copy");

        setTimeout(() => {
          this.classList.remove('active');
        }, 300)        
      });
    });    
  }, [])  

  return (
    <div className="page">
      <Head>
        <title>HızTesti App - Sonuç</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="My page description" key="description" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Header alternative  />
      <div className="results mobile-hide">
        {isModalShown && <ServerModal handleClose={() => setModalVisibility(false)}/>}
        <div className="top-ad">
          <MediaQuery minDeviceWidth={767}>
            <AdSense.Google
              client='ca-pub-0902371233895064'
              slot='2318650777'
              style={{ display: 'block' }}
              format='auto'
              responsive='true'
              layoutKey='-gw-1+2a-9x+5c'
            />
          </MediaQuery>
        </div>
        <div className="date-area">19.06.2018 - 12:29</div>
        <div className="speed-test-infos">
          <div>
            <div className="info-item">
              <div className="bar">
                <div className="icon"></div>
              </div>
              <strong>PING</strong>
              <p>
                <strong>4</strong>
                ms
              </p>
            </div>
          </div>
          <div className="download">
            <div className="info-item">
              <div className="bar">
                <PieChart data={dataDownload} lineWidth={15} startAngle={-90} animate animationDuration={500} animationEasing="ease-out" />
                <div className="chart-icon"></div>
              </div>
              <strong><FormattedMessage id="download" /></strong>
              <p>
                <strong>10,52</strong>
                Mbps
              </p>
            </div>
          </div>
          <div className="upload">
            <div className="info-item">
              <div className="bar">
                <PieChart data={dataUpload} lineWidth={15} startAngle={-90} animate animationDuration={500} animationEasing="ease-out" />
                <div className="chart-icon"></div>
              </div>
              <strong><FormattedMessage id="upload" /></strong>
              <p>
                <strong>3,52</strong>
                Mbps
              </p>              
            </div>
          </div>
          <div>
            <div className="info-item info-item--share">
              <div className="bar">
                <div className="icon share"></div>
              </div>
              <strong><FormattedMessage id="share" /></strong>
              <div className="actions">
                <a href="#" className="remove" />
                <ul>
                  <li className="links">
                    <a href="#"></a>
                    <div className="dropdown link-dropdown js-share-dropdown">
                      <ul>
                        <li>
                          <label>
                            Web
                            <input type="text" value="https://www.hiztesti.com" readonly/>
                            <span className="copy"></span>
                          </label>
                        </li>                                
                        <li>
                          <label>
                            <FormattedMessage id="image" />
                            <input type="text" value="https://www.hiztesti.com" readonly/>
                            <span className="copy"></span>
                          </label>
                        </li>                                
                        <li>
                          <label>
                            Embed
                            <input type="text" value='<a href="https://www.hiztesti.com</a>' readonly/>
                            <span className="copy"></span>
                          </label>
                        </li>                                
                        <li>
                          <label>
                            Forum
                            <input type="text" value="[URL=https://www.hiztestesti.com]" readonly/>
                            <span className="copy"></span>
                          </label>
                        </li>                                                                                                                                      
                      </ul>
                    </div>                              
                  </li>
                  <li className="twitter">
                    <a href="#"></a>
                  </li>
                  <li className="facebook">
                    <a href="#"></a>
                  </li>
                  <li className="others">
                    <a href="#"></a>
                    <div className="dropdown share">
                      <ul>
                        <li className="google">
                          <a href="#"></a>
                        </li>
                        <li className="mail">
                          <a href="#"></a>
                        </li>
                        <li className="pinterest">
                          <a href="#"></a>
                        </li>
                        <li className="linkedin">
                          <a href="#"></a>
                        </li>                                  
                      </ul>
                    </div>
                  </li>                                                                                    
                </ul>
              </div>              
            </div>
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
              changeRating={(newRating, name) => setRating(newRating)}
            />          
            <div className="tooltip-text">{ratingText}</div>        
          </div>
          <div className="col">
            <div className="button-container" onClick={() => router.push('/')}>
              <div className="test-begin__button">
                <div className="test-begin__button__bg"></div>
                <span><FormattedMessage id="testAgain" /></span>
              </div>
            </div>
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
        <div className="ad-columns">
          <div>
            <MediaQuery minDeviceWidth={1024}>
              <AdSense.Google
                client='ca-pub-0902371233895064'
                slot='7676571620'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
              />
            </MediaQuery>
          </div>
          <div>
            <div className="info-box">
              <div className="rate-service">
                <p><FormattedMessage id="resultDesc" /></p>
                <div className="rate-form">
                  <select>
                    <option>Hiç Memnun Değilim</option>
                  </select>
                  <button><FormattedMessage id="send" /></button>
                </div>
              </div>
              <div className="app-info">
                <div className="hero">
                  <FormattedMessage id="tryHiztest" />
                </div>
                <div className="subhero">
                  <FormattedMessage id="tryHiztest02" />
                </div>
                <a href="#" className="app-ituness" />
              </div>
            </div>
          </div>
          <div>
            <MediaQuery minDeviceWidth={767}>
              <AdSense.Google
                client='ca-pub-0902371233895064'
                slot='6914154291'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
              />
            </MediaQuery>          
          </div>                    
        </div>
      </div>
      <ResultMobile />
      <AdLinks />
      <PopularLinks />
      <Footer />
    </div>
  )
}
