import React, { Component } from "react";

class QuestionCard extends Component {
  render() {
    let { index, question } = this.props;
    return (
      <div className="card">
        <div className="card-header" id={index}>
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target={`#collapse${index}`}
              aria-expanded="true"
              aria-controls={`collapse${index}`}
            >
              {question.question}
            </button>
          </h5>
          <span onClick={() => this.props.deleteQuestion(question)}>
            Delete Question
          </span>
        </div>

        <div
          id={`collapse${index}`}
          className="collapse show"
          aria-labelledby={index}
          data-parent="#accordionExample"
        >
          <div className="card-body">{question.correctAnswer}</div>
        </div>
      </div>
    );
  }
}

export default QuestionCard;
