import React from 'react';
import './style/ContactInfo.css'; // Assuming you name the CSS file ContactInfo.css

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h2 className="contact-info-heading">Ota Yhteyttä</h2>
      <p className="contact-info-item">MPA Rakennus Oy</p>
      <p className="contact-info-item">✉️  payandemohsen7@gmail.com</p>
      <p className="contact-info-item">🏢 Kirstinsyrjä 6 B 39, 02760 Espoo</p>
      <p className="contact-info-item">📞 +358 045 235 7759</p>
      
    </div>
  );
}

export default ContactInfo;
