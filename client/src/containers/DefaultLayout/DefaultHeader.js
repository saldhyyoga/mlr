import React from "react";
import { NavLink } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
} from "reactstrap";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import { token } from "../../helper/variable";
import jwt_decode from "jwt-decode";

import { AppNavbarBrand, AppSidebarToggler } from "@coreui/react";
import jazaa from "../../assets/img/jazaa.png";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

let decodedToken = jwt_decode(token);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    marginRight: 15,
    textTransform: "capitalize",
  },
}));

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

function DefaultHeader(props) {
  const name = Cookies.get("name");

  const showName = () => {
    if (decodedToken.group === 1) {
      return "admin";
    } else if (decodedToken.group === 2) {
      return "Manager";
    } else if (decodedToken.group === 3) {
      return "operational";
    }
  };

  const onClickLogout = () => {
    Cookies.remove("jzid");
    Cookies.remove("jztkn");
    Cookies.remove("code");
    Cookies.remove("name");
    Cookies.remove("token");
    window.location.href = "/login";
  };

  // eslint-disable-next-line
  const { children, ...attributes } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <NavLink to="/dashboard" className="nav-link">
        {/* <AppNavbarBrand
          full={{ src: jazaa, width: 89, height: 25, alt: "Jazaa Logo" }}
          minimized={{
            src: jazaa,
            width: 20,
            height: 20,
            marginLeft: 20,
            alt: "Jazaa Logo",
          }} */}
        {/* /> */}
      </NavLink>
      <AppSidebarToggler className="d-md-down-none" display="lg" />

      <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <div
          style={{
            fontSize: 13,
            marginRight: 10,
            marginBottom: 10,
          }}
        >
          <span>Hi</span>
          <br /> {showName()}!
        </div>
        <UncontrolledDropdown nav direction="down">
          <DropdownToggle nav>
            <Avatar style={{ marginBottom: 5 }} className={classes.orange}>
              {showName().substring(0, 1)}
            </Avatar>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header tag="div" className="text-center">
              <strong>Settings</strong>
            </DropdownItem>
            <NavLink to="/profile" className="nav-link">
              <DropdownItem>
                <i className="fa fa-user"></i>Profile
              </DropdownItem>
            </NavLink>
            <DropdownItem onClick={onClickLogout}>
              <i className="fa fa-lock"></i> Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </React.Fragment>
  );
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
