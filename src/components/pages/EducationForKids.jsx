import React from "react";
import BackGround from "../../assets/images/BackGround.jpg";
import EdicationForKidsPageImage from "../../assets/images/EdicationForKidsPageImage.png";
import EducationForKidsPageDivider from "../../assets/svg/EducationForKidsPageDivider";
import EducationForKidsPageDots from "../../assets/svg/EducationForKidsPageDots";
const EducationForKids = () => {
  return (
    <>
      <section className="relative" id="educationForKids">
        <img src={BackGround} alt="BackGround" />
        <div className="container bottom-0 flex-row items-end">
          <div className="absolute left-0 -translate-x-12 -translate-y-16">
            <img
              src={EdicationForKidsPageImage}
              alt="EdicationForKidsPageImage"
            />
          </div>
          <div className="title absolute text-5xl top-0 -right-56">
            Eğitim Sürecinin{" "}
            <span className="font-bold ">Öğrenciye Katkıları</span>
            <div className="absolute mt-6">
              <EducationForKidsPageDivider />
            </div>
            <div className="mt-24 flex">
              <div className="">
                <EducationForKidsPageDots />
              </div>
              <ul className="absolute -my-[54px] text-3xl">
                <li>Analitik Düşünme</li>
                <li className="text-purple">Sosyal Öğrenme</li>
                <li>Bilgi İşlemsel Düşünme</li>
                <li className="text-purple">Yaratıcı Düşünme</li>
                <li>Ekip Çalışması</li>
                <li className="text-purple">Eleştirel Düşünme</li>
                <li>Problem Tespit Etme</li>
                <li className="text-purple">Çözüm Üretme ve Problem Çözme</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationForKids;
