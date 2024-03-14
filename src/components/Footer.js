import React from 'react';
import './style/Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>MPA Rakennus Oy © 2024</small>
          <div class='social-icons'>
          <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link tiktok'
              to='/'
              target='_blank'
              aria-label='Tiktok'
            >
              <i class='fab fa-tiktok' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

