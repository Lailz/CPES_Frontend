import React, { Component } from "react";
import QuestionCard from "./QuestionCard";

class QuestionList extends Component {
  render() {
    let { questions } = this.props;
    let questionList;
    if (questions) {
      questionList = questions.questions.map((question, idx) => {
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
