import React from "react";
import { useNavigate } from "react-router-dom";

import ButtonComponentMedium from "../../components/shared/buttons/ButtonComponentMedium";
import BackGround from "../../assets/images/BackGround.jpg";
import ButtonComponentSmall from "../../components/shared/buttons/ButtonComponentSmall";
import EducationCategoriesSvg from "../../assets/svg/EducationCategoriesSvg";

const EducationCategories = () => {
  const buttonsCss = "w-[306px] h-[81px] mt-6 mx-4 cursor-pointer ";
  const buttonNames = [
    "Ana Sayfa",
    "Hakkımızda",
    "Eğitimler",
    "Takvim",
    "İletişim",
  ];

  let navigate = useNavigate();
  function changePage(page = "") {
    navigate(`/${page} `);
  }

  const buttons = buttonNames.map(function (each, index) {
    return each === "Eğitimler" ? (
      <li
        className={`${buttonsCss}`}
        onClick={() => changePage("egitimler")}
        key={index}
      >
        <ButtonComponentMedium name={each} />
      </li>
    ) : (
      <li className={`${buttonsCss}`} key={index}>
        <a
          href="https://softverseacademy.com/anasayfa"
          target={"_blank"}
          rel="noreferrer"
        >
          <ButtonComponentMedium name={each} />
        </a>
      </li>
    );
  });
  return (
    <div
      className="page-wrapper w-full  min-h-screen box-border"
      id="educationCategories"
    >
      <div className="page-content">
        <div className="categories relative w-full h-screen">
          <img
            src={BackGround}
            alt="BackgroundImage"
            className="z-0 absolute h-full w-full"
          />
          <ul className="flex w-full font-bold text-xl absolute justify-center items-center h-36 z-20">
            {buttons}
          </ul>
        </div>

        <EducationCategoriesSvg name="Temel Eğitim Bileşenleri" />

        <div className=" categories h-screen w-full absolute top-0 my-auto box-border">
          <div className="top-2/4 left-52 flex absolute -translate-y-5">
            <ButtonComponentSmall name="Kodlama" />
          </div>
          <div className="top-2/4 left-1/2 -translate-x-24 -translate-y-5 flex absolute">
            <ButtonComponentSmall name="Tasarım" />
          </div>
          <div className="top-2/4 left-3/4 translate-x-16 flex absolute -translate-y-5">
            <ButtonComponentSmall name="Elektronik" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCategories;
