import React from "react";
import DetailsPageSvg from "../../assets/svg/DetailsPageSvg";
import CodingPageImage from "../../assets/images/CodingPageImage.png";
import BackGround from "../../assets/images/BackGround.jpg";
const CodingPage = () => {
  const contents = {
    title: "KODLAMA",
    leftSubTitle: "7 - 10 yaş",
    rightSubTitle: "11 - 14 yaş",
    leftFirstChild: "Kodlama",
    leftSecondChild: "Robotik",
    rightFirstChild: "Kodlama",
    rightSecondChild: "Robotik",
    leftFirstDescription: ["7-8 Yaş Scratch Jr.", "8-10 Yaş Scratch"],
    leftSecondDescription: "Lego Education Spike Prime Seti",
    rightFirstDescription: ["7-8 Yaş Scratch Jr.", "8-10 Yaş Scratch Jr."],
    rightSecondDescription: "Lego Education Spike Prime Seti",
    image: CodingPageImage,
  };
  return (
    <section className="relative" id="coding">
      <img src={BackGround} alt="BackGround" />
      <div className="page-wrapper w-full min-h-screen box-border absolute top-0 z-0">
        <div className="page-content">
          <div className="container top-0">
            <DetailsPageSvg {...contents} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingPage;
