import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { DiscordSvg, ArrowRightSvg, ArrowDownSvg } from '../main/Icons/svg'
import './Home.css'

function Home() {
    const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    return (
        
      
        <div className="home">
            <div className="home__container">
                <div className="home__content">
                    <h1 className="home__title">Bienvenue sur HDMI</h1>
                    <h2 className="home__subtitle">Ne manquer aucune opportunité est notre principale devise.</h2>
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
               <ArrowDownSvg />
            </div>
            <div class="home__wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
       
    )
}

export default Home