import React from 'react'

function Market() {
  return (
    <div className="fonctionnalite market">
        <h2 className="fonctionnalite__title">Suivi de marché</h2>
        <div className='fonctionnalite__container'>
            <div className="fonctionnalite__text">
                HDMI ne propose pas de conseil financier. mais vous aide à orienter vos investissements NFT dans la bonne direction. Cela par l’intermédiaire de précieuses informations.
                <br/><br/>
                Nous notifions les projets NFT profitables et nous nous démenons pour détecter au plus tôt les opportunités pour nos membres. Les notifications de projet sont accompagnées d’une analyse vous permettant d’investir intelligemment en fonction de votre portefeuille.
                <br/><br/>
                En démarcation de la majeure concurrence, HDMI privilégie la qualité à la quantité. Les projets à haut potentiel en cours de développement sont postés le plus tôt possible dans notre section watchlist et nous assurons un suivi pour chacun d’entre eux, y compris pour vos investissements sur le marché secondaire.
                <br/><br/>
                L’obtention de whitelist est une option d’investissement à ne pas négliger et pour laquelle notre communauté propose une entraide ayant démontré son efficacité à de nombreuses reprises.
            </div>
            <img 
                className="fonctionnalite__logo"
                src="/images/Market.png"
                alt="LogoHDMI"
            />
        </div>
    </div>
  )
}

export default Market