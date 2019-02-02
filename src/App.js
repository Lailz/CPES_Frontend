import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import QuestionList from "./Components/QuestionList";
import SubjectList from "./Components/SubjectList";
import AddSubject from "./Components/AddSubject";
import AddQuestion from "./Components/AddQuestion";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route to="/" exact component={Home} />
          <Route to="/subjects" component={SubjectList} />
          <Route to="/:subjectName/questions" component={QuestionList} />
          <Route to="/addQuestion" component={AddQuestion} />
          <Route to="/addSubject" component={AddSubject} />
        </Switch>
      </div>
    );
  }
}

export default App;
