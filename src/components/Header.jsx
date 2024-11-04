import styled from 'styled-components'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Header = ()=>{
    return (
        <>
            <Wrapper>
                <h2>Holla!</h2>
                <Nav>
                    <NavLinks>
                        <a href="">About Me</a>
                        <a href="">Projects</a>
                        <a href="">Contact Me</a>
                    </NavLinks>
                    
                </Nav>
                <NavIcons>
                        <FaGithub />
                        <FaLinkedin />
                        <BsTwitterX />

                </NavIcons>
                <Hamburger >
                    <GiHamburgerMenu />
                </Hamburger>
            </Wrapper>
        </>
    )
}
export default Header

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 30px;
    height: 50px;
    padding: 20px;
    /* border: 1px solid red; */
    background-color: #3f3c3b;

    @media (max-width:450px){
        width: 100vw;
        margin: 0px;
        padding: 10px;
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
    @media (max-width:450px){
        display: none;
    }
    
    `
const Hamburger = styled.div`
    display: none;
    font-size: 32px;
    /* margin-right: 20px; */
    @media (max-width:450px){
        display: block;
    
    }
    
`
const NavIcons = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 100px;
    /* border: 1px solid red; */
    @media (max-width:450px){
        display: none;
    }
    
`