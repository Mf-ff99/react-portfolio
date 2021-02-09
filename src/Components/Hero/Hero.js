import React from 'react'
import Projects from './Projects'

export default function Hero() {


    return (
        <>
            <div className='hero'>
                {/* <h1>Mark Force</h1> */}
                <div className='hero-bg'></div>
                <div className='hero-info-container'>
                    
                    <span title='full stack web development'>full stack web development</span>
                    
                <p>HEY THERE! I'M A WEB DEV FROM FLORIDA!
                    <br />
                I'M PASSIONATE ABOUT MAKING A DIFFERENCE THROUGH CODE
                <br />
                AND I LOVE COLLABORATING, SHOOT ME AN EMAIL!
                <br />
                EXPLORE A FEW OF MY PROJECTS BELOW
                </p>
                </div>
                <Projects />
            </div>
        </>
    )

}

