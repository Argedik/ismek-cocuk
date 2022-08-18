import React from "react";

const EducationCategoriesSvg = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen box-border">
      {/* Temel Eğitim Bileşenleri Butonu */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-16">
        <svg
          width="441"
          height="83"
          viewBox="0 0 441 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.9951 1.5H437.995C438.824 1.5 439.495 2.17157 439.495 3V53C439.495 68.7401 426.735 81.5 410.995 81.5H2.49512V30C2.49512 14.2599 15.255 1.5 30.9951 1.5Z"
            stroke="url(#paint0_linear_81_4365)"
            strokeWidth="3"
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="black"
            className="text-4xl font-semibold"
          >
            {props.name}
          </text>
          <defs>
            <linearGradient
              id="paint0_linear_81_4365"
              x1="220.995"
              y1="0"
              x2="220.995"
              y2="83"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#872DBD" />
              <stop offset="1" stopColor="#B33BA6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Ortadaki 3 butonu gösteren çizgiler */}
      <div className="absolute left-1/4 top-2/4 -translate-x-44 -translate-y-24">
        <svg
          width="1300"
          height="78"
          viewBox="0 0 1300 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_81_4359)">
            <path
              d="M7.49512 69.5V2.5H651.995M651.995 2.5H1293V69.5M651.995 2.5V69.5"
              stroke="url(#paint0_linear_81_4359)"
              strokeWidth="5"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_81_4359"
              x="0.995117"
              y="0"
              width="1298.5"
              height="77.5"
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
                result="effect1_dropShadow_81_4359"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_81_4359"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_81_4359"
              x1="650.245"
              y1="2.5"
              x2="650.245"
              y2="69.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#822BBF" />
              <stop offset="1" stopColor="#B13AA8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Alt metinlerin çizgileri */}
      <div className="absolute left-[150px] top-2/3 -translate-y-11">
        <svg
          width="1310"
          height="264"
          viewBox="0 0 1310 264"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2.49512"
            y1="1.5"
            x2="2.49511"
            y2="262.5"
            stroke="url(#paint0_linear_216_140)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="681.495"
            y1="1.5"
            x2="681.495"
            y2="172.5"
            stroke="url(#paint1_linear_216_140)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="1308.5"
            y1="1.5"
            x2="1308.5"
            y2="199.5"
            stroke="url(#paint2_linear_216_140)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_216_140"
              x1="0.995111"
              y1="132"
              x2="-0.00488858"
              y2="132"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B53BA5" />
              <stop offset="1" stopColor="#872DBD" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_216_140"
              x1="679.995"
              y1="87"
              x2="678.995"
              y2="87"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B53BA5" />
              <stop offset="1" stopColor="#872DBD" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_216_140"
              x1="1307"
              y1="100.5"
              x2="1306"
              y2="100.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B53BA5" />
              <stop offset="1" stopColor="#872DBD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Alt kısımdaki yazılar */}
      <div className="absolute left-[150px] top-2/3 -translate-y-11">
        <ul className="flex-col w-[310px] ">
          <li className="-my-1 ">
            <div className="left-[167px] top-2/3 text-xl">
              Temel algoritma mantığını çeşitli kodlama uygulamalarını
              kullanarak öğrenir.
            </div>
          </li>
          <li className="my-9 w-[310px] text-xl">
            <div className="left-[167px] top-2/3">
              İstenen hedefe kod bloklarını doğru sıralayarak ulaşır.
            </div>
          </li>
          <li className="my-0 w-[310px] text-xl">
            <div className="left-[167px] top-2/3">
              Scratch Jr. ve Scratch programları ile animasyon ve oyunlar
              geliştirir.
            </div>
          </li>
        </ul>
      </div>
      <div className="absolute left-1/3 top-2/3 -translate-y-11 translate-x-[189px]">
        <ul className="flex-col w-[310px] ">
          <li className="-my-1 ">
            <div className="left-[167px] top-2/3 text-xl">
              Hayalgücünü geliştirir.
            </div>
          </li>
          <li className="my-9 w-[310px] text-xl">
            <div className="left-[167px] top-2/3">
              Sosyal gelişim becerisi kazanır.
            </div>
          </li>
          <li className="my-0 w-[310px] text-xl">
            <div className="left-[167px] top-2/3">
              Autodraw, Tincercad programları ile 2d ve 3d tasarım geliştirir.
            </div>
          </li>
        </ul>
      </div>
      <div className="absolute left-2/3 top-2/3 -translate-y-11 translate-x-44">
        <ul className="flex-col w-[310px] ">
          <li className="-my-1 ">
            <div className="left-[167px] top-2/3 text-xl">
              Bir devrenin çalışma mantığını temel düzeyde öğrenir.
            </div>
          </li>
          <li className="my-9 w-[310px] text-xl">
            <div className="left-[167px] top-2/3">
              Devre elemanlarını tanır.
            </div>
          </li>
          <li className="my-0 w-[310px] text-xl">
            <div className="left-[167px] top-2/3">
              Arduino projeleri geliştirir. (Led yakma, buton kontrolü vb)
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EducationCategoriesSvg;
