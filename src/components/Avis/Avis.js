import React from 'react'
import './Avis.css'

function Avis() {
  return (
    <div className="avis" data-scroll-section>
        <div className="avis__container">
            <div className="avis__item">
                <img   
                    src="/images/HDMIlogoBlack.png"
                    alt="LogoHDMI"
                    width={100}
                    height={100}
                />
                <div className='avis__username'>Username</div>
                <p className="avis__description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
            <div className="avis__item">
                <img   
                    src="/images/HDMIlogoBlack.png"
                    alt="LogoHDMI"
                    width={100}
                    height={100}
                />
                <div className='avis__username'>Username</div>
                <p className="avis__description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
            <div className="avis__item">
                <img   
                    src="/images/HDMIlogoBlack.png"
                    alt="LogoHDMI"
                    width={100}
                    height={100}
                />
                <div className='avis__username'>Username</div>
                <p className="avis__description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
           
        </div>
    </div>
  )
}

export default Avis