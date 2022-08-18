import React from "react";
import ButtonComponentSmall from "./ButtonComponentSmall";

const DesignDetails = ({ ...props }) => {
  return (
    <ul>
      {/* Başlık */}
      <li className="absolute top-1/4 right-1/4 translate-x-52 -translate-y-[88px]">
        <ButtonComponentSmall name={props.title} cursor="none" text="32px" />
      </li>
      {/* Sol Bölge */}
      <li className="absolute top-1/4 right-2/4 translate-x-[324px] -translate-y-7">
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
        <div>{props.leftFirstDescription}</div>
      </li>
      <li className="absolute top-1/4 right-1/4 translate-x-16 translate-y-20">
        <ButtonComponentSmall
          name={props.leftSecondChild}
          cursor="none"
          text="32px"
        />
      </li>
      <li className="absolute top-2/4 right-1/4 translate-x-16 -translate-y-12 text-[32px] font-semibold w-44 block">
        <div className="mb-4">{props.leftSecondDescription?.[0]}</div>
        <div>{props.leftSecondDescription?.[1]}</div>
      </li>
      {/* Sağ Bölge */}
      <li className="absolute top-1/4 right-[217px] translate-x-[314px] -translate-y-7">
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
      <li className="absolute top-2/4 right-0 -translate-x-5 -translate-y-12 text-[32px] font-semibold w-44 block leading-9"></li>
      <li className="absolute top-1/4 right-0 translate-x-[225px] translate-y-20">
        <ButtonComponentSmall
          name={props.rightSecondChild}
          cursor="none"
          text="32px"
        />
      </li>
      <li className="absolute top-2/4 right-0 translate-x-60 -translate-y-12 text-[32px] font-semibold w-44 block ">
        <div>{props.rightSecondDescription?.[0]}</div>
        <div className="mt-4">{props.rightSecondDescription?.[1]}</div>
      </li>
    </ul>
  );
};

export default DesignDetails;
