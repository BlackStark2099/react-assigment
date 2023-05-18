import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-light py-auto">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          <h4>Blog App</h4>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
