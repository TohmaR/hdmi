import React from 'react'

function investment() {
  return (
    <section className="fonctionnalite investment" data-scroll-section>
        <div className="fonctionnalite__title__container">
            <h2 className="fonctionnalite__title">Investissement</h2>
            <h2 className="fonctionnalite__title">Investissement</h2>
        </div>
        <div className='fonctionnalite__container'>
            <img 
                className="fonctionnalite__logo"
                src="/images/investment.png"
                alt="LogoHDMI"
            />
            <div className="fonctionnalite__text">
                HDMI ne propose pas de conseil financier. mais vous aide à orienter vos investissements NFT dans la bonne direction. Cela par l’intermédiaire de précieuses informations.
                <br/><br/>
                Nous notifions les projets NFT profitables et nous nous démenons pour détecter au plus tôt les opportunités pour nos membres. Les notifications de projet sont accompagnées d’une analyse vous permettant d’investir intelligemment en fonction de votre portefeuille.
                <br/><br/>
                En démarcation de la majeure concurrence, HDMI privilégie la qualité à la quantité. Les projets à haut potentiel en cours de développement sont postés le plus tôt possible dans notre section watchlist et nous assurons un suivi pour chacun d’entre eux, y compris pour vos investissements sur le marché secondaire.
                <br/><br/>
                L’obtention de whitelist est une option d’investissement à ne pas négliger et pour laquelle notre communauté propose une entraide ayant démontré son efficacité à de nombreuses reprises.
            </div>
        </div>
        <div class="investment__wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
    </section>
  )
}

export default investment