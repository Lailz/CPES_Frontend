import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <a class="navbar-brand">Quizme</a>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
