import React, { Component } from "react";
import { observer } from "mobx-react";
import store from "../Store/SubjectStore";

class Question extends Component {
  state = {
    selectedOption: "option1"
  };

  handleOptionChange = event => {
    this.setState({
      selectedOption: event.target.value
    });
    if (event.target.value === this.props.question.correctAnswer) {
      store.answers[this.props.index] = true;
    } else {
      store.answers[this.props.index] = false;
    }
  };

  render() {
    console.log("Question", this.props.question);
    let { question } = this.props;
    let answers = [question.correctAnswer, ...question.wrongAnswers];
    console.log("Answers", answers);
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <h5>{question.question}</h5>
            <form>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value={answers[0]}
                    checked={this.state.selectedOption === answers[0]}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  {answers[0]}
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value={answers[1]}
                    checked={this.state.selectedOption === answers[1]}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  {answers[1]}
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value={answers[2]}
                    checked={this.state.selectedOption === answers[2]}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  {answers[2]}
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value={answers[3]}
                    checked={this.state.selectedOption === answers[3]}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  {answers[3]}
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(Question);
