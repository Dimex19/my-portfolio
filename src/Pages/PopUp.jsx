import React from 'react'
import { IoCloseCircle } from "react-icons/io5";

const PopUp = () => {
  return (
    <>
        <IoCloseCircle />
        <Menu>
            <h2>About Me</h2>
            <h2>Projects</h2>
            <h2>Contact Me</h2>
        </Menu>
    </>
  )
}

export default PopUp

const Menu = styled.div`
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