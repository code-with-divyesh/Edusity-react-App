import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, SetPlayState] = useState(false);
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title title="what we offer" subtitle="our Program" />
        <Program />
        <About SetPlayState={SetPlayState} />
        <Title title="Campus Photos" subtitle=" Gallery" />
        <Campus />
        <Title title="What Student Says" subtitle=" TESTIMONIALS" />
        <Testimonials />
        <Title title="Get in Touch" subtitle="Contact Us" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer SetPlayState={SetPlayState} playState={playState} />
    </div>
  );
};

export default App;
