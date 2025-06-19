import React from 'react';

const ConfirmModal = props => {
  return (
    <div className="confirm-modal-container">
      <div className="backdrop" />
      <div className="confirm-modal-content">
        <div className="text">
          <div className="hero">
            {props.hero}
          </div>
          <div className="desc">
            {props.desc}
          </div>          
        </div>
        { props.children }
      </div>
    </div>
  );
};

export default ConfirmModal;
