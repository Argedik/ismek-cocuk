import React from "react";
import BackGround from "../../assets/images/BackGround.jpg";
import DetailsPageSvg from "../../assets/svg/DetailsPageSvg";
import DesignPageImage from "../../assets/images/DesignPageImage.png";

const DesignPage = () => {
  const contents = {
    title: "TASARIM",
    leftSubTitle: "7 - 10 yaş",
    rightSubTitle: "11 - 14 yaş",
    leftFirstChild: "2D Tasarım",
    leftSecondChild: "3D Tasarım",
    rightFirstChild: "2D Tasarım",
    rightSecondChild: "3D Tasarım",
    leftFirstDescription: "AutoDraw",
    leftSecondDescription: ["Usecubes", "Tinkercad"],
    rightSecondDescription: ["Tinkercad", "Fusion 360"],
    image: DesignPageImage,
  };
  return (
    <section className="relative" id="design">
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

export default DesignPage;
