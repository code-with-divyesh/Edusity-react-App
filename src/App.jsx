import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="conatiner">
        <Program />
      </div>
    </div>
  );
};

export default App;
