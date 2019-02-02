import React, { Component } from "react";
import QuestionCard from "./QuestionCard";

class QuestionList extends Component {
  render() {
    let { questionSet } = this.props;
    let questionList;
    if (questionSet) {
      questionList = questionSet.questions.map((question, idx) => {
        return <QuestionCard question={question} key={idx} index={idx} />;
      });
    }
    return (
      <div className="accordion" id="accordionExample">
        {questionList}
      </div>
    );
  }
}

export default QuestionList;
