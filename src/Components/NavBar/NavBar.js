import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const StyledLogo = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-right: 10px;
/* font-family: 'Montserrat', sans-serif; */
font-family: 'Comfortaa', cursive;
font-weight: 600;
font-size: 15px;
margin-left: 20px;
/* padding-top: 20px; */
z-index: 10;
@media (min-width: 658px) {
    /* margin-top: 40px; */
}
img {
    padding: 0;
    height: 90px; 
}



a {
        /* margin-left: 20px; */
        
        color: #ffffea;
        font-size: 30px;
        @media (min-width: 658px) {
            font-size: 40px;
        }
        /* color: black !important; */
    }
    
    .logo-text-left a {
        width: 100px;
        display: flex;
        flex-wrap: wrap;
        
    }

    span {
        /* font-size: 20px; */
        transition-duration: 1s;
        transition-timing-function: ease-in-out;
        &:nth-child(2) {
                transition-property: font-style;
                transition-duration: 1s;
                transition-timing-function: ease-in-out;
                transition-delay: 0s;

            &:hover {
                transition-property: font-style;
                transition-duration: 1s;
                transition-timing-function: ease-in-out;
                transition-delay: 0s;
                color: #ffffea;
            }
        }
    }

    .colored-logo {
        font-size: 24px;
        padding: 5px;
        width: 145px;
        color: #95B2B8;
        font-style: oblique;
        letter-spacing: 2px;
        transition: .7s ease-in-out;
        @media (max-width: 658px) {
            display: none;
        }
        @media (min-width: 658px) {
            font-size: 20px;
            width: fit-content;
        }
    }

  

    @media (min-width: 768px) {
        /* display: none !important; */
        /* color: red !important; */
    }
`;

const NavStyled = styled.nav`
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    list-style: none;
    /* width: 90%; */
    background-color: #14181e;
    color: #ffffea;
    z-index: 0;
    /* margin: 0; */
    /* border-bottom: 2px solid #f1f1f1; */
    font-size: 18px;
    
    .logo {
        padding-left: 10px;
        margin-top: 10px;
        /* padding: 15px 0; */
        transition: .7s ease-in-out;
        a {
            transition: .7s ease-in-out;
            &:hover {
                transition: .7s ease-in-out;
                color: #95b2b8;
            }
        }
    }
    .contact-icons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 200px;
        
        a {
            color: #ffffea;
        font-size: 30px;
        @media (min-width: 658px) {
            font-size: 40px;
        }
    }
        i {
    
    transition: .5s cubic-bezier(0.215, 0.610, 0.355, 1);
    border-radius: 50px;
    &:hover {
        transition: .5s cubic-bezier(0.215, 0.610, 0.355, 1);
        /* transform: rotate(720deg); */
        color: #95b2b8;
    }
    }
    @media (max-width: 658px) {
        display: none;
    }
}

    ul {
        list-style: none;
        display: flex;
        flex-flow: nowrap;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        /* background-color: #14181e; */
        background-color: transparent;
    }

    li {
        padding: 18px 10px;
    }

    .logo {
        /* height: 90px;
        width: 90px; */
        margin: 0;
        padding: 0;
        a {
            text-decoration: none !important;
        }
    }

    .logo span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        /* width: 20px; */

    }

   

    .logo-text-left a{
        width: 120px !important;
    }

    @media (max-width: 770px) {
        justify-content: space-between;
        /* padding: 10px; */
        width: 100vw;
    }
`;

export default class Nav extends React.Component {


    render() {
        return (
            <NavStyled>
                <StyledLogo>

                    <span className="logo"><a href='/'>Mark Force</a></span>
                    <span className='colored-logo'>Full Stack Web Developer</span>
                    {/* <div className='contact-icons'>
                        <a href='mailto:force.j.mark@gmail.com'>
                            <i class="fas fa-envelope-square fa-md"></i>
                        </a>

                        <a href='https://github.com/Mf-ff99' target='_blank' rel='noopener noreferrer'>
                            <i class="fab fa-github-square fa-md"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/mark-j-force/' target='_blank' rel='noopener noreferrer'>
                            <i class="fab fa-linkedin fa-md"></i>
                        </a>
            <a href='https://medium.com/@lyerend' target='_blank' rel='noopener noreferrer'>
                        <i class="fab fa-medium fa-md"></i>
            </a> 
                    </div> */}

                </StyledLogo>
                <div className='contact-icons'>
                        <a href='mailto:force.j.mark@gmail.com'>
                            <i class="fas fa-envelope-square fa-md"></i>
                        </a>

                        <a href='https://github.com/Mf-ff99' target='_blank' rel='noopener noreferrer'>
                            <i class="fab fa-github-square fa-md"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/mark-j-force/' target='_blank' rel='noopener noreferrer'>
                            <i class="fab fa-linkedin fa-md"></i>
                        </a>
            <a href='https://medium.com/@lyerend' target='_blank' rel='noopener noreferrer'>
                        <i class="fab fa-medium fa-md"></i>
            </a> 
                    </div>

                <Burger />

            </NavStyled>
        )
    }
}