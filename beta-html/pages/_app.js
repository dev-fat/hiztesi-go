import React from 'react';
import { withNextIntlSetup } from '@moxy/next-intl';
import nextIntlConfig from '../intl';

import './reset.css';

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import './style.css';

import '../public/assets/confetti.js';

function Container({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withNextIntlSetup(nextIntlConfig)(Container);
