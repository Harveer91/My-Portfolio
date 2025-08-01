import './App.css'
import './index.css'
import Header from "./Components/Header"
import Button from './Components/Button';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <>
      <main>
        <section className="page-selection" id="Home"></section>
          <Header/>
          <Button/>
          <hr id="line2"></hr>
          <hr id="line"></hr>
        <section className="page-selection" id="About"></section>
          <AboutMe/>
        <section className="page-selection" id="Skills"></section>
        <section className="page-selection" id="Projects"></section>
      </main>
    </>
  );
}

export default App
