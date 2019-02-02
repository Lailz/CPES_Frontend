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
          <Route path="/" exact component={Home} />
          <Route path="/subjects" component={SubjectList} />
          <Route path="/:subjectName/questions" component={QuestionList} />
          <Route path="/addQuestion/:subjectName" component={AddQuestion} />
          <Route path="/addSubject" component={AddSubject} />
        </Switch>
      </div>
    );
  }
}

export default App;
