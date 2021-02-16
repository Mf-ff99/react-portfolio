import React, { useState } from 'react';
import TextLoop from "react-text-loop";

const About = () => {
    
    return (
        <>
            <div className='about'>
            <div className='hero-bg'></div>
            <span className='bg-txt-overlay'>
                <TextLoop
                    interval={2000}
                    mask={true}
                    // noWrap={false}
                    // springConfig={{ stiffness: 180, damping: 8 }}
                >
                    <span>mobile-first  </span>
                    <span>accessibility-first  </span>
                    <span>client-first  </span>
                    <span>SEO-friendly  </span>
                    <span>speed-driven  </span>
                    <span>innovative  </span>
                    <span>elegant  </span>
                    <span>creative  </span>
                </TextLoop>
                <span>  development</span>
            </span>
                <div  id='about' className='about-header'>
                    <h1>About</h1>
                </div>
                <div className='about-info-container'>
                    <p><span>Hello!</span> I'm a <span className='highlighted__span'>software engineer</span> and <span className='highlighted__span'>full stack developer</span>. I am skilled in Python, Javascript, CSS, and HTML programming. I've always been in love with programming, from Scratch to Fullstack Web Development there are few things I enjoy in life more than coding.
                </p>
                <p>
                     I am fluent in numerous frameworks and languages such as <span className='highlighted__span'>JavaScript</span>, <span className='highlighted__span'>ReactJS</span>, <span className='highlighted__span'>Gatsby</span>, <span className='highlighted__span'>Express.js</span>, <span className='highlighted__span'>SCSS</span>, <span className='highlighted__span'>Material UI</span>, <span className='highlighted__span'>SQL/PostgreSQL</span>, <span className='highlighted__span'>jQuery</span>, and anything else I put my <span className='highlighted__span'>mind</span> to.
                </p>
                    <p>
                        I love minimalism as well as brutalism in web design. If you have any questions, or wish to message me, hit me up on any one of my social links.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About