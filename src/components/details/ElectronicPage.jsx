import React from "react";
import BackGround from "../../assets/images/BackGround.jpg";
import DetailsPageSvg from "../../assets/svg/DetailsPageSvg";
import ElectronicPageImage from "../../assets/images/ElectronicPage.png";

const ElectronicPage = () => {
  const contents = {
    title: "ELEKTRONİK",
    leftSubTitle: "7 - 10 yaş",
    rightSubTitle: "11 - 14 yaş",
    leftFirstChild: "Maker",
    leftSecondChild: "Arduino",
    rightFirstChild: "Maker",
    rightSecondChild: "Arduino",
    leftFirstDescription: "Arduino ile proje geliştirme",
    leftSecondDescription: [
      "Basic seviye",
      "Giriş düzeyde temel arduino projeleri",
    ],
    rightFirstDescription: "Arduino ile proje geliştirme",
    rightSecondDescription: [
      "Orta Seviye Tinkercad İle Devre Tasarımı",
      "Arduino Projeleri",
    ],
    image: ElectronicPageImage,
  };
  return (
    <section className="relative" id="electronic">
      <img src={BackGround} alt="BackGround" />
      <div className="page-wrapper w-full  h-full box-border">
        <div className="page-content">
          <div className="container top-0">
            <DetailsPageSvg {...contents} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectronicPage;
