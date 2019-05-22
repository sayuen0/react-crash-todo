import React from "react";
import { Link } from "react-router-dom";

function Header() {
  // const __appname__ = "react-crash-todo";
  return (
    <header style={headerStyle}>
      <h1>タスクリスト</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      |
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "white",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "white",
  textDecoration: "none"
};

export default Header;
