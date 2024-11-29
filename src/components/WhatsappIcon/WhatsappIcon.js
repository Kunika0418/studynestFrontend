import React from 'react';
import whatsappIcon from './whatsappIcon.gif';

const WhatsappIcon = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=918882487126"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="h-16 w-16 rounded-full fixed bottom-10 right-10 z-20 overflow-hidden">
        <img src={whatsappIcon} className="h-full w-full object-cover" alt="WhatsApp Icon" />
      </div>
    </a>
  );
};

export default WhatsappIcon;
