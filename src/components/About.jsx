import React from 'react'
import styled from 'styled-components'
import MyPhoto from '../assets/images/my-photo.jpeg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const About = () => {
  return (
    <div id='about'>
        <Wrapper>
            <h2>About Me</h2>

            <Container>
                <AboutText>
                    <AboutPara>
                        <p id='first'>Hi, I’m Abolaji Azeez Oladimeji, a recent graduate in Electrical and Electronics Engineering with a strong focus on control engineering and a passion for software development. My journey has taken me from working on automation and control systems to diving deep into data science, machine learning, and full-stack web development..</p>
                        <p>I thrive on bringing ideas to life through code, whether it's crafting responsive websites, designing interactive user interfaces, or building robust applications that solve real-world problems. My portfolio showcases projects that highlight my skills in API integration, e-commerce functionality, and modern, user-centered design. I’m eager to meet and network with a lot of people, so feel free to connect with me!</p>
                    </AboutPara>
                    <AboutIcons>
                        <a href="https://github.com/Dimex19" target='_blank'><FaGithub /></a> 
                        <a href="https://www.linkedin.com/in/azeezabolaji06/" target='_blank'><FaLinkedin /></a>
                        <a href="https://x.com/Oladimzz" target='_blank'><BsTwitterX /></a> 
                    </AboutIcons>
                </AboutText>
                <img src={MyPhoto} alt="" />
            </Container>
        </Wrapper>
    </div>
)
}

export default About

const Wrapper = styled.div`
    margin: 50px 30px;
    /* border: 1px solid red; */

    @media (max-width: 450px) {
        margin: 0px 10px;
    }

    img {
        max-width: 400px;
        height: 300px;
        border-radius: 10px;

        @media (max-width: 450px) {
            max-width: 320px;
            margin-bottom: 30px;
        }
    }
    h2 {
        margin-bottom: 20px;
        width: 200px;
        /* color: #AAAAAA; */
        /* background: linear-gradient(95.28deg, #9C83FF 57.09%, #FF9051 87.74%); */
        background: linear-gradient(to right,#9C83FF, #f32170, 
            #ff6b08, #cf23cf, #9C83FF); 
        background-clip: inherit;
        -webkit-text-fill-color: transparent; 
        -webkit-background-clip: text;

    }
`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* align-items: center; */
    /* border: 1px solid red; */

    @media (max-width: 767px) {
        flex-direction: column-reverse;

    }
`
const AboutText = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1095px) {
        max-width: 500px;
    }
    @media (max-width: 975px) {
        max-width: 400px;
    }
    @media (max-width: 920px) {
        max-width: 350px;
    }
    @media (max-width: 830px) {
        max-width: 300px;
    }
    @media (max-width: 770px) {
        max-width: 90vw;
    }
    #first {
        margin-bottom: 20px;
    }
    p {
        font-weight: 600;
        color: #AAAAAA;
        margin-bottom: 20px;
    }

`
const AboutPara = styled.div`

`

const AboutIcons = styled.div`
    display: flex;
    max-width: 200px;
    justify-content: space-between;
    font-size: 30px;
    /* margin: 20px; */
    @media (max-width: 450px) {
        max-width: 100px;
        font-size: 25px;
    }
    a {
        text-decoration: none;
        cursor: pointer;
        color: white;
    }
`