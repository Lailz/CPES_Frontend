import React, { Component } from "react";
import subjects from "../Data/Subjects";
import questions from "../Data/Questions";
import { Redirect } from "react-router-dom";

class AddQuestion extends Component {
  state = {
    question: "",
    correctAnswer: "",
    answer1: "",
    answer2: "",
    answer3: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let subjectName = this.props.match.params.subjectName;
    console.log("From match params", subjectName);
    console.log(questions);
    let subjectObject = questions.find(
      question => question.subject === subjectName
    );
    console.log("Subject found: ", subjectObject);
    let question = this.state;
    question = {
      question: question.question,
      correctAnswer: question.correctAnswer,
      wrongAnswers: [question.answer1, question.answer2, question.answer3]
    };
    console.log("question", question);
    subjectObject.questions.push(this.state);
    console.log("subject object", subjectObject);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Question</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="question"
                placeholder="Add your question"
                value={this.state.question}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Correct Answer</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="correctAnswer"
                placeholder="correctAnswer"
                value={this.state.correctAnswer}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">False Answers</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="answer1"
                placeholder="False Answer 1"
                onChange={this.handleChange}
              />
              <input
                type="text"
                className="form-control"
                name="answer2"
                placeholder="False Answer 2"
                onChange={this.handleChange}
              />
              <input
                type="text"
                className="form-control"
                name="answer3"
                placeholder="False Answer 3"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" class="btn btn-warning">
            Add Question
          </button>
        </form>
      </div>
    );
  }
}

export default AddQuestion;
