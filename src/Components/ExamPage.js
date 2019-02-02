import React, { Component } from "react";

import questions from "../Data/Questions";

import Question from "./Question";

class ExamPage extends Component {
  render() {
    const subjectName = this.props.match.params.subjectName;
    let subjectQuestions = questions.find(questionSet => {
      return questionSet.subject === subjectName;
    });

    let questionList = subjectQuestions.questions.map((question, idx) => {
      return <Question question={question} index={idx} />;
    });

    return (
      <div>
        <h3>{subjectQuestions.subject} Quiz</h3>
        {questionList}
      </div>
    );
  }
}

export default ExamPage;
