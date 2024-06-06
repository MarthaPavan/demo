import React from "react";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import Profile from "./Profile";
import Dashboard from "./DashBoard";
import Rides from "./Rides";
const UserDashBoard = () => {
  const [index, setIndex] = React.useState(0);
  const handleClick = (e) => {
    setIndex(e);
    console.log(e);
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };
  const components = [<Profile />, <Dashboard />, <Rides />];
  return (
    <>
      <Row>
        <Col xs={2}>
          <CSidebar className="border-end" style={{ height: "100vh" }}>
            <CSidebarHeader className="border-bottom">
              <CSidebarBrand className="text-decoration-none">
                Welcome [user name]
              </CSidebarBrand>
            </CSidebarHeader>
            <CSidebarNav variant="pills" layout="fill">
              {/*<CNavTitle>Nav Title</CNavTitle>*/}
              <CNavItem
                href="#"
                active={index === 0}
                onClick={() => handleClick(0)}
              >
                <CIcon customClassName="nav-icon" icon={icon.cilUser} />
                Profile
              </CNavItem>
              <CNavItem
                href="#"
                active={index === 1}
                onClick={() => handleClick(1)}
              >
                <CIcon
                  customClassName="nav-icon"
                  icon={icon.cilScreenDesktop}
                />{" "}
                Dashboard
              </CNavItem>
              <CNavItem
                href="#"
                active={index === 2}
                onClick={() => handleClick(2)}
              >
                <FontAwesomeIcon
                  icon={faCarSide}
                  className={"nav-icon fa-thin fa-car-side"}
                />
                Previous Rides
              </CNavItem>
              <CNavItem
                href="#"
                active={index === 3}
                onClick={() => handleClick(3)}
              >
                <FontAwesomeIcon
                  icon={faMessage}
                  className={"nav-icon fa-light fa-message"}
                />
                Feedback
              </CNavItem>
              <CNavItem
                href="#"
                active={index === 4}
                onClick={() => handleClick(4)}
              >
                <CIcon
                  customClassName="nav-icon"
                  icon={icon.cilContact}
                ></CIcon>
                Contact Us
              </CNavItem>
              <CNavItem href="#">
                <CIcon
                  customClassName="nav-icon"
                  icon={icon.cilAccountLogout}
                  onClick={handleLogOut}
                />
                Log out
              </CNavItem>
            </CSidebarNav>
          </CSidebar>
        </Col>
        <Col xs={10} className="p-5">
          {components[index]}
        </Col>
      </Row>
    </>
  );
};

export default UserDashBoard;