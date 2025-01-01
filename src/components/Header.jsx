import styled from 'styled-components'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";


const Header = ()=>{
    const clearAll = ()=> {

    }
    const OpenPopUp = ()=>{
        // alert('Hello Adeola')
        const popup = document.getElementsByClassName('popup')
        popup[0].style.display = 'block'
        const noshow = document.getElementsByClassName('noShow')
        noshow[0].style.display = 'none'
        // console.log(popup);
        
    }
    const ClosePopUp = ()=>{
        // alert('Hello Adeola')
        const popup = document.getElementsByClassName('popup')
        popup[0].style.display = 'none'
        // console.log(popup);
        const noshow = document.getElementsByClassName('noShow')
        noshow[0].style.display = 'flex' 
    }
    const ClosePopUpForNavigation = ()=>{
        // alert('Hello Adeola')
        const popup = document.getElementsByClassName('popup')
        popup[0].style.display = 'none'
    }

    return (
        <>
            <PopUp className='popup'>
                <Close onClick={ClosePopUp}>
                    <IoCloseCircle />
                </Close>
                <Menu>
                    <a href="#about" onClick={ClosePopUp}><h2>About Me</h2></a>
                    <a href="#projects" onClick={ClosePopUp}><h2>Projects</h2></a>
                    <a href="#contact" onClick={ClosePopUp}><h2>Contact Me</h2></a>
                </Menu>
            </PopUp>
            <Container>
                <Wrapper className='noShow'>
                    <h2>Holla!</h2>
                    <Nav>
                        <NavLinks>
                        {/* <Link to="/signin" >Click here to find love</Link> */}
                            <a href="#about">About Me</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact Me</a>
                        </NavLinks>
                        
                    </Nav>
                    <NavIcons>
                            <a href="https://github.com/Dimex19" target='_blank'><FaGithub /></a> 
                            <a href="https://www.linkedin.com/in/azeezabolaji06/" target='_blank'><FaLinkedin /></a>
                            <a href="https://x.com/Oladimzz" target='_blank'><BsTwitterX /></a> 

                    </NavIcons>
                    <Hamburger onClick={OpenPopUp}>
                        <GiHamburgerMenu />
                    </Hamburger>
                </Wrapper>
            </Container>
        </>
    )
}
export default Header

const Container = styled.div`
    /* width: 100vw;
    height: 50px;
    border: 1px solid red;
    background-color: #3f3c3b; */
`
const PopUp = styled.div`
    display: none;
    height: calc(100vh + 200px);
    width: 100vw;
    position: fixed;
    background-color: #111111;
`
const Close = styled.div`
    font-size: 60px;
    color: #D4B134;
    display: flex;
    justify-content: flex-end;
    margin: 40px 50px;
`
const Menu = styled.div`
    h2 {
        margin-bottom: 20px;
        padding-left: 20px;
        width: 200px;
        /* color: #AAAAAA; */
        /* background: linear-gradient(95.28deg, #9C83FF 57.09%, #FF9051 87.74%); */
        background: linear-gradient(to right,#9C83FF, #f32170, 
            #ff6b08, #cf23cf, #9C83FF); 
        background-clip: inherit;
        -webkit-text-fill-color: transparent; 
        -webkit-background-clip: text;

    }
    a {
        text-decoration: none;
    }
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 20px;
    width: 1690px;
    /* width: 100vw; */
    margin-right: auto;
    margin-left: auto;
    position: fixed;
    /* border: 1px solid red; */
    background-color: #3f3c3b;

    @media (max-width:767px){
        width: 100vw;
        padding: 10px;
        margin-top: 0;
        margin-bottom: 50px;
    }
    @media (max-width:1689px){
        width: 100vw;
        padding: 20px;
        padding-left: 30px;
        padding-right: 50px;
        margin-top: 0;
        margin-bottom: 50px;
    }
    
    `
const Nav = styled.div`
    display: flex;
    align-items: center;
`
const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    min-width: 300px;
    /* margin-right: 30px; */
    a {
        text-decoration: none;
        color: white;
        cursor: pointer;
        font-weight: 500;
    }
    @media (max-width:767px){
        display: none;
    }
    
    `
const Hamburger = styled.div`
    display: none;
    font-size: 32px;
    /* margin-right: 20px; */
    @media (max-width:767px){
        display: block;
    
    }
    
`
const NavIcons = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 100px;
    /* border: 1px solid red; */
    @media (max-width:767px){
        display: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: white;
    }
    
`