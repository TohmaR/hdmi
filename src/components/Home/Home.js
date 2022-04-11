import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { DiscordSvg, ArrowRightSvg, ArrowDownSvg } from '../main/Icons/svg'
import './Home.css'

function Home() {
    const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    return (
        
      
        <section className="home" data-scroll-section>
            <div className="home__container">
                <div className="home__content">
                    <h1 className="home__title">Bienvenue sur HDMI</h1>
                    <h2 className="home__subtitle">Saisissez les meilleures opportunités.</h2>
                    <p className="home__text">
                        HDMI est un groupe vous fournissant toutes les ressources nécessaires pour investir dans les NFT, que vous soyez novice ou expérimenté.
                    </p>
                    <div className="home__cta">
                        <DiscordSvg />
                        <span>Rejoingnez notre discord </span>
                        <ArrowRightSvg />
                    </div>
                </div>
                <img 
                    className="home__image"
                    src="/images/HDMIlogo.gif"
                    alt="LogoHDMI"
                />
            </div>
            <img 
                className="home__backgroundImage"
                src="/images/HDMIlogo.gif"
                alt="LogoHDMI"
            />
            <div className='home__gradient'></div>
            <div className="home__scroll"> 
                <div className="home__scroll__container">
                    <a href="#fonctionnalite">
                        <img className="home__scroll__image" src="images/scroll-down.png" alt="scroll-down" />
                        <svg className="home__scroll__arrow" width="34" height="20" viewBox="0 0 34 20" fill="none"xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L17 17L32 2" stroke="#F7F0EE" strokeWidth="4" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
       
    )
}

export default Home