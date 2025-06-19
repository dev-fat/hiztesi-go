import React from 'react';

import Head from 'next/head'

import Header from '../components/Header';
import Footer from '../components/Footer';
import SpeedArea from '../components/SpeedArea';
import PopularLinks from '../components/PopularLinks';

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>HızTesti App</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="My page description" key="description" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
      </Head>
      <Header profile />
      <SpeedArea />
      <PopularLinks />
      <Footer />
    </div>
  )
}
