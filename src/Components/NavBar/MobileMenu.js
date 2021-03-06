import styled from 'styled-components'
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100vh;
    // min-height: 800px;
    margin-top: 150px;
    margin-left: 0;
    padding-left: 0;
    z-index: 1000;
    /* overflow: hidden; */
    font-size: 18px;
    /* font-family: 'Montserrat', sans-serif; */
    font-family: 'Comfortaa', cursive;
    font-weight: 600;
    max-width: 700px;
    padding-right: 80px;
    padding-top: 10px;
    margin-block-start: 0;
    margin-block-end: 0;

    li {
        /* color: black !important; */
        padding: 18px 10px;
        /* min-width: 110px; */
        &:nth-child(4) {
            min-width: 120px;
        }
    }

    

    img {
        padding: 0;
        height: 90px;
         
    }
    
    a {
        /* color: black !important; */
        text-decoration: none;
        color: #ffffea;
    }

    .logo-text-left a {
        width: 100px;
        display: flex;
        flex-wrap: wrap;

    }

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 0;
    }

    .right-side-nav {
        right: 0;
        
    }

    @media (max-width: 8500px) {
        /* display: none !important; */
        /* min-height: 400px; */
        display: flex;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        /* background-color: #0D2538; */
        background-color: transparent;
        position: fixed;
        transform: ${({open}) => open ? 'translateY(0%)' : 'translateY(-100%)'};
        /* top: 0; */
        right: 0;
        margin-top: 150px;
        height: 250px;
        width: 200px !important;
        border-radius: 0 0 2px 20px;
        border: 1px 0 0 1px solid #333;
        /* border-bottom: 1px solid #333; */
        /* box-shadow: 10px 10px 10px 10px whitesmoke; */
        padding: 15px 0 0 0;
        transition: .3s ease-in-out;
        z-index: 1000;
        font-size: 25px;
        /* scroll-behavior: unset; */

    a {
        transition: .7s ease-in-out;
        &:hover {
            transition: .7s ease-in-out;
            color: #9AE5E6;
        }
        color: #ffffea;
    }
        li {
            color: #ffffea;
        }

        .logo {
            flex-direction: column;
            justify-content: center !important;
        }
    }
    @media (max-width: 658px) {
        background-color: #14181e !important;
        opacity: .95;
    }
    @media (min-width: 769px) {
        li.mobile a img{
            display: none !important;
            /* border: 1px solid red; */
        }


    }
`

class MobileNav extends React.Component {
    componentDidMount() {
        // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
        // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
        // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
        this.targetElement = document.querySelector('#mobile-nav');
        
    }
    
    showTargetElement = (open) => {
        //   if(open = true) enableBodyScroll(this.targetElement);
         
      } 
    render() {
        let open = this.props.open
        // if(open) disableBodyScroll(this.targetElement)
        // if(!open) clearAllBodyScrollLocks()
        return (
            <UL id='mobile-nav' open={open}>
            <li className="right-side-nav">
                <HashLink smooth to='#projects'>Projects</HashLink>

            </li>
            <li className="right-side-nav end">
                <HashLink smooth to='#about'>About</HashLink>

            </li>
        </UL>
    )
}

}

export default MobileNav