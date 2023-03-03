import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

import { IButtonProps } from "./PrimaryButton";

const PrimaryButton: React.FC<IButtonProps.IProps> = ({ title, icon }) => {
  return (
    <ButtonContainer className="btn btn-info btn-loaders">
      <ButtonWithIconWrapper>
        <Label>{title}</Label>
        {icon}
      </ButtonWithIconWrapper>
    </ButtonContainer>
  );
};
// btn btn-outline-primary mx-2 button-icon fs-6 fw-bolder
export default PrimaryButton;

export const ButtonContainer = styled(Button)`
  position: unset !important;
  border-radius: 5px !important;
  background-color: var(--primary-bg-color) !important;
  font-weight: 600;
  height: auto !important;
  padding: 8px 13px !important;
  color: var(--white) !important;
  min-width:fit-content;
`;

export const ButtonWithIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Label = styled.div``;
