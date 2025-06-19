import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { NextIntlScript } from '@moxy/next-intl';

export default class MyDocument extends Document {
  render() {
    return (
        <Html>
            <Head />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0" />            
            <body>
                <Main />
                <NextIntlScript defaultLocale="tr-TR" />
                <NextScript />
            </body>
        </Html>
    );
  }
}
