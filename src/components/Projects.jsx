import React from "react";
import styled from "styled-components";
import Kuda from "../assets/images/kuda.png";
import Country from "../assets/images/country.png";
import Deserts from "../assets/images/deserts.png";
import MT from "../assets/images/mt.png";
import Wastewave from "../assets/images/wastewave.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Wrapper id="projects">
      <h2>Projects</h2>
      <p>Things I've built so far</p>
      <CardsContainer>
        <ProjectCard
          image={Wastewave}
          title="Deserts"
          para="WasteWave is a web application designed to streamline waste management processes by connecting users with efficient waste disposal services. The platform allows users to sign up, log in, and securely manage their profiles while ensuring seamless communication with backend services."
          stack="Javascript, React, NodeJS, ExpressJS, MongoDB"
          vercel="https://wastewave.vercel.app/"
          github="https://github.com/Dimex19/wastewave-vercel"
        />
        <ProjectCard
          image={MT}
          title="Mountain Top NFT"
          para="Mountain Top is a visually dynamic website designed to showcase unique NFTs. It provides an immersive user experience through a sleek interface, integrating seamless navigation and detailed insights into NFT collections. "
          stack="Typescript, Javascript, React, HTML, CSS"
          vercel="https://mountain-top.vercel.app"
          github="https://github.com/Dimex19/MountainTop"
        />
        <ProjectCard
          image={Kuda}
          title="Kuda Clone"
          para="Fully functional clone of the Kuda MFB website, created to demonstrate my ability to accurately replicate modern web design and UI elements. It includes features such as a dynamic layout, interactive components, and responsive design."
          stack="HTML, CSS, Javascript, React"
          vercel="https://kuda-clone-nu.vercel.app/"
          github="https://github.com/Dimex19/kuda-clone"
        />
        <ProjectCard
          image={Country}
          title="Country Info"
          para="Built with a focus on API integration, this app fetches data from an external REST API to display comprehensive information about various countries, including population, region, and capital. "
          stack="HTML, CSS, Javascript"
          vercel="https://country-sage.vercel.app/"
          github="https://github.com/Dimex19/country"
        />
        <ProjectCard
          image={Deserts}
          title="Deserts"
          para="This e-commerce style website was developed for a fictional dessert restaurant, featuring visually appealing product listings, an intuitive cart system, and a smooth user flow."
          stack="HTML, CSS, Javascript"
          vercel="https://product-cart-eta-two.vercel.app/"
          github="https://github.com/Dimex19/productCart"
        />
      </CardsContainer>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  h2 {
    text-align: center;
    margin: 20px auto;
    margin-bottom: 10px;
    width: 200px;
    /* border: 1px solid red; */
    /* color: #AAAAAA; */
    /* background: linear-gradient(95.28deg, #9C83FF 57.09%, #FF9051 87.74%); */
    background: linear-gradient(
      to right,
      #9c83ff,
      #f32170,
      #ff6b08,
      #cf23cf,
      #9c83ff
    );
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  p {
    font-weight: 600;
    color: #aaaaaa;
    margin-bottom: 20px;
    text-align: center;
  }
`;
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
`;
