import React from 'react'
import styled from 'styled-components'
const ProjectCard = ({image, title, para, stack, vercel, github}) => {
  return (
    <>
        <ProjectWrapper>
            <img src={image} alt="" />
            <CardTexts>
                <h3>{title}</h3>
                <p id='testpara'>{para}</p>
                <p id='testpara'>{stack}</p>
                <CardLinks>
                    <a href={vercel} target='_blank'>Live Preview</a>
                    <a href={github} target='_blank'>View Code</a>
                </CardLinks>
            </CardTexts>
        </ProjectWrapper>
    </>
  )
}

export default ProjectCard

const ProjectWrapper = styled.div`
    width: 333px;
    height: 537px;
    margin-bottom: 30px;
    background-color: #1B1B1D;
    /* border: 1px solid red; */


    img {
        width: 333px;
        height: 200px;
    }
    
`
const CardTexts = styled.div`
    padding: 20px;
    a {
        color: white;
    }
    #testpara {
        font-weight: 600;
        color: #AAAAAA;
        margin-bottom: 20px;
        text-align: left;
    }
`
const CardLinks = styled.div`
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
`