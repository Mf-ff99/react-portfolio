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
                    interval={2000}
                    mask={true}
                    // noWrap={false}
                    // springConfig={{ stiffness: 120, damping: 5 }}
                >
                    <span>Sass</span>
                    <span>ReactJS</span>
                    <span>JavaScript</span>
                    <span>Gatsby</span>
                    <span>Node.js</span>
                    <span>PostgreSQL</span>
                    <span>Express.js</span>
                    <span>React-Native</span>
                    <span>GraphQL</span>
                </TextLoop>                    
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
                <About />
            </div>
            <Footer />
        </>
    )

}

