import React from "react";

const ButtonComponentLarge = () => {
  return (
    <svg
      width="496"
      height="81"
      viewBox="0 0 496 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <rect width="496" height="81" rx="35" fill="url(#paint0_linear_79_848)" />
      <defs>
        <linearGradient
          id="paint0_linear_79_848"
          x1="248"
          y1="0"
          x2="248"
          y2="81"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7426C3" />
          <stop offset="1" stopColor="#CE4296" />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        className="font-asap font-regular text-4xl"
      >
        Eğitimler için Tıklayınız
      </text>
    </svg>
  );
};

export default ButtonComponentLarge;
