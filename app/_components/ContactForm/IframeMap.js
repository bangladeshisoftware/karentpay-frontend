// components/IframeMap.js
'use client';

import useFetchingData from '@/lib/useFetchingData';
import React from 'react';

const IframeMap = () => {
  const { fetchData } = useFetchingData("/api/front/settings/contact-page");
  console.log(fetchData?.settings?.GoogleMapIframeLink)
  if (fetchData?.settings?.GoogleMapIframeLink) {
    return (
      <div style={{ width: '100%', height: '450px' }}>
        {/* <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.388845320903!2d88.63261517606404!3d25.625217014230085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb53777a02c7fd%3A0x1d432d17bacfd554!2sBangladeshi%20Software%20Ltd!5e0!3m2!1sen!2sbd!4v1717406991364!5m2!1sen!2sbd'
        width='100%'
        height='100%'
        style={{ border: 0, borderRadius: '5px' }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe> */}
        <iframe src={fetchData?.settings?.GoogleMapIframeLink} width="100%" height="100%" style={{ border: 0, borderRadius: '5px' }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    );
  };

}

export default IframeMap;
