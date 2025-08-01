import './App.css'
import './index.css'
import Header from "./Components/Header"
import Button from './Components/Button';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <main>
        <section className="page-section" id="Home">
          <Header/>
          <Button/>
          <hr id="line2"></hr>
          <hr id="line"></hr>
        </section>
        <section className="page-section" id="About">
          <AboutMe/>
        </section>
        <section className="page-section" id="Skills">
          <Skills/>
        </section>
        <section className="page-section" id="Projects">
          <Projects/>
        </section>
      </main>
    </>
  );
}

export default App
