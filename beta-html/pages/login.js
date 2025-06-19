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

export default function Login() {
  const router = useRouter()

  return (
    <div className="page">
      <Head>
        <title>HızTesti App - Giriş</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="My page description" key="description" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Header />
      <div className="wrapper">
        <div className="login-section">
          <div className="form">
            <div className="hero"><FormattedMessage id="signIn" /></div>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'E-Posta adresi zorunludur.';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = <FormattedMessage id="invalidEmail" />;
                }
                if (!values.password) {
                  errors.password = <FormattedMessage id="passwordRequired" />;
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
                    <div className="action-message action-message--error">
                      <FormattedMessage id="invalidInfo" />
                    </div>
                    <div className="field">
                      <label className="field-label"><FormattedMessage id="email" /></label>
                      <Field type="email" name="email" className="field-input" style={getStyles(formProps.errors, 'email')} />
                    </div>
                    <ErrorMessage name="email" component="div" className="error-input" />
                    <div className="field">
                      <label className="field-label"><FormattedMessage id="password" /></label>
                      <Field type="password" name="password" className="field-input" style={getStyles(formProps.errors, 'password')} />
                    </div>
                    <ErrorMessage name="password" component="div" className="error-input" />
                    <div className="multi-field">
                      <div>
                        <label>
                          <Field type="checkbox" name="remember" className="field-checkbox checkbox-input" />
                          <FormattedMessage id="rememberMe" />
                        </label>
                      </div>
                      <div>
                        <a href="#" className="forgot-password" onClick={() => router.push('/forgot-password')}><FormattedMessage id="areYouMissingPassword" /></a>
                      </div>
                    </div>
                    <button type="submit">
                      <FormattedMessage id="signIn" />
                    </button>
                  </Form>
                );                
              }}
            />
          </div>
          <div className="form-desc">
            <div className="hero"><FormattedMessage id="signIn01" /></div>
            <p><FormattedMessage id="signIn02" /></p>
            <p><FormattedMessage id="signIn03" /></p>
            <span className="button" onClick={() => router.push('/register')}>
              <FormattedMessage id="signIn04" />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
