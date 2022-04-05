import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { ArrowLeftSliderSvg, ArrowRightSliderSvg } from '../main/Icons/svg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./Slider.css"
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'

const fonctionnalites = [
    {
        id:"0",
        title: "Notifications",
        description: "Grâce au développement d’un système de notifications et de rappels automatisé, ne manquez aucuns des événements importants qui ont lieu dans le space.",
        img: "/images/3Dlogo/Flying Coins (front view).png"
    },
    {
        id:"1",
        title: "Base de données",
        description: "Grâce au développement d’un système de notifications et de rappels automatisé, ne manquez aucuns des événements importants qui ont lieu dans le space.",
        img: "/images/3Dlogo/Safe (front view).png"
    },
    {
        id:"2",
        title: "Signals",
        description: "Grâce au développement d’un système de notifications et de rappels automatisé, ne manquez aucuns des événements importants qui ont lieu dans le space.",
        img: "/images/3Dlogo/Rocket (left side view).png"
    },
    {
        id:"3",
        title: "Communauté",
        description: "Grâce au développement d’un système de notifications et de rappels automatisé, ne manquez aucuns des événements importants qui ont lieu dans le space.",
        img: "/images/3Dlogo/Lock (left side view).png"
    },
    {
        id:"4",
        title: "Support",
        description: "Grâce au développement d’un système de notifications et de rappels automatisé, ne manquez aucuns des événements importants qui ont lieu dans le space.",
        img: "/images/3Dlogo/Anonymous (left side view).png"
    },
    {
        id:"5",
        title: "Outils",
        description: "Grâce au développement d’un système de notifications et de rappels automatisé, ne manquez aucuns des événements importants qui ont lieu dans le space.",
        img: "/images/3Dlogo/Keys (left side view).png"
    },
    {
        id:"6",
        title: "Education",
        description: "Grâce au développement d’un système de notifications et de rappels automatisé, ne manquez aucuns des événements importants qui ont lieu dans le space.",
        img: "/images/3Dlogo/Contract (left side view).png"
    }
]

function Slider() {
  return (
    <section className="slider" data-scroll-section>
       <Carousel 
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            verticalSwipe='default'
            emulateTouch={true}
            swipeable={true}
            showStatus={false}
            renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                    <button onClick={clickHandler} className="slider__leftArrow">
                        <ArrowRightAltIcon sx={{ fontSize: 100 }} style={{ transform: "rotate(180deg)" }}/>
                    </button>
                )
            }
            renderArrowNext={(clickHandler, hasNext, labelNext) =>
                hasNext && (
                    <button onClick={clickHandler} className="slider__rightArrow">
                       <ArrowRightAltIcon sx={{ fontSize: 100 }}  />
                    </button>
                )
            }
        >
            {fonctionnalites.map((item) => {
                return(
                        <div className='slider__container' key={item.id}>
                            <div className="slider__title__container">
                                <h2 className="slider__title">{item.title}</h2>
                                <h2 className="slider__title">{item.title}</h2>
                            </div>
                            <div className='slider__content'>
                                <img 
                                    className="slider__logo"
                                    src={item.img}
                                    alt="LogoHDMI"
                                    width={80}
                                    height={300}
                                />
                                <div className="slider__text">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                );
            })}
       </Carousel>
        <div class="slider__wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
    </section>
  )
}

export default Slider