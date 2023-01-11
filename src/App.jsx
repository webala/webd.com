/** @format */


import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


function App() {

   return (
      <div className="App">
         <Navbar />
         <Hero />
         <About />
         <Projects />
         <Contact />
      </div>
   );
}

export default App;
