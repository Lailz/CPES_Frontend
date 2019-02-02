import React, { Component } from "react";

class SubjectRow extends Component {
  render() {
    let { subject } = this.props;
    return (
      <tr>
        <td>{subject.subjectName}</td>
        <td>{subject.description}</td>
        <td>{subject.questions.length}</td>
        <td>
          <i className="far fa-edit" />
          <i className="far fa-trash-alt" />
          <button className="btn btn-warning">Start</button>
        </td>
      </tr>
    );
  }
}

export default SubjectRow;
