import './NavbarKi.css'
import Project from './Project';
import Contact from './assets/Contact';
import Skills from './assets/Skill';
import Education from './assets/Education';
import Home from './assets/Home';
import About from './assets/About';
import HeaderNavbar from './assets/HeaderNavbar'
import Collaborate from './assets/Collaborate';
import Footer from './Footer';
function App() {
    let mainButtons=["Home" , "About" , "Education" , "Skills" , "Projects" , "Contact" , "Resume."];

  return (
    <>
   <HeaderNavbar buttons={mainButtons} />
   <Home></Home>
   <About></About>
   <Education></Education>
   <Skills></Skills>
   <Project></Project>
   <Contact></Contact>
   <Collaborate></Collaborate>
   <Footer></Footer>
   
    </>
  )
}

export default App
