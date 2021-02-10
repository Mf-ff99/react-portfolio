import React, { useState } from 'react';
import TextLoop from "react-text-loop";

const About = () => {

    // const [textArr, setTextArr] = useState(['mobile-first development', 'innovation in web-design', 'accessibility-first development'])
    // const [currTextArr, setCurrTextArr] = useState('elegant development')    
    

    // let i = 0
    // const switchTextOverlay = () => {
    //     setInterval(function() {
    //         if(i > 3) i = 0
    //         setCurrTextArr(textArr[i])
    //         i++
    //         console.log(textArr[i])
    //     }, 8000)
    // }

    // switchTextOverlay()

    
    return (
        <>
            <div className='about' id='about'>
            <div className='hero-bg'></div>
            <span className='bg-txt-overlay'>
                <TextLoop
                    interval={5000}
                >
                    <span>mobile-first development</span>
                    <span>accessibility-first development</span>
                    <span>innovation in web-design</span>
                    <span>elegant development</span>
                </TextLoop>
            </span>
                <div className='about-header'>
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