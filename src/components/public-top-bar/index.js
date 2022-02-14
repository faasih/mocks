import React from "react";
import Assets from "../../constants/images";
import "./styles.css";
export default function TopBarPublicPage() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand px-2" href="#">
        <img
          src={Assets.crescenticLogo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt=""
        />
      </a>
      <p className="title mt-3">Crescentic Digital</p>
    </nav>
  );
}
