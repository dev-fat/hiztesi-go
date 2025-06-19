import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router'

export default function Footer(props) {
  const router = useRouter()

  return (
    <div className="page-footer" style={{ marginTop: props.noMargin ? 0 : 20 }}>
      <div className="wrapper">
        <div className="columns">
          <div className="col">
            <div className="label">HIZTESTİ</div>
            <ul>
              <li><a href="#" onClick={() => router.push('/about-us')}><FormattedMessage id="aboutUs" /></a></li>
              <li><a href="#"><FormattedMessage id="addServer" /></a></li>
              <li><a href="#"><FormattedMessage id="contactForAds" /></a></li>
              <li><a href="#"><FormattedMessage id="reports" /></a></li>
              <li><a href="#"><FormattedMessage id="blog" /></a></li>
            </ul>
          </div>
          <div className="col">
            <div className="label"><FormattedMessage id="products" /></div>
            <ul>
              <li><a href="#" onClick={() => router.push('/mobile-apps')}><FormattedMessage id="mobileApps" /></a></li>
              <li><a href="#"><FormattedMessage id="flex" /></a></li>
              <li><a href="#"><FormattedMessage id="expert" /></a></li>
              <li><a href="#"><FormattedMessage id="liveMapFooter" /></a></li>
            </ul>
          </div>        
          <div className="col">
            <div className="label"><FormattedMessage id="account" /></div>
            <ul>
              <li><a href="#"><FormattedMessage id="resultsHistory" /></a></li>
              <li><a href="#"><FormattedMessage id="settings" /></a></li>
              <li><a href="#"><FormattedMessage id="help" /></a></li>
              <li><a href="#"><FormattedMessage id="createAccount" /></a></li>
            </ul>
          </div>          
          <div className="col">
            <div className="apps">
              <a href="#" className="app-ituness">

              </a>
              <a href="#" className="app-google">
              </a>              
            </div>
            <ul>
              <li><a href="#"><FormattedMessage id="policy" /></a></li>
              <li><a href="#"><FormattedMessage id="agreements" /></a></li>
              <li><a href="#" rel="noopener" className="facebook">Facebook</a></li>
              <li><a href="#" rel="noopener" className="twitter">Twitter</a></li>              
            </ul>
          </div>          
        </div>
      </div>
      <div className="copyright">
        <FormattedMessage id="copyright" />
      </div>
    </div>
  );  
}
