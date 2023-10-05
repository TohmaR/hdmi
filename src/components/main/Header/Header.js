import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { DiscordSvg, TwitterSvg } from '../Icons/svg';
import HeaderLogo from "../../../images/HDMIlogo.webm"
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
                        <video className='header__logo' aria-label='header__logo' width={100} height={100} autoPlay loop muted>
                            <source src={HeaderLogo} type="video/webm" />
                            Votre navigateur ne supporte pas la vidéo.
                        </video>
                    </a>
                   <a href="/"><span className='header__hdmi'>HDMI</span></a>
                </div>
                <div className="header__nav">
                    <ul>
                        <li>
                            <a href="#fonctionnalite">Fonctionnalités</a>
                        </li>
                    </ul>
                </div>
                <div className="header__right">
                    <div className='header__social'> 
                        <a href="https://l.linklyhq.com/l/140nn" target="_blank" aria-label='Discord' rel="noreferrer"><DiscordSvg /></a>
                        <a href="https://l.linklyhq.com/l/140l2" target="_blank" arial-label="Twitter" rel="noreferrer"><TwitterSvg /></a>
                    </div>
                    <a href="https://l.linklyhq.com/l/140iR" target="_blank" rel="noreferrer"><div className="header__cta">Dashboard</div></a>
                </div>
            </header>
            }
            {isTabletOrMobile
            &&
            <>
                <header>
                    <video className='header__logo' aria-label='header__logo' width={80} height={80} autoPlay loop muted>
                        <source src={HeaderLogo} type="video/webm" />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
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
                            <li onClick={() => setToggleMenu(false)}><a href="#accueil">Accueil</a></li>
                            <li onClick={() => setToggleMenu(false)}><a href="#fonctionnalites">Fonctionnalités</a></li>
                            {/* <li onClick={() => setToggleMenu(false)}><a href="#faq">Avis</a></li> */}
                            <li><a href="https://l.linklyhq.com/l/140iR" target="_blank" rel="noreferrer">Dashboard</a></li>
                        </ul>
                    </div>
                    <div className="header__footer">
                        <div className='header__social'>
                            <a href="https://l.linklyhq.com/l/140nn" target="_blank" rel="noreferrer"><DiscordSvg /></a>
                            <a href="https://l.linklyhq.com/l/140l2" target="_blank" rel="noreferrer"><TwitterSvg /></a>
                        </div>
                    </div>
                </div> 
            </>
            }
        </>
    
    )
}

export default Header