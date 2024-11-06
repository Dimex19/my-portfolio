import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Button from './Button';
import { useState } from 'react';
const Contact = () => {

    const btnStyle = {
        backgroundColor: "#D4B134",
        width: "150px",
        height: "40px",
        borderRadius: "10px",
        border: "0px",
        marginTop: "30px",
        fontWeight: "500",
        fontSize: "16px",
        cursor: "pointer",
        color: "black"
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    // const [inputs, setInputs] = useState({})

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({...values, [name]: value}))
    //   }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was ${name}, email: ${email}, subject: ${subject} and message: ${message}`)
        }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents form submission
            }
        };
    
  return (
    <>
        <Wrapper>
            <ContactText>
                <h2>LET'S CONNECT</h2>
                <p>Say hello @azeezabolaji06@gmail.com</p>
                <p>For more info, here's my <a href="">resume</a></p>
                <ContactIcons>
                        <a href="https://github.com/Dimex19"><FaGithub /></a> 
                        <a href="https://www.linkedin.com/in/azeezabolaji06/"><FaLinkedin /></a>
                        <a href="https://x.com/Oladimzz"><BsTwitterX /></a> 

                </ContactIcons>
            </ContactText>
            <ContactForm>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Name: <input type="text" name='username' value={name} onChange={(e)=> setName(e.target.value)} onKeyDown={handleKeyDown} /></label>
                    <label htmlFor="">Email: <input type="email" name='email' value={email} onChange={(e)=> setEmail(e.target.value)} onKeyDown={handleKeyDown} /></label>
                    <label htmlFor="">Subject: <input type="text" name='subject' value={subject} onChange={(e)=> setSubject(e.target.value)} onKeyDown={handleKeyDown} /></label>
                    <label htmlFor="">Message: <input type="textarea"name='message' id='textarea' value={message} onChange={(e)=> setMessage(e.target.value)} onKeyDown={handleKeyDown} /></label>
                    <Button text="SUBMIT" style={btnStyle} />
                    {/* <input type="submit" /> */}
                </form>
            </ContactForm>
        </Wrapper>
    </>
  )
}

export default Contact

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    margin-bottom: 50px;
    
    @media (max-width: 450px) {
        flex-direction: column;
        align-items: center;
    }
    /* border: 1px solid red; */
`
const ContactText = styled.div`
    width: 400px;
    height: 451px;
    color: #C7C7C7;
    h2 {
        font-size: 42px;
    }
    a {
        color: white;
    }
`
const ContactIcons = styled.div`
    width: 150px;
    font-size: 30px;
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
`
const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */

    label {
        display: flex;
        flex-direction: column;
        color: #C7C7C7;
        margin-bottom: 20px;
        gap: 10px;
        input {
            width: 400px;
            height: 40px;
            background-color: #1A1A1A;
            border: 1px solid #D4B134;
            border-radius: 5px;
            color: #C7C7C7;
            padding: 10px;


            @media (max-width: 450px) {
                width: 350px;
            }
            
        }
        #textarea {
                height: 100px;
            }
    }
`