import React from 'react'
import About from './About'
import Projects from './Projects'
import TextLoop from "react-text-loop";
import Footer from '../Footer/Footer';

export default function Hero() {


    return (
        <>
            <div className='hero'>
                {/* <h1>Mark Force</h1> */}
                <div className='hero-bg'></div>
                <div className='hero-info-container'>
                    
                <TextLoop
                    interval={1800}
                    mask={true}
                    // noWrap={false}
                    // springConfig={{ stiffness: 120, damping: 5 }}
                >
                    <span className='hero__highlighted'>Sass</span>
                    <span className='hero__highlighted'>ReactJS</span>
                    <span className='hero__highlighted'>JavaScript</span>
                    <span className='hero__highlighted'>Gatsby</span>
                    <span className='hero__highlighted'>Node.js</span>
                    <span className='hero__highlighted'>PostgreSQL</span>
                    <span className='hero__highlighted'>Express.js</span>
                    <span className='hero__highlighted'>React-Native</span>
                    <span className='hero__highlighted'>GraphQL</span>
                </TextLoop>                    
                <p>HEY THERE! I'M A <span className='__highlighted'>WEB DEV</span> FROM FLORIDA!
                    <br />
                I'M PASSIONATE ABOUT <span className='__highlighted'>MAKING A DIFFERENCE</span> THROUGH CODE.
                <br />
                I LOVE COLLABORATING, SHOOT ME AN <a href='mailto:force.j.mark@gmail.com' className='__highlighted'>EMAIL</a>!
                <br />
                EXPLORE A FEW OF MY PROJECTS BELOW
                </p>
                </div>
                <Projects />
                <About />
            </div>
            <Footer />
        </>
    )

}

