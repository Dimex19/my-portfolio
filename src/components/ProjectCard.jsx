import React from 'react'
import styled from 'styled-components'
const ProjectCard = ({image, title, para, stack}) => {
  return (
    <>
        <Wrapper>
            <img src={image} alt="" />
            <CardTexts>
                <h3>{title}</h3>
                <p>{para}</p>
                <p id='stack'>{stack}</p>
                <CardLinks>
                    <a href="">Live Preview</a>
                    <a href="">View Code</a>
                </CardLinks>
            </CardTexts>
        </Wrapper>
    </>
  )
}

export default ProjectCard

const Wrapper = styled.div`
    width: 373px;
    height: 537px;
    /* border: 1px solid red; */
    background-color: #1B1B1D;

    img {
        width: 373px;
        height: 240px;
    }
    a {
        color: white;
    }
    p {
        font-weight: 600;
        color: #AAAAAA;
        margin-bottom: 20px;
    }
`
const CardTexts = styled.div`
    padding: 20px;
`
const CardLinks = styled.div`
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
`