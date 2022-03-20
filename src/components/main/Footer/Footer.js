import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer" data-scroll-section>
        ©{(new Date().getFullYear())} HDMI. ALL RIGHT RESERVED.
    </div>
  )
}

export default Footer