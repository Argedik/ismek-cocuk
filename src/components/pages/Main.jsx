import React from "react";
import About from "./About";
import EducationForKids from "./EducationForKids";
import Educations from "./Educations";
import Home from "./Home";
import Info from "./Info";

const Main = () => {
  return (
    <>
      <div>
        <div>
          <Home />
          <Educations />
          <EducationForKids />
          <Info />
          <About />
        </div>
      </div>
    </>
  );
};

export default Main;

// floating nav buttons
// tanımlanan constants'lar aynı sayfa içinde classname de kullanılamıyor
// pixels
