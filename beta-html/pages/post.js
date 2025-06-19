import React from 'react';
import { FormattedMessage } from 'react-intl';
import AdSense from 'react-adsense';
import MediaQuery from 'react-responsive';

import AnimatedNumber from "react-animated-numbers"

import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function post() {
  const router = useRouter()
  
  return (
    <div className="page">
      <Head>
        <title>HızTesti App - Turkcell Superonline</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="My page description" key="description" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Header />
      <div className="post-page">
        <div className="top-ad">
        <MediaQuery maxDeviceWidth={767}>
          <AdSense.Google
            client='ca-pub-0902371233895064'
            slot='9631991985'
            style={{ display: 'block', height: 120 }}
          />
        </MediaQuery>                 
        </div>
        <div className="try-again">
          <div className="button-container" onClick={() => router.push('/')}>
            <div className="test-begin__button">
              <div className="test-begin__button__bg"></div>
              <span><FormattedMessage id="testYourSpeed" /></span>
            </div>
          </div>        
        </div>
        <div className="post-container">
          <div className="wrapper">
            <div className="post-area">
              <div className="ad-area">
                <AdSense.Google
                  client='ca-pub-0902371233895064'
                  slot='7676571620'
                  style={{ width: 160, height: 600 }}
                  format=""
                />
              </div>
              <div className="post">
                <div className="image-text">
                  <div className="image-area">
                    <div className="img">
                      <img src="http://placehold.it/250x250" alt="" />
                    </div>
                    <div className="buttons">
                      <ul>
                        <li>
                          <a href="#" class="phone"></a>
                        </li>
                        <li>
                          <a href="#" class="internet"></a>
                        </li>
                        <li>
                          <a href="#" class="facebook"></a>
                        </li>
                        <li>
                          <a href="#" class="twitter"></a>
                        </li>
                        <li>
                          <a href="#" class="google"></a>
                        </li>                                                                                                
                      </ul>
                    </div>
                  </div>
                  <div className="text">
                    <div className="hero">Turkcell Superonline</div>
                    <ul className="properties">
                      <li>
                        <strong>Ortalama Fiyat:</strong>
                        50 Türk Lirası
                      </li>
                      <li>
                        <strong>Taahhüt Edilen Hız:</strong>
                        4 ~ 1000 Mbps
                      </li>                 
                      <li>
                        <strong>Kontrat Süresi:</strong>
                        12 ~ 24 Ay
                      </li>                  
                      <li>
                        <strong>Modem Hediyesi:</strong>
                        Var
                      </li>                  
                      <li>
                        <strong>Altyapı:</strong>
                        DSL, xDSL, vDSL, Fiber Optik, LTE, G.SHDSL, Radyolink
                      </li>                                                                                        
                    </ul>
                    <div className="detail-buttons">
                      <a href="#">
                        Tarifeleri İncele
                      </a>
                      <a href="#">
                        Altyapı Sorgula
                      </a>                      
                    </div>
                  </div>
                </div>
                <div className="ad mobile-visible">
                  <AdSense.Google
                    client='ca-pub-0902371233895064'
                    slot='7676571620'
                    style={{ width: 300, height: 250 }}
                    format=""
                  />
                </div>                
                <div className="text-area">
                <p>Kendi altyapısını kurmak üzere fiber optik yatırımlarına hız kesmeden devam eden Turkcell Superonline, Türkiye'de evlere kadar 1000 Mbps'ye varan hızlarda internet erişimi sağlayan ilk telekom operatörüdür. Turkcell Superonline, bireysel, kurumsal ve toptan segmentteki müşterilerine; ses, veri, genişbant internet erişimi, toplu ses taşıma, kiralık veri hattı hizmetleri ve katma değerli servisler sunmaktadır.</p>

                <p>Türkiye’de internet erişiminin öncüsü Turkcell Superonline’ın yatırımları sonucunda Türkiye, dünya fiber internet ligine girdi. ​Avrupa’nın en önemli pazar araştırma ve danışmanlık firmalarından IDATE’in Avrupa Eve Kadar Fiber İnternet Konseyi (FTTH Council Europe) için hazırladığı son raporda Türkiye; Turkcell Superonline’ın 2011 yılının son 6 ayında fiber internette 70 binin üzerinde yeni abone sayısıyla, Avrupa’nın ilk 5’i sıralamasında İspanya ve Hollanda’yı geride bırakarak üçüncü sırada yer aldı.</p>

                <p>Superonline İletişim Hizmetleri A.Ş., yurt çapında muhtelif noktalarda, yüksek hızda internet erişimi sağlamak amacıyla 5809 sayılı Elektronik Haberleşme Kanunu ve ilgili Yönetmelikleri kapsamında yetkilendirilerek bireysel ve kurumsal abonelerine ses, data ve görüntü alanında iletişim çözümleri sunan; Bilgi Teknolojileri ve İletişim Kurumu’nun denetim ve gözetiminde faaliyet gösteren bir elektronik haberleşme işletmecisidir.</p>

                <p>Uluslararası FTTH (Fiber-To-The-Home/Eve Kadar Fiber) Konseyi, fiber internet konusunda kar amacı gütmeden faaliyet gösteren dünyanın en saygın kurumlarından biri olarak kabul ediliyor. 2001 yılında kurulan ve başlangıçta yalnızca telekomünikasyon ve teknolojileri firmalarının üye olduğu Uluslararası FTTH Konseyi, bugün bünyesinde belediyelerden servis sağlayıcılara kadar çeşitli kurumları barındıran ve kar amacı gütmeyen bir kuruluş konumunda. Uluslararası FTTH Konseyi, eve kadar fiber kavramı ve insanların yaşam kalitesine sağladığı katkılar konusunda farkındalık yaratma misyonuyla hareket ediyor.</p>
                </div>
              </div>
              <div className="ad mobile-visible">
                <AdSense.Google
                  client='ca-pub-0902371233895064'
                  slot='7676571620'
                  style={{ width: 300, height: 250 }}
                  format=""
                />
              </div>
              <div className="sidebar">
                <div className="ad">
                  <AdSense.Google
                    client='ca-pub-0902371233895064'
                    slot='7676571620'
                    style={{ width: 300, height: 250 }}
                    format=""
                  />
                </div>
                <div className="ad">
                  <AdSense.Google
                    client='ca-pub-0902371233895064'
                    slot='7676571620'
                    style={{ width: 300, height: 250 }}
                    format=""
                  />
                  <AdSense.Google
                    client='ca-pub-0902371233895064'
                    slot='7676571620'
                    style={{ width: 300, height: 250 }}
                    format=""
                  />                  
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer noMargin />
    </div>
  )
}
