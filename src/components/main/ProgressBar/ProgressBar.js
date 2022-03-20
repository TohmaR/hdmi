import React, { useEffect, useState } from 'react'
import './ProgressBar.css'

function ProgressBar() {
    const [scrollIndicator, setScrollIndicator] = useState(0);

    const onScroll = () => {
        const pos = document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = (pos / height) * 100;

        setScrollIndicator(scrolled);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
  return (
    <div className="progressBar__container">
        <div 
            className='progressBar__indicator'
            style={{ width: `${scrollIndicator}%` }}
        >

        </div>
    </div>
  )
}

export default ProgressBar