import React, { useState } from 'react';
import TextLoop from "react-text-loop";

const About = () => {
    
    return (
        <>
            <div className='about'>
            <div className='hero-bg'></div>
            <span className='bg-txt-overlay'>
                <TextLoop
                    interval={5000}
                    mask={true}
                    // noWrap={false}
                    springConfig={{ stiffness: 180, damping: 8 }}
                >
                    <span>mobile-first  </span>
                    <span>accessibility-first  </span>
                    <span>innovation in  </span>
                    <span>elegant  </span>
                </TextLoop>
                <span>  development</span>
            </span>
                <div  id='about' className='about-header'>
                    <h1>About</h1>
                </div>
                <div className='about-info-container'>
                    <p><span>Hello!</span> I'm a software engineer and full stack developer. I am skilled in Python, Javascript, CSS, and HTML programming. I've always been in love with programming, from Scratch to Fullstack Web Development there are few things I enjoy in life more than coding.
                </p>
                    <p>
                        I love minimalism as well as brutalism in web design, if you have any questions, or wish to message me, hit me up on any one of my social links.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About