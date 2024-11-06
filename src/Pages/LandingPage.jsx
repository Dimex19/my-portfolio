import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'
const LandingPage = () => {
  return (
    <>
        <Header />
        <Hero/>
        <About />
        <TechStack/>
        <Projects/>
        <Contact/>
    </>
  )
}

export default LandingPage