import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { headerNavLinksData } from "../../../utils";
import { CustomNavLink, PrimaryButton } from "../../elements";

const Sidebar = () => {
  const router = useLocation();

  return (
    <>
      <div className="sticky">
        <aside className="app-sidebar">
          <div className="" style={{ position: "absolute",width:"100%" }}>
            <div className="main-sidemenu">
              <PrimaryButton
                title="Create Job"
                icon={
                  <FontAwesomeIcon icon={faPlus} size="lg" className="ms-2" />
                }
              />
              <MenuContainer>
                {headerNavLinksData.map((menuItem) => {
                  return (
                    <CustomNavLink
                    isActiveBorder
                      {...menuItem}
                      currentPathName={router?.pathname}
                    />
                  );
                })}
              </MenuContainer>
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
  margin-top:40px;
`;
