import React from "react";
import ButtonComponentSmall from "./ButtonComponentSmall";

const CodingDetails = ({ ...props }) => {
  // const constants = {
  //   leftSubTitle: "324px",
  //   rightSubTitle: "314px",
  // };

  return (
    <ul>
      {/* Başlık */}
      <li className="absolute top-1/4 right-1/4 translate-x-52 -translate-y-[88px]">
        <ButtonComponentSmall name={props.title} cursor="none" text="32px" />
      </li>
      {/* Sol Bölge */}
      <li
        className={`absolute top-1/4 right-2/4 translate-x-[324px] -translate-y-7`}
      >
        <ButtonComponentSmall
          name={props.leftSubTitle}
          cursor="none"
          text="32px"
        />
      </li>
      <li className="absolute top-1/4 right-2/4 translate-x-48 translate-y-20">
        <ButtonComponentSmall
          name={props.leftFirstChild}
          cursor="none"
          text="32px"
        />
      </li>
      <li className="absolute top-2/4 right-1/4 -translate-x-48 -translate-y-12 text-[32px] font-semibold w-44 block leading-9">
        <div className="mb-4">{props.leftFirstDescription?.[0]}</div>
        <div>{props.leftFirstDescription?.[1]}</div>
      </li>
      <li className="absolute top-1/4 right-1/4 translate-x-16 translate-y-20">
        <ButtonComponentSmall
          name={props.leftSecondChild}
          cursor="none"
          text="32px"
        />
      </li>
      <li className="absolute top-2/4 right-1/4 translate-x-16 -translate-y-12 text-[32px] font-semibold w-44 block bg-gradient-to-r text-transparent bg-clip-text leading-9 from-[#CC2B5E] to-[#753A88]">
        <div className="mb-4">{props.leftSecondDescription}</div>
      </li>
      {/* Sağ Bölge */}
      <li
        className={`absolute top-1/4 right-[217px] translate-x-[314px] -translate-y-7`}
      >
        <ButtonComponentSmall
          name={props.rightSubTitle}
          cursor="none"
          text="32px"
        />
      </li>
      <li className="absolute top-1/4 right-0 -translate-x-6 translate-y-20">
        <ButtonComponentSmall
          name={props.rightFirstChild}
          cursor="none"
          text="32px"
        />
      </li>
      <li className="absolute top-2/4 right-0 -translate-x-5 -translate-y-12 text-[32px] font-semibold w-44 block leading-9">
        <div className="mb-4">{props.rightFirstDescription?.[0]}</div>
        <div>{props.rightFirstDescription?.[1]}</div>
      </li>
      <li className="absolute top-1/4 right-0 translate-x-[225px] translate-y-20">
        <ButtonComponentSmall
          name={props.rightSecondChild}
          cursor="none"
          text="32px"
        />
      </li>
      <li className="absolute top-2/4 right-0 translate-x-60 -translate-y-12 text-[32px] font-semibold w-44 block bg-gradient-to-r text-transparent bg-clip-text leading-9 from-[#CC2B5E] to-[#753A88]">
        <div className="mb-4">{props.rightSecondDescription}</div>
      </li>
    </ul>
  );
};

export default CodingDetails;
