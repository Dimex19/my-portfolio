import React from 'react'
import styled from 'styled-components'
import MyPhoto from '../assets/images/my-photo.jpeg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const About = () => {
  return (
    <>
        <Wrapper>
            <h2>About Me</h2>

            <Container>
                <AboutText>
                    <AboutPara>
                        <p id='first'>Hi there! My name is Abolaji Azeez Oladimeji. I am a full-stack engineer from Lagos, Nigeria. The idea that I could sit behind a computer and create something that can impact millions of people endeared me to this field. I enjoy building apps that not only work well but also look good.</p>
                        <p>I also write technical articles and have a great deal of interest in building technologies for other developers to use. I’m eager to meet and network with a lot of people, so feel free to connect with me!</p>
                    </AboutPara>
                    <AboutIcons>
                        <FaGithub />
                        <FaLinkedin />
                        <BsTwitterX />
                    </AboutIcons>
                </AboutText>
                <img src={MyPhoto} alt="" />
            </Container>
        </Wrapper>
    </>
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
            max-width: 380px;
            margin-bottom: 30px;
        }
    }
    h2 {
        margin-bottom: 20px;
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
    justify-content: space-between;
    /* align-items: center; */
    /* border: 1px solid red; */

    @media (max-width: 450px) {
        flex-direction: column-reverse;

    }
`
const AboutText = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
`