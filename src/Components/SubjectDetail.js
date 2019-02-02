import React, { Component } from "react";

import QuestionList from "./QuestionList";
import { observer } from "mobx-react";

import store from "../Store/SubjectStore";

class SubjectDetail extends Component {
  componentDidMount() {
    store.fetchSubjectByName(this.props.match.params.subjectName);
    store.fetchQuestionSetBySubject(this.props.match.params.subjectName);
  }
  render() {
    if (!store.subject && !store.questionSet) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <h2>{store.subject.subjectName}</h2>
        <p>{store.subject.description}</p>
        <QuestionList questionSet={store.questionSet} />
      </div>
    );
  }
}

export default observer(SubjectDetail);
