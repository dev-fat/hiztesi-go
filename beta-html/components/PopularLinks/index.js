import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function PopularLinks() {
  return (
    <div className="wrapper">
      <div className="popular-links">
        <div className="hero">
          <FormattedMessage id="popularServersHero" />
        </div>
        <ul>
          <li>
            <a href="#" rel="noopener">
              Superonline
            </a>
          </li>
          <li>
            <a href="#" rel="noopener">
              Türksat Kablo
            </a>
          </li>
          <li>
            <a href="#" rel="noopener">
              Vodafone Net
            </a>
          </li>          
          <li>
            <a href="#" rel="noopener">
              Türk Telekom
            </a>
          </li>          
          <li>
            <a href="#" rel="noopener">
              D-Smart
            </a>
          </li>          
          <li>
            <a href="#" rel="noopener">
              TürkNet
            </a>
          </li>          
          <li>
            <a href="#" rel="noopener">
              millenicom
            </a>
          </li>          
          <li>
            <a href="#" rel="noopener">
              Doruknet
            </a>
          </li>          
        </ul>
      </div>
    </div>
  );
}
