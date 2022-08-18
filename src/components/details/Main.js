import React from "react";
import About from "../pages/About";
import CodingPage from "./CodingPage";
import DesignPage from "./DesignPage";
import EducationCategories from "./EducationCategories";
import ElectronicPage from "./ElectronicPage";

const DetailsMain = () => {
  return (
    <>
      <EducationCategories />
      <CodingPage />
      <DesignPage />
      <ElectronicPage />
      <About />
    </>
  );
};

export default DetailsMain;
