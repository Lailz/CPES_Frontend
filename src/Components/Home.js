import React, { Component } from "react";
import { Link } from "react-router-dom";

import SubjectList from "./SubjectList";

class Home extends Component {
  render() {
    return (
      <div>
        <section class="container-fluid mt-1 p-5 text-white h-100 bg-dark">
          <h1 class="mt-3">Make your own Quizzes!</h1>
          <p class="lead">
            You can leave your feedbacks or nice messages to your professors
            here!
          </p>
        </section>
        <SubjectList />
      </div>
    );
  }
}

export default Home;
