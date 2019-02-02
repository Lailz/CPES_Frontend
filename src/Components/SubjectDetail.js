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
    return (
      <div>
        <h2>{store.subject.subjectName}</h2>
        <p>{store.subject.description}</p>
        <QuestionList questions={store.questionSet} />
      </div>
    );
  }
}

export default observer(SubjectDetail);
