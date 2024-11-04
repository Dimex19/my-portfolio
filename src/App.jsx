import About from './components/About'
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
    </>
  )
}
export default App