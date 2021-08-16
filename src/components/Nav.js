// @flow
import React from "react";
import injectSheet from "react-jss/lib/injectSheet";
import { NavLink } from "react-router-dom";

type NavProps = { classes: { NavList: string, NavItem: string, NavLink: String, NavLinkActive: string } };

function Nav(props: NavProps) {
  const classes = props.classes;

  return (
    <nav>
      <ul className={classes.NavList}>
        <li className={classes.NavItem}>
          <NavLink
            className={classes.NavLink}
            activeClassName={classes.NavLinkActive}
            to={(location) => ({ ...location, pathname: "/obligation-api" })}
          >
            Obligation API Demo
          </NavLink>
        </li>
        <li className={classes.NavItem}>
          <NavLink
            className={classes.NavLink}
            activeClassName={classes.NavLinkActive}
            to={(location) => ({ ...location, pathname: "/credit-api" })}
          >
            Credit API Demo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  NavList: {
    padding: 0,
    margin: [0, 0, 30],
    display: "flex",
    listStyle: "none",
  },
  NavItem: {
    flex: 1,
    textAlign: "center",
    padding: 0,
    margin: 0,
  },
  NavLink: {
    color: "#5faeea",
    textDecoration: "none",
    transition: "color 180ms linear",

    "&:hover": {
      color: "#3D4752",
    },
  },
  NavLinkActive: {
    color: "#3D4752",
  },
};

export default (injectSheet(styles)(Nav): any);
