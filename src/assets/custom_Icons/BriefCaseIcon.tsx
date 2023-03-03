import { IIconProps } from "./customIcons";

const BriefCaseIcon = ({ width, height }: IIconProps.Iprops) => {
  return (
    <svg
      width={width || "18"}
      height={height || "16"}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="header-icon-svgs"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6663 3.33333V1.66667H7.33293V3.33333H10.6663ZM2.33293 5V14.1667H15.6663V5H2.33293ZM15.6663 3.33333C16.5913 3.33333 17.3329 4.075 17.3329 5V14.1667C17.3329 15.0917 16.5913 15.8333 15.6663 15.8333H2.33293C1.40793 15.8333 0.66626 15.0917 0.66626 14.1667L0.674593 5C0.674593 4.075 1.40793 3.33333 2.33293 3.33333H5.66626V1.66667C5.66626 0.741667 6.40793 0 7.33293 0H10.6663C11.5913 0 12.3329 0.741667 12.3329 1.66667V3.33333H15.6663Z"
      />
    </svg>
  );
};

export default BriefCaseIcon;
