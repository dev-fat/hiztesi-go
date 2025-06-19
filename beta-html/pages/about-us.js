import React from 'react';
import { FormattedMessage } from 'react-intl';

import AnimatedNumber from "react-animated-numbers"

import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from '../components/Image';

export default function AboutUs() {
  const router = useRouter()
  
  return (
    <div className="page">
      <Head>
        <title>HızTesti App - Hakkımızda</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="My page description" key="description" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Header />
        <div className="wrapper">
          <div className="content-page content-page--two-column">
            <div>
              <div className="hero-title">
                <span onClick={() => router.push('/')}>
                  HIZTESTİ
                </span>
              </div>
              <p><FormattedMessage id="aboutUs01" /></p>
              <p><FormattedMessage id="aboutUs02" /></p>
              <div className="qr">
                <div className="image">

                </div>
                <p>HIZTESTİ Uygulamalarını <a href="#">Google Play Store’da</a> ve<br /> <a href="#">App Store</a>’dan ücretsiz olarak indirebilirsiniz.</p>
              </div>
            </div>
            <div>
              <img src="../assets/images/img@about2x.png" alt="" style={{ maxWidth: '100%' }}/>
              <div className="content-page-stats">
                <div className="row">
                                 
                  <div className="number">
                    <AnimatedNumber
                      className="number"
                      animateToNumber={1123245454}
                      includeComma
                      config={{ tension: 50, friction: 15 }}
                    />   
                  </div>
                  <div className="label">
                    <FormattedMessage id="countText01" />
                  </div>
                </div>
                <div className="row">
                  <div className="number">
                    <AnimatedNumber
                      className="number"
                      animateToNumber={104}
                      includeComma
                      config={{ tension: 50, friction: 15 }}
                    />  
                  </div>
                  <div className="label">
                    <FormattedMessage id="countText02" />
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}
