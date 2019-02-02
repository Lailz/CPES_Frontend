import React, { Component } from "react";
import { Link } from "react-router-dom";

import SubjectList from "./SubjectList";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/addSubject">
          <button className="btn btn-warning">Add a New Subject</button>
        </Link>
        <SubjectList />
      </div>
    );
  }
}

export default Home;
