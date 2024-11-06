import React from 'react'
import styled from 'styled-components'
import Kuda from '../assets/images/kuda.png'
import Country from '../assets/images/country.png'
import Deserts from '../assets/images/deserts.png'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <Wrapper id='projects' >
        <h2>Projects</h2>
        <p>Things I've built so far</p>
        <CardsContainer>
            <ProjectCard image={Kuda} title="Kuda Clone" para="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" stack="HTML, CSS, Javascript" vercel="https://kuda-clone-nu.vercel.app/" github='https://github.com/Dimex19/kuda-clone'/>
            <ProjectCard image={Country} title="Country Info" para="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" stack="HTML, CSS, Javascript" vercel="https://country-sage.vercel.app/" github="https://github.com/Dimex19/country" />
            <ProjectCard image={Deserts} title="Deserts" para="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" stack="HTML, CSS, Javascript" vercel="https://product-cart-eta-two.vercel.app/" github="https://github.com/Dimex19/productCart"/>
        </CardsContainer>
    </Wrapper>
)
}

export default Projects

const Wrapper = styled.div`
    h2 {
        text-align: center;
        margin: 20px auto;
        margin-bottom: 10px;
        width: 200px;
        /* border: 1px solid red; */
        /* color: #AAAAAA; */
        /* background: linear-gradient(95.28deg, #9C83FF 57.09%, #FF9051 87.74%); */
        background: linear-gradient(to right,#9C83FF, #f32170, 
            #ff6b08, #cf23cf, #9C83FF);  
        background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent; 
        -webkit-background-clip: text;

    }
    p {
        font-weight: 600;
        color: #AAAAAA;
        margin-bottom: 20px;
        text-align: center;
    }
`
const CardsContainer = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 450px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* border: 1px solid red; */
        margin-left: auto;
        margin-right: auto;
        /* margin: 0px auto 20px auto; */
    }



`