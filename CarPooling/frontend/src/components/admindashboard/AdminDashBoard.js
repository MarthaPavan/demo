import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "../../App.css";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavItem,
} from "@coreui/react";
import toast from "react-hot-toast";
import { useAuth } from "../../routes/AuthContext";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import Routes from "./Routes";
import Employees from "./Employees";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
const AdminDashBoard = () => {
  const { logOut, user } = useAuth();
  const [index, setIndex] = React.useState(0);
  const components = [<Profile />, <Dashboard />, <Employees />, <Routes />];
  const handleClick = (e) => {
    setIndex(e);
  };
  const handleLogout = () => {
    logOut();
  };
  useEffect(() => {
    toast("Welcome back", {
      icon: "👋",
      position: "top-right",
    });
  }, []);
  return (
    <>
      <Row>
        <Col xs={2}>
          <CSidebar className="border-end" style={{ height: "100vh" }}>
            <CSidebarHeader className="border-bottom">
              <CSidebarBrand className="text-decoration-none">
                Welcome {user ? user.fullName : "Guest"}
              </CSidebarBrand>
            </CSidebarHeader>
            <CSidebarNav variant="pills" layout="fill">
              {/* <CNavTitle>Nav Title</CNavTitle> */}
              <CNavItem
                href="#"
                active={index === 0}
                onClick={() => handleClick(0)}
              >
                <CIcon customClassName={"nav-icon"} icon={icon.cilUser} />
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
                <CIcon customClassName="nav-icon" icon={icon.cilPeople} />
                Employees
              </CNavItem>
              <CNavItem
                href="#"
                active={index === 3}
                onClick={() => handleClick(3)}
              >
                <CIcon customClassName="nav-icon" icon={icon.cilMap} /> Routes
              </CNavItem>
              <CNavItem href="/" onClick={() => handleLogout}>
                <CIcon
                  customClassName="nav-icon"
                  icon={icon.cilAccountLogout}
                />
                Log out
              </CNavItem>
              {/*<CNavItem href="https://coreui.io/pro/"><CIcon customClassName="nav-icon" icon={icon.cilLayers} /> Try CoreUI PRO</CNavItem>*/}
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

export default AdminDashBoard;