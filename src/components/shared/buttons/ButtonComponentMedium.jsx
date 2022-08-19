import React from "react";

const ButtonComponentMedium = (props) => {
  let name = props.name;

  return (
    <svg
      width="314"
      height="89"
      viewBox="0 0 314 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_216_138)">
        <rect
          x="4"
          width="306"
          height="81"
          rx="35"
          fill="url(#paint0_linear_216_138)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_216_138"
          x="0"
          y="0"
          width="314"
          height="89"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_216_138"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_216_138"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_216_138"
          x1="157"
          y1="0"
          x2="157"
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
        className="font-bold text-2xl"
      >
        {name}
      </text>
    </svg>
  );
};

export default ButtonComponentMedium;
