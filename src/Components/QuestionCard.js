import React, { Component } from "react";
import store from "../Store/SubjectStore";
import { observer } from "mobx-react";

class QuestionCard extends Component {
  render() {
    let { index, question } = this.props;
    let wrongAnswers = question.wrongAnswers.map(answer => <td>{answer}</td>);
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
          <span onClick={() => store.deleteQuestion(question)}>
            Delete Question
          </span>
        </div>

        <div
          id={`collapse${index}`}
          className="collapse show"
          aria-labelledby={index}
          data-parent="#accordionExample"
        >
          <table class="table table-striped">
            <tbody>
              <tr>
                <td>{question.correctAnswer}</td>
                {wrongAnswers}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default observer(QuestionCard);
