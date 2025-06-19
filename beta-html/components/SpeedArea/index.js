import React, { useState } from 'react';
import MediaQuery from 'react-responsive'

import SpeedTest from '../SpeedTest';
import AdSense from 'react-adsense';

export default function SpeedArea() {
  return (
    <div className="wrapper">
      <div className="top-ad" style={{ paddingBottom: 20}}>
        {/*<img src="http://placehold.it/768x90" alt="" class="mobile-hide" />
        <img src="http://placehold.it/320x100" alt="" class="mobile-visible" />*/}
        <div className="ad">
          <MediaQuery minDeviceWidth={767}>
            <AdSense.Google
              client='ca-pub-0902371233895064'
              slot='8881201459'
              style={{ display: 'block', height: 90 }}
              format='auto'
              responsive='true'
              layoutKey='-gw-1+2a-9x+5c'
            />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={767}>
            <AdSense.Google
              client='ca-pub-0902371233895064'
              slot='8881201459'
              style={{ display: 'block', height: 120 }}
            />
          </MediaQuery>          
        </div>   
      </div>    
      <div className="speed-area">
        <div className="left">
          <div className="content">
            <div className="left-ad">
            <MediaQuery minDeviceWidth={769}>
            {/*<img src="http://placehold.it/160x600" alt="" />*/}
              <div className="ad">
                <AdSense.Google
                  client='ca-pub-0902371233895064'
                  slot='9208504516'
                  style={{ display: 'block' }}
                  format='auto'
                  responsive='true'
                  layoutKey='-gw-1+2a-9x+5c'
                />
              </div>
              </MediaQuery>
            </div>
            <div className="speed-content">
              <SpeedTest />
            </div>            
          </div>
        </div>

        <MediaQuery minDeviceWidth={1240}>
          <div className="right">
          {/*<img src="http://placehold.it/300x250" alt="" />*/}
            <div className="ad">
              <AdSense.Google
                client='ca-pub-0902371233895064'
                slot='9243151771'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
              />
            </div>
          </div>
        </MediaQuery>

      </div>
    </div>
  )
}
