import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";
import Program from "./components/Programs/Program";
import Title from "./components/Title/Title";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="conatiner">
        <Program />
      </div>
      <Hero />
      <div className="conatiner">
        <Title title="what we offer" subtitle="our Program" />
        <Program />
      </div>
      <div className="container">
        <About />
      </div>
    </div>
  );
};

export default App;
