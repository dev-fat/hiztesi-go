import Head from 'next/head'
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import AdSense from 'react-adsense';
import MediaQuery from 'react-responsive';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Settings() {
  const [startDate, setStartDate] = useState(new Date());
  const router = useRouter()

  return (
    <div className="page">
      <Head>
        <title>HızTesti App - Ayarlar</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="My page description" key="description" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
      </Head>
      <Header />
        <div className="wrapper">
        <div className="settings-page mobile-hide">
          <div className="ad-area">
            {/* < MediaQuery minDeviceWidth={767}>
              <AdSense.Google
                client='ca-pub-0902371233895064'
                slot='9095812117'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
              />
            </MediaQuery> */}
          </div>
          <div className="settings-hero"><FormattedMessage id="settings" /></div>
            <div className="columns">
              <div className="column">
              <div className="action-message action-message--success">
                <FormattedMessage id="settingsUpdate" />
              </div>              
                <div className="hero"><FormattedMessage id="generalSettings" /></div>
                <div className="site-settings">
                  <ul>
                    <li>
                      <span><FormattedMessage id="time" /></span>
                      <div>
                        <label>
                          <input type="radio" name="time" />
                          <span><FormattedMessage id="12Hours" /></span>
                        </label>
                        <label>
                          <input type="radio" name="time" />
                          <span><FormattedMessage id="24Hours" /></span>
                        </label>                      
                      </div>
                    </li>
                    <li>
                      <span><FormattedMessage id="date" /></span>
                      <div>
                        <select>
                          <option>DD.MM.YYYY</option>
                          <option>DD/MM/YYYY</option>
                          <option>MM/DD/YYYY</option>
                          <option>YYYY-MM-DD</option>
                        </select>
                      </div>
                    </li>  
                    <li>
                      <span><FormattedMessage id="howFarLabel" /></span>
                      <div>
                        <label>
                          <input type="radio" name="type" />
                          <span>Kilometre</span>
                        </label>          
                        <label>
                          <input type="radio" name="type" />
                          <span>Mil</span>
                        </label>                                
                      </div>
                    </li>  
                    <li>
                      <span><FormattedMessage id="speedLabel" /></span>
                      <div>
                        <label>
                          <input type="radio" name="speed" />
                          <span>Mbps</span>
                        </label>          
                        <label>
                          <input type="radio" name="speed" />
                          <span>MB/s</span>
                        </label>
                        <label>
                          <input type="radio" name="speed" />
                          <span>kB/s</span>
                        </label>                                                      
                      </div>
                    </li>  
                    <li>
                      <span><FormattedMessage id="speedLabel02" /></span>
                      <div>
                        <label>
                          <input type="radio" name="speed-type" />
                          <span>100M</span>
                        </label>          
                        <label>
                          <input type="radio" name="speed-type" />
                          <span>200M</span>
                        </label>
                        <label>
                          <input type="radio" name="speed-type" />
                          <span>500M</span>
                        </label>                                                      
                      </div>
                    </li> 
                    <li>
                      <span><FormattedMessage id="manuelServer" /></span>
                      <div>
                        <div className="server">
                          <small>Radore - </small> İstanbul
                        </div>                                                    
                      </div>
                    </li>                                                                                          
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="hero"><FormattedMessage id="currentConnection" /></div>
                <div className="subhead">Turkcell Superonline</div>
                <p>IPv4: 212.252.115.21</p>
                <p>İstanbul</p>
                <p><FormattedMessage id="lat" />: 41.0145 <FormattedMessage id="lng" />: 28.5256</p>
              </div>  
              <div className="column content">
                <div className="hero"><FormattedMessage id="signUp" /></div>
                <p><FormattedMessage id="settingsDesc01" /></p>
                <p><FormattedMessage id="settingsDesc02" /></p>
                <p><FormattedMessage id="settingsDesc03" /></p>
                <a href="#" onClick={() => router.push('/register')}><FormattedMessage id="signUp" /></a>
              </div>                            
            </div>
          </div>
        </div>
        <div className="mobile-visible settings-mobile">
          <img src="./assets/images/img@blured.png" alt="" />
          <div className="warning">
            <div className="desc">
              <FormattedMessage id="settingsMobile" />
            </div>
            <div className="apps">
              <a href="#" className="app-ituness">

              </a>
              <a href="#" className="app-google">
              </a>              
            </div>            
          </div>
        </div>
      <Footer />
    </div>
  )
}
