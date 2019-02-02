import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning justify-content-between">
        <Link to="/" className="navbar-brand">
          Quizme
        </Link>
        <Link to="/addSubject" className="navbar-brand">
          Add a New Subject
        </Link>
      </nav>
    );
  }
}

export default Navbar;
