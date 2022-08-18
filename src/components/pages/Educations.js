import React from "react";
import BackGround from "../../assets/images/BackGround.jpg";
import ButtonComponentLarge from "../../assets/svg/ButtonComponentLarge";
import EducationPageImage from "../../assets/images/EducationPageImage.png";
const Educations = () => {
  return (
    <>
      <section>
        <img src={BackGround} alt="BackGround" />
        <div className="container  ">
          <div className="title">
            <div className="info text-black font-asap font-regular text-8xl">
              Çocuğunuzun
              <span className="font-bold"> Geleceğini</span>
            </div>
          </div>
          <div className="sub-title">
            <div className="info text-purple font-asap font-bold text-7xl ">
              Eğitimlerle Destekliyoruz
            </div>
          </div>
          <div className="about-educations my-3">
            <ButtonComponentLarge />
          </div>
          <div className="categories-list mt-24">
            <ul className="font-regular relative text-black text-3xl">
              <li className="flex items-end">
                <svg
                  width="16"
                  height="47"
                  viewBox="0 0 16 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute justify-center"
                >
                  <line
                    x1="1.5"
                    y1="45.5"
                    x2="1.5"
                    y2="1.5"
                    stroke="url(#paint0_linear_0_1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="14.5"
                    y1="45.5"
                    x2="14.5"
                    y2="1.5"
                    stroke="url(#paint1_linear_0_1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_1"
                      x1="3"
                      y1="23.5"
                      x2="4"
                      y2="23.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#CB4198" />
                      <stop offset="1" stopColor="#832BBD" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_0_1"
                      x1="16"
                      y1="23.5"
                      x2="17"
                      y2="23.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#CB4198" />
                      <stop offset="1" stopColor="#832BBD" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="ml-7 text-5xl font-light">
                  Temel Eğitim Bileşenleri
                </div>
              </li>
              <li>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute"
                >
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="8.5"
                    fill="url(#paint0_linear_79_856)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_79_856"
                      x1="8.5"
                      y1="0"
                      x2="8.5"
                      y2="17"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#802ABE" />
                      <stop offset="1" stopColor="#C33F9C" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="ml-7">Robotik Kodlama</div>
              </li>
              <li>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute"
                >
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="8.5"
                    fill="url(#paint0_linear_79_856)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_79_856"
                      x1="8.5"
                      y1="0"
                      x2="8.5"
                      y2="17"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#802ABE" />
                      <stop offset="1" stopColor="#C33F9C" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="ml-7">3D Tasarım</div>
              </li>
              <li>
                {" "}
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute"
                >
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="8.5"
                    fill="url(#paint0_linear_79_856)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_79_856"
                      x1="8.5"
                      y1="0"
                      x2="8.5"
                      y2="17"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#802ABE" />
                      <stop offset="1" stopColor="#C33F9C" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="ml-7">Elektirik / Elektronik</div>
              </li>
            </ul>
          </div>
          <div className="absolute -right-48 -bottom-44">
            <img src={EducationPageImage} alt="BackGround" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Educations;
