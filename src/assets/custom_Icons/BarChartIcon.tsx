import { IIconProps } from "./customIcons";

const BarChartIcon = ({ width, height }: IIconProps.Iprops) => {
  return (
    <svg
      width={width || "18"}
      height={height || "17"}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="header-icon-svgs"
    >
      <path d="M6.0359 12.9656H4.28117V6.48278H6.0359V12.9656ZM9.54538 12.9656H7.79064V3.70444H9.54538V12.9656ZM13.0549 12.9656H11.3001V9.26111H13.0549V12.9656ZM15.2483 14.9104H2.08774V1.85222H15.2483V14.9104ZM15.2483 0H2.08774C1.12264 0 0.333008 0.8335 0.333008 1.85222V14.8178C0.333008 15.8365 1.12264 16.67 2.08774 16.67H15.2483C16.2134 16.67 17.003 15.8365 17.003 14.8178V1.85222C17.003 0.8335 16.2134 0 15.2483 0Z" />
    </svg>
  );
};

export default BarChartIcon;
