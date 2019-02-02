import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class SubjectRow extends Component {
  render() {
    let { subject } = this.props;
    return (
      <tr>
        <td>{subject.subjectName}</td>
        <td>{subject.description}</td>
        <td>{subject.questions.length}</td>
        <td>
          <span>
            <FontAwesomeIcon icon={faEdit} />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => this.props.deleteSubject(subject)}
            />
          </span>
          <button className="btn btn-warning">Start</button>
        </td>
      </tr>
    );
  }
}

export default SubjectRow;
