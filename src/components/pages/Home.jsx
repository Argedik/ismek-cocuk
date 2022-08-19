import React from "react";

import ButtonComponentMedium from "../../components/shared/buttons/ButtonComponentMedium";
import BackGround from "../../assets/images/BackGround.jpg";
import KidsCoding from "../../assets/images/KidsCoding.png";
import BgComponent from "../../assets/images/BgComponent.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
    <div className="page-wrapper w-full  min-h-screen box-border" id="home">
      <div className="page-content ">
        <div className="categories relative w-full h-screen">
          <img
            src={BackGround}
            alt="BackgroundImage"
            className="z-0 absolute h-full w-full"
          />
          <ul className="flex w-full font-bold text-xl font-antonio absolute justify-center items-center h-36 z-20">
            {buttons}
          </ul>
          <div className="images justify-end flex items-center relative z-10 w-full h-full ">
            <img
              src={KidsCoding}
              alt="KidsCoding"
              className="z-20 absolute right-80 bottom-8"
            />
            <img
              src={BgComponent}
              alt="BgComponent"
              className="z-10 absolute bottom-0 right-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
