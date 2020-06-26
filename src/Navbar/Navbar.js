import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAddressCard,
  faProjectDiagram,
  faSchool,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link
            to="/components/home#home"
            className="nav-link"
            activeClassName="nav-link"
          >
            <span className="link-text">Atul Rana</span>
            <FontAwesomeIcon icon={faAngleDoubleRight} className="Myicon" />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/components/resume#resume"
            className="nav-link"
            activeClassName="nav-link"
          >
            <FontAwesomeIcon icon={faUserCheck} className="Myicon" />
            <span className="link-text">About Me</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/components/projects#projects"
            className="nav-link"
            activeClassName="nav-link"
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="Myicon" />
            <span className="link-text">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/components/education#education"
            className="nav-link"
            activeClassName="nav-link"
          >
            <FontAwesomeIcon icon={faSchool} className="Myicon" />
            <span className="link-text">Education</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/components/contact#contact"
            className="nav-link"
            activeClassName="nav-link"
          >
            <FontAwesomeIcon icon={faAddressCard} className="Myicon" />
            <span className="link-text">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default navbar;
