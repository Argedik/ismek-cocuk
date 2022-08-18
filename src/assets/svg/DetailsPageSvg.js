import CodingDetails from "./CodingDetails";
import DesignDetails from "./DesignDetails";
import ElectronicPage from "./ElectronicPage";
const DetailsPageSvg = ({ ...props }) => {
  const DetailContent = () => {
    return props.title === "KODLAMA" ? (
      <CodingDetails {...props} />
    ) : props.title === "TASARIM" ? (
      <DesignDetails {...props} />
    ) : props.title === "ELEKTRONİK" ? (
      <ElectronicPage {...props} />
    ) : (
      ""
    );
  };
  return (
    <div className="absolute top-0 left-0 w-full h-screen box-border">
      <div className="absolute left-0 top-0 box-border">
        {/* Ana başlık bölümü */}
        <svg
          width="360"
          height="106"
          viewBox="0 0 360 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 30C1.5 14.2599 14.2599 1.5 30 1.5H357C357.828 1.5 358.5 2.17157 358.5 3V76C358.5 91.7401 345.74 104.5 330 104.5H1.5V30Z"
            stroke="url(#paint0_linear_82_5394)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_82_5394"
              x1="180"
              y1="0"
              x2="180"
              y2="106"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#872DBD" />
              <stop offset="1" stopColor="#B33BA6" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="black"
            className="font-asap font-semibold text-5xl"
          >
            {props.title}
          </text>
        </svg>
      </div>
      <div className="absolute left-0 bottom-11 box-border ">
        <img src={props.image} alt={props.image} />
      </div>
      <div className="absolute right-0 top-1/4 translate-y-8 translate-x-32">
        <svg
          width="797"
          height="80"
          viewBox="0 0 797 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M133.5 56.5V68.5M133.5 68.5H1V79.5M133.5 68.5H254V79.5M681 56.5V68.5M681 68.5H546V79.5M681 68.5H796.5V79.5"
            stroke="black"
          />
          <line x1="227" y1="14.5" x2="573" y2="14.5" stroke="black" />
          <line x1="400.5" y1="14" x2="400.5" stroke="black" />
        </svg>
      </div>
      <DetailContent />
    </div>
  );
};

export default DetailsPageSvg;
