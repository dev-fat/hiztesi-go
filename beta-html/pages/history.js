import Head from 'next/head'
import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import AdSense from 'react-adsense';
import MediaQuery from 'react-responsive'

import Header from '../components/Header';
import Footer from '../components/Footer';

import HistoryTable from '../components/HistoryTable';
import HistoryChart from '../components/HistoryChart';
import HistoryMobile from '../components/HistoryMobile';

export default function History() {
  return (
    <div className="page">
      <Head>
        <title>HızTesti App - Geçmiş</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="My page description" key="description" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Header />
      <div className="wrapper">
        <div className="history-page">
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
          <MediaQuery maxDeviceWidth={767}>
            <AdSense.Google
              client='ca-pub-0902371233895064'
              slot='2318650777'
              style={{ display: 'block', height: 120 }}
            />
          </MediaQuery>     
          </div>
          <div className="history-content mobile-hide">
            <div className="hero-area">
              <div>
                <div className="hero">
                  <FormattedMessage id="resultsHistory" />
                </div>
                <p>
                  Geçmiş hız testi sonuçlarınızı ve tercihlerinizi özelleştirmek için dakikalar için de bir <a href="#">hesap oluşturun</a>.
                </p>
              </div>
              <div className="stats">
                <div className="label">
                  <FormattedMessage id="mostResults" />
                </div>
                <p className="download">45.29 Mbps</p>
                <p className="upload">25.04 Mbps</p>
              </div>
            </div>
            <HistoryChart />
            <div className="list-area">
              <HistoryTable />
            </div>
          </div>

          <div class="mobile-visible">
            <HistoryMobile />
          </div>          
        </div>
      </div>
      <Footer />
    </div>
  )
}
