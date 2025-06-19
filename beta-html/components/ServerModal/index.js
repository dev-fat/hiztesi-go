import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl';
import { useSwipeable } from 'react-swipeable';
import AdSense from 'react-adsense';

import ConfirmModal from '../ConfirmModal';

const MobileItem = props => {
  const [classes, setClass] = useState('item');
  const [isFavourite, setFavourite] = useState(false);
  const handlers = useSwipeable({ 
    onSwipedRight: () => {
      setClass('item show-favourite');
    },
    onSwipedLeft: () => {
      setClass('item');
    },    
  })

  return (
    <div className={classes + (isFavourite ? ' added' : '')} {...handlers}>
      <div class="favourite-area" onClick={() => setFavourite(isFavourite => !isFavourite)}>
        {isFavourite ? (
          <>
            <img src="./assets/images/remove-fav.svg" alt="" />
            Favoriden Çıkar
          </>
        ) : (
          <>
            <img src="./assets/images/fav-icon.svg" alt="" />
            Favori
          </>
        )}
      </div>
      <div className="name">{props.value.server}</div>
      <div className="location">{props.value.location}</div>
      <div className="distance">{props.value.distance}</div>
      <span className="toggle" onClick={() => props.modalToggle()}>
        <span /> 
      </span>
    </div>
  );
}


const servers = [
  {
    location: 'İstanbul',
    server: 'Radore',
    distance: '13km'
  },
  {
    location: 'İstanbul',
    server: 'Doruknet',
    distance: '13km'
  },  
  {
    location: 'İstanbul',
    server: 'Vodafone',
    distance: '13km'
  },    
  {
    location: 'İstanbul',
    server: 'Turkcell Superonline',
    distance: '13km'
  },      
  {
    location: 'İstanbul',
    server: 'Turknet',
    distance: '13km'
  },        
  {
    location: 'Bursa',
    server: 'DGN Teknoloji',
    distance: '13km'
  },
  {
    location: 'İstanbul',
    server: 'Radore',
    distance: '13km'
  },
  {
    location: 'İstanbul',
    server: 'Doruknet',
    distance: '13km'
  },  
  {
    location: 'İstanbul',
    server: 'Vodafone',
    distance: '13km'
  },    
  {
    location: 'İstanbul',
    server: 'Turkcell Superonline',
    distance: '13km'
  },      
  {
    location: 'İstanbul',
    server: 'Turknet',
    distance: '13km'
  },        
  {
    location: 'Bursa',
    server: 'DGN Teknoloji',
    distance: '13km'
  }
];

const ServerModal = props => {
  const router = useRouter()
  const { handleClose } = props;
  const [keyword, setKeyword] = useState('');
  const [showConfirmModal, setConfirmModalVisibility] = useState(false);

  return (
    <div className="server-modal">
      {showConfirmModal &&
        <ConfirmModal 
          hero="Netinternet Bilişim Teknolojileri Hizmetleri A.Ş."
          desc="İstanbul"
        >
          <ul>
            <li>
              <FormattedMessage id="testThisServer" />
            </li>
            <li>
              <FormattedMessage id="addFavs" />
            </li>
            <li className="cancel" onClick={() => setConfirmModalVisibility(false)}>
            <FormattedMessage id="cancel" />
            </li>                        
          </ul>
        </ConfirmModal>
      }    
      <div className="server-modal__content mobile-hide">
        <a href="#" className="close" onClick={handleClose} />
        <div className="hero">
          Netinternet Bilişim Teknolojileri A.Ş.
          <p>İstanbul</p>
        </div>
        <div className="columns">
          <div className="list">
            <div className="search">
              <input type="text" onChange={e => setKeyword(e.target.value)} />
            </div>
            <div className="list-area">
              <div className="label">
                <FormattedMessage id="closeServers" />
              </div>
              <ul>
                {servers.filter(item => item.server.toLowerCase().includes(keyword.toLowerCase().trim())).map(data => {
                  return (
                    <li onClick={handleClose}><span>{data.location}</span> - {data.server}</li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="add">
            <div className="label">
              <FormattedMessage id="addServer" />
            </div>
            <p>
              <FormattedMessage id="serverText" />
            </p>
            <a href="#" onClick={() => router.push('/register')}><FormattedMessage id="signUp" /></a>
          </div>
        </div>
      </div>
      <div className={showConfirmModal ? "server-modal__content mobile-visible no-scroll" : "server-modal__content mobile-visible"}>
        <div className="server-modal__head">
          <FormattedMessage id="changeServer" />
          <a href="#" className="back" onClick={handleClose} />
        </div>
        <div className="server-modal__ad">
          
        </div>
        <div className="server-modal-mobile__list">        
          <div className="field">
            <input type="text" onChange={e => setKeyword(e.target.value)} />
          </div>
          <div className="auto">
            <a href="#"><FormattedMessage id="chooseAuto" /></a>
          </div>
          <div className="list">
            {servers.filter(item => item.server.toLowerCase().includes(keyword.toLowerCase().trim())).map(data => {
              return <MobileItem value={data} modalToggle={() => setConfirmModalVisibility(true)} />;
            })}          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerModal;
