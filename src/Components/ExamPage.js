import React, { Component } from "react";
import { observer } from "mobx-react";

import store from "../Store/SubjectStore";

import Question from "./Question";

class ExamPage extends Component {
  handleClick = () => {
    this.props.history.push("/");
    alert(`Your grade is: ${store.calculatedGrade}/${store.answers.length}`);
  };
  render() {
    const subjectName = this.props.match.params.subjectName;
    let subjectQuestions = store.questions.find(questionSet => {
      return questionSet.subject === subjectName;
    });

    let questionList = subjectQuestions.questions.map((question, idx) => {
      return <Question question={question} index={idx} />;
    });

    return (
      <div>
        <h3>{subjectQuestions.subject} Quiz</h3>
        {questionList}
        <button onClick={() => this.handleClick()}>Submit</button>
      </div>
    );
  }
}

export default observer(ExamPage);
