import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { close, open } from "../../../assets/svg";
import { sliderMenu } from "../../../constants";

const FloatingButtons = () => {
  const [toggle, setToggle] = useState(false);
  const path = window.location.pathname;
  let pages = [];
  path === "/" ? (pages = sliderMenu.home) : (pages = sliderMenu.educations);
  return (
    <>
      <nav>
        <img
          src={toggle ? close : open}
          alt=""
          className="w-24 h-24 right-2 top-14 -translate-y-8 fixed z-50 cursor-pointer object-contain lg:hidden "
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "hidden" : "block"
          } right-2 top-1/4 -translate-y-8 fixed flex flex-col z-50 cursor-pointer `}
        >
          {/* Home */}
          <div className="mb-4">
            <Link to={pages[0]} smooth={true}>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="50"
                  fill="url(#paint0_linear_221_178)"
                />
                <g filter="url(#filter0_d_221_178)">
                  <path
                    d="M35.417 52.0585C35.417 51.0494 35.417 50.5449 35.6387 50.1141C35.8603 49.6834 36.2709 49.3901 37.092 48.8036L48.8378 40.4137C49.3992 40.0128 49.6799 39.8123 50.0003 39.8123C50.3208 39.8123 50.6015 40.0128 51.1628 40.4137L62.9086 48.8036C63.7298 49.3901 64.1403 49.6834 64.362 50.1141C64.5837 50.5449 64.5837 51.0494 64.5837 52.0585V66.75C64.5837 67.6929 64.5837 68.1643 64.2908 68.4571C63.9979 68.75 63.5265 68.75 62.5837 68.75H37.417C36.4742 68.75 36.0028 68.75 35.7099 68.4571C35.417 68.1643 35.417 67.6929 35.417 66.75V52.0585Z"
                    stroke="#F4F8FD"
                    strokeWidth="3"
                    shapeRendering="crispEdges"
                  />
                </g>
                <path
                  d="M31.25 49.4699C31.25 49.7367 31.25 49.8702 31.3341 49.9113C31.4182 49.9524 31.5235 49.8705 31.7342 49.7067L48.7721 36.4549C49.362 35.9962 49.6569 35.7668 50 35.7668C50.3431 35.7668 50.638 35.9962 51.2279 36.4549L68.2658 49.7067C68.4765 49.8705 68.5818 49.9524 68.6659 49.9113C68.75 49.8702 68.75 49.7367 68.75 49.4699V46.8948C68.75 46.4144 68.75 46.1742 68.6483 45.9663C68.5466 45.7584 68.357 45.611 67.9779 45.316L51.2279 32.2883C50.638 31.8295 50.3431 31.6001 50 31.6001C49.6569 31.6001 49.362 31.8295 48.7721 32.2883L32.0221 45.316C31.643 45.611 31.4534 45.7584 31.3517 45.9663C31.25 46.1742 31.25 46.4144 31.25 46.8948V49.4699Z"
                  fill="#F4F8FD"
                />
                <path
                  d="M53.2087 56.25H46.792C45.6874 56.25 44.792 57.1454 44.792 58.25V68.6C44.792 68.6828 44.8591 68.75 44.942 68.75H55.0587C55.1415 68.75 55.2087 68.6828 55.2087 68.6V58.25C55.2087 57.1454 54.3132 56.25 53.2087 56.25Z"
                  fill="#F4F8FD"
                />
                <rect
                  x="58.333"
                  y="33.4167"
                  width="4.16667"
                  height="8.33333"
                  rx="0.5"
                  fill="#F4F8FD"
                />
                <defs>
                  <filter
                    id="filter0_d_221_178"
                    x="29.917"
                    y="38.3123"
                    width="40.167"
                    height="39.9379"
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
                      result="effect1_dropShadow_221_178"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_221_178"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_221_178"
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="100"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7426C3" />
                    <stop offset="1" stopColor="#CE4296" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
          {/* Hakkımızda */}
          <div className="mb-4">
            <Link to={pages[1]} smooth={true} offset={50}>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="50"
                  fill="url(#paint0_linear_221_175)"
                />
                <path
                  d="M34.6667 51.0002L27 46.1431L50 34.0002L73 46.1431L65.3333 51.0002"
                  stroke="#F4F8FD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M54 54.0002C54 54.5525 54.4477 55.0002 55 55.0002C55.5523 55.0002 56 54.5525 56 54.0002H54ZM54 36.0002V54.0002H56V36.0002H54Z"
                  fill="#F4F8FD"
                />
                <path
                  d="M35 51.1767V61.5297L50 68.0002L65 61.5297V51.1767C65 51.1767 62.5 46.0002 50 46.0002C37.5 46.0002 35 51.1767 35 51.1767Z"
                  stroke="#F4F8FD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_221_175"
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="100"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7426C3" />
                    <stop offset="1" stopColor="#CE4296" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
          {/* Eğitimler */}
          <div className="mb-4">
            <Link to={pages[2]} smooth={true} offset={10}>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="50"
                  fill="url(#paint0_linear_221_169)"
                />
                <circle
                  cx="50"
                  cy="41.6667"
                  r="5.25"
                  stroke="#F4F8FD"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M53.6468 38.5209C54.063 37.8001 54.6835 37.2189 55.43 36.8507C56.1765 36.4826 57.0154 36.3441 57.8406 36.4528C58.6658 36.5614 59.4403 36.9123 60.0661 37.4611C60.6919 38.0099 61.1409 38.7319 61.3563 39.5359C61.5717 40.3399 61.5439 41.1896 61.2763 41.9778C61.0088 42.766 60.5135 43.4571 59.8532 43.9638C59.1929 44.4705 58.3971 44.77 57.5666 44.8244C56.736 44.8788 55.908 44.6858 55.1872 44.2696"
                  stroke="#F4F8FD"
                  strokeWidth="2"
                />
                <path
                  d="M46.3532 38.5209C45.937 37.8001 45.3165 37.2189 44.57 36.8507C43.8235 36.4826 42.9846 36.3441 42.1594 36.4528C41.3342 36.5614 40.5597 36.9123 39.9339 37.4611C39.3081 38.0099 38.8591 38.7319 38.6437 39.5359C38.4283 40.3399 38.4561 41.1896 38.7237 41.9778C38.9912 42.766 39.4865 43.4571 40.1468 43.9638C40.8071 44.4705 41.6029 44.77 42.4334 44.8244C43.264 44.8788 44.092 44.6858 44.8128 44.2696"
                  stroke="#F4F8FD"
                  strokeWidth="2"
                />
                <path
                  d="M50.0003 51.0417C59.4774 51.0417 61.1161 59.5928 61.3994 62.5499C61.4521 63.0996 61.0109 63.5417 60.4587 63.5417H39.542C38.9897 63.5417 38.5485 63.0996 38.6012 62.5499C38.8846 59.5928 40.5232 51.0417 50.0003 51.0417Z"
                  stroke="#F4F8FD"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M65.4574 58.2878L66.4402 58.1033L66.4402 58.1033L65.4574 58.2878ZM52.2646 51.2208L51.5262 50.5465L50.2853 51.9056L52.1007 52.2073L52.2646 51.2208ZM60.7943 59.3752L59.8337 59.6531L60.0426 60.3752H60.7943V59.3752ZM57.2915 49.9585C59.7467 49.9585 61.387 51.3326 62.5251 53.1524C63.6777 54.9952 64.2328 57.1845 64.4746 58.4723L66.4402 58.1033C66.1809 56.7219 65.5683 54.2465 64.2208 52.0919C62.8589 49.9144 60.6668 47.9585 57.2915 47.9585V49.9585ZM53.0031 51.8951C54.052 50.7463 55.4251 49.9585 57.2915 49.9585V47.9585C54.7693 47.9585 52.8857 49.0575 51.5262 50.5465L53.0031 51.8951ZM52.1007 52.2073C56.9163 53.0075 58.9523 56.6068 59.8337 59.6531L61.7549 59.0973C60.7754 55.7117 58.343 51.2172 52.4286 50.2343L52.1007 52.2073ZM64.5198 58.3752H60.7943V60.3752H64.5198V58.3752ZM64.4746 58.4723C64.4733 58.4656 64.4725 58.4498 64.4779 58.4307C64.483 58.413 64.4911 58.3999 64.4985 58.3914C64.5134 58.3743 64.5258 58.3752 64.5198 58.3752V60.3752C65.6834 60.3752 66.6747 59.3525 66.4402 58.1033L64.4746 58.4723Z"
                  fill="#F4F8FD"
                />
                <path
                  d="M47.7354 51.2208L47.8993 52.2073L49.7147 51.9056L48.4739 50.5465L47.7354 51.2208ZM34.5426 58.2878L33.5598 58.1033L34.5426 58.2878ZM39.2058 59.3752V60.3752H39.9575L40.1664 59.6531L39.2058 59.3752ZM42.7085 49.9585C44.575 49.9585 45.948 50.7463 46.9969 51.8951L48.4739 50.5465C47.1143 49.0575 45.2308 47.9585 42.7085 47.9585V49.9585ZM35.5254 58.4723C35.7672 57.1845 36.3224 54.9952 37.4749 53.1524C38.6131 51.3326 40.2533 49.9585 42.7085 49.9585V47.9585C39.3333 47.9585 37.1411 49.9144 35.7792 52.0919C34.4317 54.2465 33.8191 56.7219 33.5598 58.1033L35.5254 58.4723ZM35.4802 58.3752C35.4742 58.3752 35.4866 58.3743 35.5015 58.3914C35.5089 58.3999 35.5171 58.413 35.5221 58.4307C35.5275 58.4498 35.5267 58.4656 35.5254 58.4723L33.5598 58.1033C33.3253 59.3525 34.3166 60.3752 35.4802 60.3752V58.3752ZM39.2058 58.3752H35.4802V60.3752H39.2058V58.3752ZM40.1664 59.6531C41.0477 56.6068 43.0837 53.0075 47.8993 52.2073L47.5715 50.2343C41.6571 51.2172 39.2247 55.7117 38.2452 59.0973L40.1664 59.6531Z"
                  fill="#F4F8FD"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_221_169"
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="100"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7426C3" />
                    <stop offset="1" stopColor="#CE4296" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
          {/* Takvim */}
          <div className="mb-4">
            <Link to={pages[3]} smooth={true} offset={10}>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="50"
                  fill="url(#paint0_linear_221_172)"
                />
                <rect
                  x="31.25"
                  y="37.5001"
                  width="37.5"
                  height="31.25"
                  rx="2"
                  stroke="#F4F8FD"
                  strokeWidth="2"
                />
                <path
                  d="M31.25 41.5001C31.25 39.6145 31.25 38.6717 31.8358 38.0859C32.4216 37.5001 33.3644 37.5001 35.25 37.5001H64.75C66.6356 37.5001 67.5784 37.5001 68.1642 38.0859C68.75 38.6717 68.75 39.6145 68.75 41.5001V44.5001H31.25V41.5001Z"
                  fill="#F4F8FD"
                />
                <path
                  d="M39.583 31.2501L39.583 37.5001"
                  stroke="#F4F8FD"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M60.417 31.2501L60.417 37.5001"
                  stroke="#F4F8FD"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <rect
                  x="39.583"
                  y="50.0001"
                  width="8.33333"
                  height="4.16667"
                  rx="0.5"
                  fill="#F4F8FD"
                />
                <rect
                  x="39.583"
                  y="58.3335"
                  width="8.33333"
                  height="4.16667"
                  rx="0.5"
                  fill="#F4F8FD"
                />
                <rect
                  x="52.083"
                  y="50.0001"
                  width="8.33333"
                  height="4.16667"
                  rx="0.5"
                  fill="#F4F8FD"
                />
                <rect
                  x="52.083"
                  y="58.3335"
                  width="8.33333"
                  height="4.16667"
                  rx="0.5"
                  fill="#F4F8FD"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_221_172"
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="100"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7426C3" />
                    <stop offset="1" stopColor="#CE4296" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
          {/* İletişim */}
          <div className="mb-4">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="50"
                fill="url(#paint0_linear_221_166)"
              />
              <path
                d="M38.3248 40.9552L42.3586 36.7122C42.7345 36.3168 43.3578 36.2956 43.7596 36.6645L48.3798 40.9056C48.8011 41.2922 48.8129 41.9528 48.4058 42.3543L44.6766 46.0316C44.3127 46.3904 44.1926 46.929 44.3694 47.4085C45.901 51.5619 49.1927 54.8242 53.3597 56.3184L53.4486 56.3502C53.9258 56.5214 54.4589 56.4038 54.8199 56.0478L58.5768 52.3432C58.9761 51.9494 59.6211 51.961 60.0061 52.3688L64.3284 56.9475C64.7016 57.3429 64.6905 57.9641 64.3033 58.3459L60.1241 62.4671C58.0517 64.5106 54.8116 64.7722 52.4383 63.0876L50 61.3568L44.6429 56.6302L39.2857 50.7915L37.7026 48.4498C36.1244 46.1154 36.3832 42.9973 38.3248 40.9552Z"
                fill="#F4F8FD"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_221_166"
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7426C3" />
                  <stop offset="1" stopColor="#CE4296" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FloatingButtons;
