import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { DiscordSvg, TwitterSvg } from '../Icons/svg';
import './Footer.css'

function Footer() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  return (
    <div className="footer" data-scroll-section>
      {isTabletOrMobile
      &&
        <div className='footer__social'>
            <a href="https://l.linklyhq.com/l/140nn" target="_blank" rel="noreferrer"><DiscordSvg /></a>
            <a href="https://l.linklyhq.com/l/140l2" target="_blank" rel="noreferrer"><TwitterSvg /></a>
        </div>
      }
      ©{(new Date().getFullYear())} HDMI. ALL RIGHT RESERVED.
    </div>
  )
}

export default Footer