import React, { Component } from "react";
import questions from "../Data/Questions";
import QuestionCard from "./QuestionCard";

class QuestionList extends Component {
  state = {
    questions: questions
  };
  deleteQuestion = deletedQuestion => {
    let newQuestions = this.state.questions.filter(
      question => question !== deletedQuestion
    );
    this.setState({ questions: newQuestions });
  };
  render() {
    let subjectName = this.props.match.params.subjectName;
    let subject = questions.find(question => question.subject === subjectName);
    let questionList = subject.questions.map((question, idx) => {
      return (
        <QuestionCard
          question={question}
          key={idx}
          index={idx}
          deleteQuestion={this.deleteQuestion}
        />
      );
    });

    return (
      <div className="accordion" id="accordionExample">
        {questionList}
      </div>
    );
  }
}

export default QuestionList;
