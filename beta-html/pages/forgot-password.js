import React from 'react';
import { FormattedMessage } from 'react-intl';

import Head from 'next/head'
import { useRouter } from 'next/router'

import { Formik, Form, Field, ErrorMessage, getIn } from 'formik';

import Header from '../components/Header';
import Footer from '../components/Footer';

function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      borderColor: '#ff3366'
    }
  }
}

export default function ForgotPassword() {
  const router = useRouter()

  return (
    <div className="page">
      <Head>
        <title>HızTesti App - Şifremi Unuttum</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="My page description" key="description" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Header />
      <div className="wrapper">
        <div className="login-section">
          <div className="form">
            <div className="hero"><FormattedMessage id="forgotPassword" /></div>
            <Formik
              initialValues={{ email: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'E-Posta adresi zorunludur.';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Geçersiz e-posta adresi.';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
              render={formProps => {
                return (
                  <Form>
                    <div className="action-message action-message--success">
                      <p><FormattedMessage id="forgotPasswordSuccess" /></p>

                      <p><FormattedMessage id="forgotPasswordCheck" /></p>
                    </div>
                    <div className="field">
                      <label className="field-label"><FormattedMessage id="email" /></label>
                      <Field type="email" name="email" className="field-input" style={getStyles(formProps.errors, 'email')} />
                    </div>
                    <ErrorMessage name="email" component="div" className="error-input" />
                    <button type="submit">
                      <FormattedMessage id="submit" />
                    </button>
                  </Form>
                );                
              }}
            />
          </div>
          <div className="form-desc">
            <p><FormattedMessage id="forgotPasswordDesc" /></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
