import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import QuestionList from "./Components/QuestionList";
import SubjectList from "./Components/SubjectList";
import AddSubject from "./Components/AddSubject";
import AddQuestion from "./Components/AddQuestion";
import SubjectDetail from "./Components/SubjectDetail";
import ExamPage from "./Components/ExamPage";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/subjects/:subjectName" component={SubjectDetail} />
          <Route path="/subjects" component={SubjectList} />
          <Route path="/addQuestion/:subjectName" component={AddQuestion} />
          <Route path="/addSubject" component={AddSubject} />
          <Route path="/exam/:subjectName" component={ExamPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
