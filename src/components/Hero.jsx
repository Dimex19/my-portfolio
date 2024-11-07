import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import HeroImage from '../assets/images/Me.png'

const Hero = () => {
    const btnStyle = {
        backgroundColor: "#D4B134",
        width: "200px",
        height: "50px",
        borderRadius: "10px",
        border: "0px",
        marginTop: "30px",
        fontWeight: "500",
        fontSize: "16px",
        cursor: "pointer",
        color: "black"
    }

    return (
        <>
            <Wrapper>
                <HeroText>
                    <h1 id='myName'>AZEEZ ABOLAJI</h1>
                    <hr />
                    <h1 id='stack'>FULLSTACK ENGINEER</h1>
                    <p>Passionate Software Engineer with a focus on React Native development,
                    dedicated to crafting elegant and user-friendly mobile applications.</p>
                    <a href="#contact"><Button text="Contact me" style={btnStyle}/></a>
                </HeroText>
                <img src={HeroImage} alt="" />
            </Wrapper>
        </>
)
}

export default Hero

const Wrapper = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #AAAAAA;
    /* color: white; */
    /* margin-top: 50px; */
    margin-left: 30px;
    margin-right: 30px;
    padding: 10px;
    /* border: 1px solid red; */
    /* color: #3f3c3b; */
    /* min-height: calc(100vh - 0px); */
    img {
        height: 400px;
        margin: auto;
        /* border: 1px solid red; */
        @media (max-width: 875px) {
            display: none;
        }
        @media (max-width: 967px) {
            height: 320px;
        }
    }
    @media (max-width: 450px) {
        flex-wrap: wrap;
        margin-left: 10px;
        margin-right: 10px;
        padding: 0px;
        height: calc(100vh - 50px);

    }
`
const HeroText = styled.div`

    #stack {
        font-family: "Bebas Neue", sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 86px;
        
        @media (max-width: 1030px){
            line-height: 75px;
            font-size: 74px;
        }
    }
    #myName {
        margin-top: 5px;
        font-family: "Bebas Neue", sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 86px;
        
        @media (max-width: 954px){
            line-height: 85px;
            font-size: 74px;
        }
        text-decoration: none;
    }
    p {
        font-weight: 600;
        }
`