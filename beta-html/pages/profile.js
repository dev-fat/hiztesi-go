import Head from 'next/head'
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';

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

const servers = [
  {
    location: 'İstanbul',
    server: 'Radore'
  },
  {
    location: 'İstanbul',
    server: 'Doruknet'
  },  
  {
    location: 'İstanbul',
    server: 'Vodafone'
  },    
  {
    location: 'İstanbul',
    server: 'Turkcell Superonline'
  },      
  {
    location: 'İstanbul',
    server: 'Turknet'
  },        
  {
    location: 'Bursa',
    server: 'DGN Teknoloji'
  },
  {
    location: 'İstanbul',
    server: 'Radore'
  },
  {
    location: 'İstanbul',
    server: 'Doruknet'
  },  
  {
    location: 'İstanbul',
    server: 'Vodafone'
  },    
  {
    location: 'İstanbul',
    server: 'Turkcell Superonline'
  },      
  {
    location: 'İstanbul',
    server: 'Turknet'
  },        
  {
    location: 'Bursa',
    server: 'DGN Teknoloji'
  }
];


export default function Settings() {
  const [startDate, setStartDate] = useState(new Date());
  const [keyword, setKeyword] = useState('');
  const router = useRouter()

  return (
    <div className="page">
      <Head>
        <title>HızTesti App - Ayarlar</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="My page description" key="description" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Header />
        <div className="wrapper">
        <div className="settings-page">
        <div className="speed-info">
          <div className="col">
            <div className="button-container" onClick={() => router.push('/')}>
              <div className="test-begin__button">
                <div className="test-begin__button__bg"></div>
                <span><FormattedMessage id="start" /></span>
              </div>
            </div>
          </div>              
        </div>        
        <div className="settings-hero"><FormattedMessage id="settings" /></div>
          <div className="columns">
            <div className="column">
              <div className="action-message action-message--success">
                <FormattedMessage id="usernameChanged" />
              </div>                            
              <div className="hero"><FormattedMessage id="changeUsername" /></div>
              <div className="form">
                <Formik
                  initialValues={{ username: '' }}
                  validate={values => {
                    const errors = {};
                    if (!values.username) {
                      errors.username = <FormattedMessage id="usernameRequired" />;
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
                        <div className="field">
                          <label className="field-label"><FormattedMessage id="newUsername" /></label>
                          <Field type="text" name="username" className="field-input" style={getStyles(formProps.errors, 'username')} />
                        </div>
                        <ErrorMessage name="username" component="div" className="error-input" />
                        <button type="submit">
                          <FormattedMessage id="change" />
                        </button>
                      </Form>
                    );                
                  }}
                />
              </div>                
            </div>
            <div className="column">
              <div className="hero"><FormattedMessage id="changePassword" /></div>
              <div className="form">
                <Formik
                  initialValues={{ old_password: '', new_password: '', new_password_again: '' }}
                  validate={values => {
                    const errors = {};
                    if (!values.old_password) {
                      errors.old_password = <FormattedMessage id="oldPasswordRequired" />;
                    }
                    if (!values.new_password) {
                      errors.new_password = <FormattedMessage id="newPasswordRequired" />;
                    }
                    if (values.new_password.length < 6) {
                      errors.new_password = <FormattedMessage id="minimumSixCharacter" />;
                    }                      
                    if (!values.new_password_again) {
                      errors.new_password_again = <FormattedMessage id="newPasswordAgainRequired" />;
                    }                                            
                    if (values.new_password_again.length < 6) {
                      errors.new_password_again = <FormattedMessage id="minimumSixCharacter" />;
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
                        <div className="field">
                          <label className="field-label"><FormattedMessage id="oldPassword" /></label>
                          <Field type="password" name="old_password" className="field-input" style={getStyles(formProps.errors, 'old_password')} />
                        </div>
                        <ErrorMessage name="old_password" component="div" className="error-input" />
                        <div className="field">
                          <label className="field-label"><FormattedMessage id="newPassword" /></label>
                          <Field type="password" name="new_password" className="field-input" style={getStyles(formProps.errors, 'new_password')} />
                        </div>
                        <ErrorMessage name="new_password" component="div" className="error-input" />
                        <div className="field">
                          <label className="field-label"><FormattedMessage id="newPasswordAgain" /></label>
                          <Field type="text" name="new_password_again" className="field-input" style={getStyles(formProps.errors, 'new_password_again')} />
                        </div>
                        <ErrorMessage name="new_password_again" component="div" className="error-input" />                                                    
                        <button type="submit">
                          <FormattedMessage id="changePassword" />
                        </button>
                      </Form>
                    );                
                  }}
                />
              </div>                  
            </div>
            <div className="column">
              <div className="hero"><FormattedMessage id="changeEmail" /></div>
              <div className="form">
                <Formik
                  initialValues={{ password: '', email_again: '', email: '' }}
                  validate={values => {
                    const errors = {};
                    if (!values.password) {
                      errors.password = <FormattedMessage id="passwordRequired" />;
                    }
                    if (!values.email) {
                      errors.email = <FormattedMessage id="emailRequired" />;
                    }
                    if (!values.email_again) {
                      errors.email_again = <FormattedMessage id="emailAgainRequired" />;
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
                        <div className="field">
                          <label className="field-label"><FormattedMessage id="newEmail" /></label>
                          <Field type="email" name="email" className="field-input" style={getStyles(formProps.errors, 'email')} />
                        </div>
                        <ErrorMessage name="email" component="div" className="error-input" />
                        <div className="field">
                          <label className="field-label"><FormattedMessage id="newEmailAgain" /></label>
                          <Field type="email" name="email_again" className="field-input" style={getStyles(formProps.errors, 'email_again')} />
                        </div>
                        <ErrorMessage name="email_again" component="div" className="error-input" />
                        <div className="field">
                          <label className="field-label"><FormattedMessage id="password" /></label>
                          <Field type="password" name="password" className="field-input" style={getStyles(formProps.errors, 'password')} />
                        </div>
                        <ErrorMessage name="password" component="div" className="error-input" />                                                    
                        <button type="submit">
                          <FormattedMessage id="changeEmail" />
                        </button>
                      </Form>
                    );                
                  }}
                />
              </div>                   
            </div>                            
            <div className="column">
              <div className="hero"><FormattedMessage id="generalSettings" /></div>
              <div className="site-settings">
                <ul>
                  <li>
                    <span><FormattedMessage id="time" /></span>
                    <div>
                      <label>
                        <input type="radio" name="time" />
                        <span><FormattedMessage id="12Hours" /></span>
                      </label>
                      <label>
                        <input type="radio" name="time" />
                        <span><FormattedMessage id="24Hours" /></span>
                      </label>                      
                    </div>
                  </li>
                  <li>
                    <span><FormattedMessage id="date" /></span>
                    <div>
                      <select>
                        <option>DD.MM.YYYY</option>
                        <option>DD/MM/YYYY</option>
                        <option>MM/DD/YYYY</option>
                        <option>YYYY-MM-DD</option>
                      </select>
                    </div>
                  </li>  
                  <li>
                    <span><FormattedMessage id="howFarLabel" /></span>
                    <div>
                      <label>
                        <input type="radio" name="type" />
                        <span>Kilometre</span>
                      </label>          
                      <label>
                        <input type="radio" name="type" />
                        <span>Mil</span>
                      </label>                                
                    </div>
                  </li>  
                  <li>
                    <span><FormattedMessage id="speedLabel" /></span>
                    <div>
                      <label>
                        <input type="radio" name="speed" />
                        <span>Mbps</span>
                      </label>          
                      <label>
                        <input type="radio" name="speed" />
                        <span>MB/s</span>
                      </label>
                      <label>
                        <input type="radio" name="speed" />
                        <span>kB/s</span>
                      </label>                                                      
                    </div>
                  </li>  
                  <li>
                    <span><FormattedMessage id="speedLabel02" /></span>
                    <div>
                      <label>
                        <input type="radio" name="speed-type" />
                        <span>100M</span>
                      </label>          
                      <label>
                        <input type="radio" name="speed-type" />
                        <span>200M</span>
                      </label>
                      <label>
                        <input type="radio" name="speed-type" />
                        <span>500M</span>
                      </label>                                                      
                    </div>
                  </li> 
                  <li>
                    <span><FormattedMessage id="manuelServer" /></span>
                    <div>
                      <div className="server">
                        <small>Radore - </small> İstanbul
                      </div>           
                      <div className="change-server">
                        <div className="label-text"><FormattedMessage id="change" /></div>
                        <div className="list-area-container">
                          <div className="list-area">
                            <div className="search">
                              <input type="text" placeHolder="Ara" onChange={e => setKeyword(e.target.value)} />
                            </div>                        
                              <div className="label">
                                <FormattedMessage id="closeServers" />
                              </div>
                              <ul>
                                {servers.filter(item => item.server.toLowerCase().includes(keyword.toLowerCase().trim())).map(data => {
                                  return (
                                    <li><span>{data.location}</span> - {data.server}</li>
                                  );
                                })}
                              </ul>
                          </div>                          
                        </div>                      
                      </div>                                         
                    </div>
                  </li>                                                                                          
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="hero"><FormattedMessage id="currentConnection" /></div>
              <div className="subhead">Turkcell Superonline</div>
              <p>IPv4: 212.252.115.21</p>
              <p>İstanbul</p>
              <p><FormattedMessage id="lat" />: 41.0145 <FormattedMessage id="lng" />: 28.5256</p>
            </div>                             
            <div className="column" />
          </div>
        </div>
        </div>
      <Footer />
    </div>
  )
}
