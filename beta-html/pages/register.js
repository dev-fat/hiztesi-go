import React from 'react';
import { FormattedMessage } from 'react-intl';

import Head from 'next/head'

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

export default function Register() {

  return (
    <div className="page">
      <Head>
        <title>HızTesti App - Kayıt Ol</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="My page description" key="description" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Header />
      <div className="wrapper">
        <div className="register-section">
          <div className="form-desc">
            <div className="hero"><FormattedMessage id="signUp" /></div>
            <p><FormattedMessage id="signUp01" /></p>
            <p><FormattedMessage id="signUp02" /></p>
            <div className="register-steps">
              <ul>
                <li>
                  <span>1</span>
                  <FormattedMessage id="signUp03" />
                </li>
                <li>
                  <span>2</span>
                  <FormattedMessage id="signUp04" />
                </li>
                <li>
                  <span>3</span>
                  <FormattedMessage id="signUp05" />
                </li>
              </ul>
            </div>
            <p className="opacity">Zaten bir hesabınız var, ancak şifrenizi mi unuttunuz?<br /> Buradan sıfırlayabilirsiniz.</p>
          </div>        
          <div className="form">
            <Formik
              initialValues={{ email: '', password: '', password_again: '', email_again: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = <FormattedMessage id="emailRequired" />;
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = <FormattedMessage id="invalidEmail" />;
                }
                if (!values.password) {
                  errors.password = <FormattedMessage id="passwordRequired" />;
                }
                if (!values.email_again) {
                  errors.email_again = <FormattedMessage id="emailAgainRequired" />;
                }
                if (!values.password_again) {
                  errors.password_again = <FormattedMessage id="passwordAgainRequired" />;
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
                      <FormattedMessage id="signUpMessageSended" /><br /><br />
                      <FormattedMessage id="signUpCheck" />
                    </div>
                    <div className="field">
                      <label className="field-label"><FormattedMessage id="email" /></label>
                      <Field type="email" name="email" className="field-input" style={getStyles(formProps.errors, 'email')} />
                    </div>
                    <ErrorMessage name="email" component="div" className="error-input" />
                    <div className="field">
                      <label className="field-label"><FormattedMessage id="emailAgain" /></label>
                      <Field type="email_again" name="email_again" className="field-input" style={getStyles(formProps.errors, 'email_again')} />
                    </div>               
                    <ErrorMessage name="email_again" component="div" className="error-input" />    
                    <div className="field">
                      <label className="field-label"><FormattedMessage id="password" /></label>
                      <Field type="password" name="password" className="field-input" style={getStyles(formProps.errors, 'password')} />
                    </div>
                    <ErrorMessage name="password" component="div" className="error-input" />
                    <div className="field">
                      <label className="field-label"><FormattedMessage id="passwordAgain" /></label>
                      <Field type="password_again" name="password_again" className="field-input" style={getStyles(formProps.errors, 'password_again')} />
                    </div>        
                    <ErrorMessage name="password_again" component="div" className="error-input" />    
                    <div className="field field-checkbox">
                      <label>
                        <input type="checkbox" className="field-checkbox checkbox-input" />
                        <FormattedMessage id="newsletterText" />
                      </label>
                    </div>                                        
                    <button type="submit">
                      <FormattedMessage id="signUp" />
                    </button>
                  </Form>
                );                
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
