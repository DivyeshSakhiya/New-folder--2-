import {
  faPlus,
  faAngleRight,
  faClose,
  faAlignJustify,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCommentDots,
  faCircleUser,
  faFaceSmile,
  faEnvelope,
  faArrowAltCircleLeft,
  faFolderOpen,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Darkmode, headerNavLinksData, openCloseSidebar } from "../../../utils";
import { HeaderLogo } from "./HeaderStyle";
import { CustomNavLink, PrimaryButton } from "../../elements";
import clsx from "clsx";
import styles from "./Header.module.css";

const Header = () => {
  const router = useLocation();
  return (
    <Navbar className="main-header side-header sticky nav-item">
      <HeaderLogo className="main-sidebar-header active">
        <Link className="header-logo active" to={`${process.env.PUBLIC_URL}/`}>
          <img
            src={require("../../../assets/img/brand/Nova.png")}
            className="main-logo  desktop-logo"
            alt="logo"
          />
          <img
            src={require("../../../assets/img/brand/Nova_White_logo.png")}
            className="main-logo  desktop-dark"
            alt="logo"
          />
        </Link>
      </HeaderLogo>
      <div className="main-container container-fluid">
        <div
          className="app-sidebar__toggle"
          data-bs-toggle="sidebar"
          onClick={() => openCloseSidebar()}
        >
          <Link className="open-toggle" to="#">
            <FontAwesomeIcon
              icon={faAlignJustify}
              className="header-icon-svgs"
            />
          </Link>
          <Link className="close-toggle" to="#">
            <FontAwesomeIcon icon={faClose} className="header-icon-svgs" />
          </Link>
        </div>
        <div className="main-header-left">
          <div className="responsive-logo">
            <Link to={`${process.env.PUBLIC_URL}/`} className="header-logo">
              <img
                src={require("../../../assets/img/brand/Nova.png")}
                className="mobile-logo logo-1"
                alt="logo"
              />
              <img
                src={require("../../../assets/img/brand/Nova_White_logo.png")}
                className="mobile-logo dark-logo-1"
                alt="logo"
              />
            </Link>
          </div>
          <div className="logo-horizontal">
            <Link to={`${process.env.PUBLIC_URL}/`} className="header-logo">
              <img
                src={require("../../../assets/img/brand/Nova.png")}
                className="mobile-logo logo-1"
                alt="logo"
              />
              <img
                src={require("../../../assets/img/brand/Nova_White_logo.png")}
                className="mobile-logo dark-logo-1"
                alt="logo"
              />
            </Link>
          </div>
          <div className="main-header-center ms-4 d-sm-none d-md-none d-lg-block form-group">
            <div className="d-flex gap-5">
              {headerNavLinksData.map((menuItem) => {
                return (
                  <CustomNavLink
                    {...menuItem}
                    currentPathName={router?.pathname}
                  />
                );
              })}
              <PrimaryButton
                title="Create Job"
                icon={
                  <FontAwesomeIcon icon={faPlus} size="lg" className="ms-2" />
                }
              />
            </div>
          </div>
        </div>

        <div className="main-header-right">
          <div className="mb-0 navbar-expand-lg navbar-nav-right responsive-navbar navbar-dark p-0">
            <Navbar.Collapse className="collapse" id="navbarSupportedContent-4">
              <ul className="nav nav-item header-icons navbar-nav-right">
                <li
                  className={clsx("dropdown nav-item", styles.darkmode_button)}
                >
                  <Link
                    to="#"
                    className="new nav-link theme-layout nav-link-bg layout-setting"
                    onClick={() => Darkmode()}
                  >
                    <span className="dark-layout">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-icon-svgs"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z" />
                      </svg>
                    </span>
                    <span className="light-layout">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-icon-svgs"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
                      </svg>
                    </span>
                  </Link>
                </li>
                <Dropdown className="nav-item main-header-notification d-flex">
                  <Dropdown.Toggle className="new nav-link" variant="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="header-icon-svgs"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z" />
                    </svg>
                    <span className="pulse"></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="slid1">
                    <div className="menu-header-content text-start border-bottom">
                      <div className="d-flex">
                        <h6 className="dropdown-title mb-1 tx-15 font-weight-semibold">
                          Notifications
                        </h6>
                        <span className="badge badge-pill badge-warning ms-auto my-auto float-end">
                          Mark All Read
                        </span>
                      </div>
                      <p className="dropdown-title-text subtext mb-0 op-6 pb-0 tx-12 ">
                        You have 4 unread Notifications
                      </p>
                    </div>
                    <div style={{ height: 280, overflow: "auto" }}>
                      <div className="main-notification-list Notification-scroll">
                        <Dropdown.Item
                          className="d-flex p-3 border-bottom"
                          href={`${process.env.PUBLIC_URL}/pages/mail/mail`}
                        >
                          <div className="notifyimg bg-pink">
                            <FontAwesomeIcon icon={faFolderOpen} size="xl" />
                          </div>
                          <div className="ms-3">
                            <h5 className="notification-label mb-1">
                              New files available
                            </h5>
                            <div className="notification-subtext">
                              10 hour ago
                            </div>
                          </div>
                          <div className="ms-auto">
                            {/* <i className="las la-angle-right text-end text-muted"></i> */}
                            <FontAwesomeIcon icon={faAngleRight} size="xl" />
                          </div>
                        </Dropdown.Item>
                      </div>
                    </div>
                    <div className="dropdown-footer">
                      <Link
                        className="btn btn-primary btn-sm btn-block"
                        to={`${process.env.PUBLIC_URL}/pages/mail/mail`}
                      >
                        VIEW ALL
                      </Link>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="main-profile-menu nav nav-item nav-link ps-lg-2">
                  <Dropdown.Toggle
                    className="new nav-link profile-user d-flex"
                    variant=""
                  >
                    <img
                      alt=""
                      // src={require("../../../assets/img/faces/2.jpg")}
                      className=""
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className="menu-header-content p-3 border-bottom">
                      <div className="d-flex wd-100p">
                        <div className="main-img-user">
                          <img
                            alt=""
                            // src={require("../../../assets/img/faces/2.jpg")}
                            className=""
                          />
                        </div>
                        <div className="ms-3 my-auto">
                          <h6 className="tx-15 font-weight-semibold mb-0">
                            Teri Dactyl
                          </h6>
                          <span className="dropdown-title-text subtext op-6  tx-12">
                            Premium Member
                          </span>
                        </div>
                      </div>
                    </div>
                    <Dropdown.Item
                      className="dropdown-item"
                      href={`${process.env.PUBLIC_URL}/pages/profile`}
                    >
                      <FontAwesomeIcon icon={faCircleUser} size="xl" />
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      href={`${process.env.PUBLIC_URL}/pages/mail/chat`}
                    >
                      <FontAwesomeIcon icon={faFaceSmile} size="xl" />
                      chat
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      href={`${process.env.PUBLIC_URL}/pages/mail/readmail`}
                    >
                      <FontAwesomeIcon icon={faEnvelope} size="xl" />
                      Inbox
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      href={`${process.env.PUBLIC_URL}/pages/mail/mail`}
                    >
                      <FontAwesomeIcon icon={faCommentDots} size="xl" />
                      Messages
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      href={`${process.env.PUBLIC_URL}/pages/mail/mailsettings`}
                    >
                      <FontAwesomeIcon icon={faSun} size="xl" />
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      // onClick={() => {
                      //   auth.signOut();
                      //   routeChange();
                      // }}
                    >
                      <FontAwesomeIcon icon={faArrowAltCircleLeft} size="xl" />
                      Sign Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
            </Navbar.Collapse>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
