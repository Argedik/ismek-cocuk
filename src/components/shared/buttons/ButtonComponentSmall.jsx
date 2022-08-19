import React from "react";

const ButtonComponentSmall = (props) => {
  const name = props.name;
  const cursor = props.cursor;
  const text = props.text;
  /*      */
  return (
    <svg
      width="187"
      height="71"
      viewBox="0 0 187 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cursor === "none" ? "none" : "cursor-pointer"}
    >
      <rect
        width="187"
        height="71"
        rx="13"
        fill="url(#paint0_linear_82_6736)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_82_6736"
          x1="93.5"
          y1="0"
          x2="93.5"
          y2="71"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#882EBD" />
          <stop offset="1" stopColor="#E44F97" />
          <stop offset="1" stopColor="#DC42CD" />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        className={`font-asap font-medium text-[${text ? text : "40px"}]`}
      >
        {name}
      </text>
    </svg>
  );
};

export default ButtonComponentSmall;
