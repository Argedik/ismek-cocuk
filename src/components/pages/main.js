import React from "react";
import FloatingButtons from "../shared/FloatingButtons";
import About from "./About";
import EducationForKids from "./EducationForKids";
import Educations from "./Educations";
import Home from "./Home";
import Info from "./Info";

const Main = () => {
  return (
    <>
      <FloatingButtons />
      <Home />
      <Educations />
      <EducationForKids />
      <Info />
      <About />
    </>
  );
};

export default Main;

// floating nav buttons
// tanımlanan constants'lar aynı sayfa içinde classname de kullanılamıyor
// pixels
