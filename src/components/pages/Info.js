import React from "react";
import BackGround from "../../assets/images/BackGround.jpg";
import InfoPageDivider from "../../assets/svg/InfoPageDivider";
import InfoPageImage from "../../assets/images/InfoPageImage.png";

const Info = () => {
  return (
    <section>
      <img src={BackGround} alt="BackGround" />
      <div className="container bottom-0">
        <div className="">
          <InfoPageDivider />
        </div>
        <div className="font-regular text-6xl -top-8 left-[716px] absolute">
          BİZ KİMİZ ?
        </div>
        <div className="absolute top-24 left-24 w-full text-center">
          <div className="text-4xl mx-auto w-9/12 ">
            Bilgi işlemsel düşünme, problem çözme becerilerini geliştirme ve 21
            yy becerilerini{" "}
            <span className="text-purple">
              öğrencilerine kazandırmayı hedefleyen{" "}
            </span>{" "}
            genç , dinamik, eğitim kuruluşuyuz.
          </div>
        </div>
        <div className="absolute bottom-0 left-[400px] mx-auto ">
          <img src={InfoPageImage} alt={"InfoPageImage"} />
        </div>
      </div>
    </section>
  );
};

export default Info;
