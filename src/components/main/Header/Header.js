import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { DiscordSvg, TwitterSvg } from '../Icons/svg';
import "./Header.css"
function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    return (
        <>
            {isDesktop
            &&
            <header>
                <div className="header__left">
                    <a href="/">
                        <img 
                            className='header__logo'
                            src="/images/HDMIlogo.gif"
                            alt="LogoHDMI"
                            width={100}
                            height={100}
                        />
                    </a>
                   <a href="/"><span className='header__hdmi'>HDMI</span></a>
                   
                </div>
                <div className="header__nav">
                    <ul>
                        <a href="#fonctionnalite"><li>Fonctionnalités</li></a>
                        <li>Avis</li>
                    </ul>
                </div>
                <div className="header__right">
                    <div className='header__social'> 
                        <a href="https://discord.gg/bNxJ9RwwZ2" target="_blank" rel="noreferrer"><DiscordSvg /></a>
                        <a href="https://twitter.com/HDMIping" target="_blank" rel="noreferrer"><TwitterSvg /></a>
                    </div>
                    <a href="https://dashboard.hdmiping.com" target="_blank" rel="noreferrer"><div className="header__cta">Dashboard</div></a>
                </div>
            </header>
            }
            {isTabletOrMobile
            &&
            <>
                <header>
                    <img 
                        src="/images/HDMIlogo.gif"
                        alt="LogoHDMI"
                        width={80}
                        height={80}
                    />
                    <span className='header__hdmi'>HDMI</span>
                    <div className={toggleMenu ? "header__toggleBtn open" : "header__toggleBtn"} onClick={() => setToggleMenu(!toggleMenu)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </header>
                <div className={toggleMenu ? "header__menu open" : "header__menu"}>
                    <div className='header__menu__nav'>
                        <ul>
                            <li onClick={() => setToggleMenu(false)}><a href="#metakicks">Accueil</a></li>
                            <li onClick={() => setToggleMenu(false)}><a href="#roadmap">Fonctionnalités</a></li>
                            <li onClick={() => setToggleMenu(false)}><a href="#faq">Avis</a></li>
                            <li><a href="https://dashboard.hdmiping.com" target="_blank" rel="noreferrer">Dashboard</a></li>
                        </ul>
                    </div>
                    <div className="header__footer">
                        <div className='header__social'>
                            <a href="https://discord.gg/bNxJ9RwwZ2" target="_blank" rel="noreferrer"><DiscordSvg /></a>
                            <a href="https://twitter.com/HDMIping" target="_blank" rel="noreferrer"><TwitterSvg /></a>
                        </div>
                    </div>
                </div> 
            </>
            }
        </>
    
    )
}

export default Header