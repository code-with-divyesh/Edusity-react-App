import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title title="what we offer" subtitle="our Program" />
        <Program />
        <About />
        <Title title="Campus Photos" subtitle=" Gallery" />
        <Campus />
        <Title title="What Student Says" subtitle=" TESTIMONIALS" />
        <Testimonials />
      </div>
    </div>
  );
};

export default App;
