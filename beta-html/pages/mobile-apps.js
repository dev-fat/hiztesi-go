import React from 'react';
import { FormattedMessage } from 'react-intl';

import AnimatedNumber from "react-animated-numbers"

import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MobileApps() {
  const router = useRouter()
  
  return (
    <div className="page">
      <Head>
        <title>HızTesti App - Mobil Uygulamalar</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="My page description" key="description" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Header />
      <div className="content-page-container">
        <div className="absolute-image">
          <img src="../assets/images/img@mobileapps2x.png" alt="" style={{ maxWidth: '100%' }}/>
        </div>
        <div className="wrapper">
          <div className="content-page content-page--two-column content-page--alternate">
            <div>
              <div className="hero-title">
                <FormattedMessage id="mobileAppsHero" />
              </div>
              <p>Dilediğiniz yerde istediğiniz zaman, Hücresel bağlantı hızınızı yada Wi-Fi internet hızınızı ve kalitesini ölçebilir, hız sonuçlarınızı cihazınız da saklayabilir ve herkes için paylaşabilirsiniz. iOS ve Android cihazlarınıza HIZTESTİ uygulamasını ücretsiz bir şekilde indirmek için <a href="#">tıklayın</a> yada aşağıdaki QR kodunu cihazınızdan okutun.</p>

                <ul>
                  <li><FormattedMessage id="mobileApps01" /></li>
                  <li><FormattedMessage id="mobileApps02" /></li>
                  <li><FormattedMessage id="mobileApps03" /></li>
                  <li><FormattedMessage id="mobileApps04" /></li>
                  <li><FormattedMessage id="mobileApps05" /></li>
                </ul>
              <div className="qr">
                <div className="image" />
              </div>
            </div>
            <div></div>
          </div>
        </div>        
      </div>
      <Footer />
    </div>
  )
}
