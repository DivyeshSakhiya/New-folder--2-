import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { INavLinkProps } from "./NavLink";



const CustomNavLink: React.FC<INavLinkProps.IProps> = ({
  icon: Icon,
  title,
  pathName,
  currentPathName,
}) => {
  const closeSiderBar = () => {
    document.querySelector("body")?.classList.remove("sidenav-toggled");
  };
  return (
    <CNavLink
      to={pathName}
      isActive={currentPathName === pathName}
      key={title}
      onClick={closeSiderBar}
    >
      <LinkWrapper isActive={currentPathName === pathName}>
        <Icon />
        <Label className="customeLink">{title}</Label>
      </LinkWrapper>
    </CNavLink>
  );
};

export const CNavLink = styled(NavLink)<{
  isActive: boolean;
  isActiveBorder?: boolean;
}>`
  display: flex;
  padding: 10px 0px;
  text-align: right;
  div {
    color: ${({ isActive }) =>
      isActive && "var(--primary-bg-color) !important"};
  }
`;

export const LinkWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;

  svg {
    fill: ${({ isActive }) => isActive && "var(--primary-bg-color) !important"};
  }
`;

export const Label = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #323251;
`;

export default CustomNavLink;
