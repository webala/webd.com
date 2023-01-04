/** @format */


import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {

   return (
      <div className="App">
         <Navbar />
         <Hero />
         <About />
         <Projects />
      </div>
   );
}

export default App;
