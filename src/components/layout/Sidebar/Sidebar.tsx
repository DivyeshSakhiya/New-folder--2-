import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { DarkModeIcon, LightModeIcon } from "../../../assets/custom_Icons";
import { Darkmode, headerNavLinksData } from "../../../utils";
import { CustomNavLink, PrimaryButton } from "../../elements";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  const router = useLocation();

  return (
    <>
      <div className="sticky">
        <aside className="app-sidebar">
          <div className={styles.sidebar}>
            <div className={styles.buttonContainer}>
              <PrimaryButton
                title="Create Job"
                icon={
                  <FontAwesomeIcon icon={faPlus} size="lg" className="ms-2" />
                }
              />
            </div>
            <div className="main-sidemenu">
              <MenuContainer>
                {headerNavLinksData.map((menuItem) => {
                  return (
                    <RightBorderContainer
                      isRightSideBorder={router?.pathname === menuItem.pathName}
                    >
                      <CustomNavLink
                        {...menuItem}
                        currentPathName={router?.pathname}
                      />
                    </RightBorderContainer>
                  );
                })}
              </MenuContainer>
              <div
                className={clsx(
                  "new nav-link theme-layout nav-link-bg layout-setting",
                  styles.darkmode_button
                )}
                onClick={() => Darkmode()}
              >
                <span className="dark-layout">
                  <DarkModeIcon />
                </span>
                <span className="light-layout">
                  <LightModeIcon />
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;

const MenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 43px;
`;

const RightBorderContainer = styled.div<{ isRightSideBorder: boolean }>`
  width: 101%;
  border-right: ${({ isRightSideBorder }) =>
    isRightSideBorder && "3px solid var(--primary-bg-color)"};
`;
