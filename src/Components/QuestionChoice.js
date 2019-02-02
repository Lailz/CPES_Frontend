import React, { Component } from "react";

class QuestionChoice extends Component {
  state = {
    selectedOption: this.props.answer
  };

  handleOptionChange = event => {
    console.log("HELLO");
    this.setState({ selectedOption: event.target.value });
  };

  render() {
    let { index, answer } = this.props;

    return (
      <div className="form-check">
        <label className="form-check-label" for={index}>
          <input
            className="form-check-input"
            type="radio"
            name={this.props.questionIndex}
            value={answer}
            checked={this.state.selectedOption === answer}
            onChange={() => console.log("HELLO")}
          />
          {answer}
        </label>
      </div>
    );
  }
}

export default QuestionChoice;
