import React from 'react'
import styled from 'styled-components'
import HTML from '../assets/icons/html.svg'
import CSS from '../assets/icons/css.svg'
import Javascript from '../assets/icons/js.svg'
import ReactIcon from '../assets/icons/react.svg'
import NodeJS from '../assets/icons/nodejs.svg'
import NodeJS2 from '../assets/icons/nodejs2.svg'
// import MySQL from '../assets/icons/mysql.svg'
import MySQL from '../assets/icons/mysql2.svg'
import Vector from '../assets/icons/Vector.png'
import Bootstrap from '../assets/icons/bootstrap.svg'
import Tailwind from '../assets/icons/tailwind.svg'
import Git from '../assets/icons/git.svg'
import VSCode from '../assets/icons/vscode.svg'
// import Github from '../assets/icons/github.svg'
import { FaGithub } from "react-icons/fa";

const TechStack = () => {
  return (
    <Wrapper>
        <h2>My Tech Stack</h2>
        <StackIcons>
            <FirstRow>
                <img src={HTML} alt="" />
                <img src={CSS} alt="" />
                <img src={Javascript} alt="" />
                <img src={ReactIcon} alt="" />
                <img src={NodeJS2} alt="" />
                <img src={MySQL} alt="" />
            </FirstRow>
            <SecondRow>
                <img src={Vector} alt="" />
                <img src={Bootstrap} alt="" />
                <img src={Tailwind} alt="" />
                <img src={Git} alt="" />
                <img src={VSCode} alt="" />
                <FaGithub/>
            </SecondRow>
        </StackIcons>
    </Wrapper>  
)
}

export default TechStack

const Wrapper = styled.div`

    @media (max-width: 450px) {
            margin: 50px 10px;
        }
    h2 {
        text-align: center;
        margin-bottom: 20px;
        /* border: 1px solid red; */
        /* color: #AAAAAA; */
        /* background: linear-gradient(95.28deg, #9C83FF 57.09%, #FF9051 87.74%); */
        background: linear-gradient(to right,#4118e4, #f32170, 
            #ff6b08, #cf23cf, #9C83FF); 
        background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent; 
        -webkit-background-clip: text;

    }
    
`
const StackIcons = styled.div`
    
    font-size: 50px;
    @media (max-width: 450px) {
            /* border: 1px solid red; */
            margin: 0px 20px;
        }

    img {
        max-width: 80px;

        @media (max-width: 450px) {
            max-width: 40px;
        }
    }
`
const FirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
    margin: 20px auto;
`
const SecondRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
    margin: 40px auto;
    `