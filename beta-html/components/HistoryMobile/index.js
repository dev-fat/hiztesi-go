import React from 'react';
import AdSense from 'react-adsense';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router'

const HistoryMobile = props => {
  const router = useRouter()

  return (
    <div className="history-mobile">
      <div className="history-mobile__list">
        <div className="item head">
          <div className="type"><FormattedMessage id="connection" /></div>
          <div className="date"><FormattedMessage id="date" /></div>
          <div className="download">Mbps</div>
          <div className="upload">Mbps</div>
        </div>
        <span className="item normal" onClick={() => router.push('/result')}>
          <div className="type">
            <em className="type-icon lte" />
          </div>
          <div className="date">
            18.06.2018<br />
            22:46
          </div>
          <div className="download">44,21</div>
          <div className="upload">12,21</div>
        </span>   
        <span className="item normal" onClick={() => router.push('/result')}>
          <div className="type">
            <em className="type-icon lte" />
          </div>
          <div className="date">
            18.06.2018<br />
            22:46
          </div>
          <div className="download">44,21</div>
          <div className="upload">12,21</div>
        </span>   
        <span className="item normal" onClick={() => router.push('/result')}>
          <div className="type">
            <em className="type-icon wifi" />
          </div>
          <div className="date">
            18.06.2018<br />
            22:46
          </div>
          <div className="download">44,21</div>
          <div className="upload">12,21</div>
        </span>    
        <span className="item normal" onClick={() => router.push('/result')}>
          <div className="type">
            <em className="type-icon edge" />
          </div>
          <div className="date">
            18.06.2018<br />
            22:46
          </div>
          <div className="download">44,21</div>
          <div className="upload">12,21</div>
        </span>   
        <span className="item normal" onClick={() => router.push('/result')}>
          <div className="type">
            <em className="type-icon lte" />
          </div>
          <div className="date">
            18.06.2018<br />
            22:46
          </div>
          <div className="download">44,21</div>
          <div className="upload">12,21</div>
        </span>   
        <span className="item normal" onClick={() => router.push('/result')}>
          <div className="type">
            <em className="type-icon grps" />
          </div>
          <div className="date">
            18.06.2018<br />
            22:46
          </div>
          <div className="download">44,21</div>
          <div className="upload">12,21</div>
        </span>       
        <span className="item normal" onClick={() => router.push('/result')}>
          <div className="type">
            <em className="type-icon lte" />
          </div>
          <div className="date">
            18.06.2018<br />
            22:46
          </div>
          <div className="download">44,21</div>
          <div className="upload">12,21</div>
        </span>                                                   
      </div>    
    </div>
  );
};

export default HistoryMobile;
