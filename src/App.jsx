import '../src/App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = ()=> {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />

        </Routes>
      </BrowserRouter>

      <Hero/>
      <About/>
      <TechStack/>
      <Projects/>
      <Contact/>
    </>
  )
}
export default App