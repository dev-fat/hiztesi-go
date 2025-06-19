import React, { useState, useEffect } from 'react';

const AdHolder = props => {
  if(process.browser) {
    let adsbygoogle = window.adsbygoogle || [] 
    adsbygoogle.push({});

    google_adtest = "on";
  }

  let { slotID, format, pubID, Awidth, Aheight } = props;
  Awidth = parseInt(Awidth);
  Aheight = parseInt(Aheight);
  return (
    <ins className="adsbygoogle"
         data-ad-client={"ca-pub-"+pubID}
         data-ad-slot={slotID}
         data-ad-format={"auto"}
         data-adtest="on"
         data-full-width-responsive="true"></ins>
  );
};

export default AdHolder;
