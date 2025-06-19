import React, { useState, useEffect } from 'react';
import { NextIntlConsumer } from '@moxy/next-intl';
import { FormattedMessage } from 'react-intl';

import { useRouter } from 'next/router'

import MobileHeader from '../MobileMenu';
import ConfirmModal from '../ConfirmModal';

const LanguageSelect = () => (
    <NextIntlConsumer>
      { ({ locales, locale, changeLocale }) => (
        <>
        <div className="language-toggle">
          <img src={locale.icon} alt="" />
          {locale.code}
        </div>
        <div className="dropdown-container">
          <div className="dropdown">
            <ul>
              { locales.map(({ code, icon, id }) => (
                  <li onClick={ (event) => changeLocale(id) }>
                    <img src={icon} alt="" />
                    {code}
                  </li>
              )) }              
            </ul>
          </div>
        </div>          
        </>
        ) }
    </NextIntlConsumer>
);

export default function Header(props) {
  const router = useRouter()
  const [isModalShown, setModalVisibility] = useState(false);

  useEffect(() => {
    document.querySelectorAll('.js-share-dropdown li').forEach(function (item, idx) {
      item.querySelector('.copy').addEventListener('click', function (e) {
        this.classList.add('active');

        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = this.closest('li').querySelector('input').getAttribute('value');
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);


        setTimeout(() => {
          this.classList.remove('active');
        }, 600)        
      });
    });  
  }, []);

  return (
    <div className="wrapper">
      <MobileHeader />
      {isModalShown &&
        <ConfirmModal 
          hero="SONUCU SİL?"
          desc="Bu sonuç geçmişinizden silinecek ve geri alınamayacak."
        >
          <ul className="two-col">
            <li onClick={() => setModalVisibility(false)}>
              <FormattedMessage id="no" />
            </li>
            <li className="cancel">
              <FormattedMessage id="yes" />
            </li>                        
          </ul>
        </ConfirmModal>
      }
      <div className="header">
        <div className="logo">
          <span onClick={() => router.push('/')}>
            HIZTESTİ
          </span>
        </div>
        <div className="navigation">
          <div className="nav">
            <ul>
              <li>
                <span className="history" onClick={() => router.push('/history')}>
                  <FormattedMessage id="resultsHistory" />
                </span>
              </li>
              <li>
                <span className="settings" onClick={() => router.push('/settings')}>
                  <FormattedMessage id="settings" />
                </span>
              </li>
              {props.profile ? (
                <li>
                  <span className="profile" onClick={() => router.push('/profile')}>
                    user@hiztesti.com.tr
                  </span>
                </li>
              ) : (
              <li>
                <span className="signin" onClick={() => router.push('/login')}>
                  <FormattedMessage id="signIn" />
                </span>
              </li>
              )}
            </ul>
          </div>
          <div className={props.alternative ? "language mobile-hide" : "language"}> 
            <LanguageSelect />
          </div>
          {props.alternative &&
            <div className="mobile-visible">
              <span className="go-back" onClick={() => router.back()}>
                <img src="./assets/images/icon-back.svg" alt="" />
              </span>
              <div className="page-actions">
                <a href="#" onClick={() => setModalVisibility(true)}>
                  <img src="./assets/images/trash.svg" alt="" />
                </a>
                <a href="#">
                  <img src="./assets/images/share.svg" alt="" />
                  <div className="link-dropdown js-share-dropdown">
                    <ul>
                      <li>
                        <div>
                          Web
                          <input type="text" value="https://www.hiztesti.com" disabled/>
                          <span className="copy"></span>
                        </div>
                      </li>                                
                      <li>
                        <div>
                          <FormattedMessage id="image" />
                          <input type="text" value="https://www.hiztesti.com" disabled/>
                          <span className="copy"></span>
                        </div>
                      </li>                                
                      <li>
                        <div>
                          Embed
                          <input type="text" value='<a href="https://www.hiztesti.com</a>' disabled/>
                          <span className="copy"></span>
                        </div>
                      </li>                                
                      <li>
                        <div>
                          Forum
                          <input type="text" value="[URL=https://www.hiztestesti.com]" disabled/>
                          <span className="copy"></span>
                        </div>
                      </li>                                                                                                                                      
                    </ul>
                  </div>                      
                </a>                
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
