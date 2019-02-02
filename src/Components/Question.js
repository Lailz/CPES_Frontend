import React, { Component } from "react";
import QuestionChoice from "./QuestionChoice";

class Question extends Component {
  state = {
    chosenAnswer: false
  };
  render() {
    console.log("Question", this.props.question);
    let choices = this.props.question.wrongAnswers.map((wrongAnswer, idx) => {
      return (
        <QuestionChoice
          question={this.props.question}
          answer={wrongAnswer}
          index={idx}
          questionIndex={this.props.index}
        />
      );
    });
    return (
      <div>
        <h5>{this.props.question.question}</h5>
        <fieldset class="form-group" id={this.props.index}>
          <QuestionChoice
            question={this.props.question}
            answer={this.props.question.correctAnswer}
            index={3}
            questionIndex={this.props.index}
          />{" "}
          {choices}
        </fieldset>
      </div>
    );
  }
}

export default Question;
