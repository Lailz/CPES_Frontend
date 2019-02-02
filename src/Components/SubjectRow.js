import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import store from "../Store/SubjectStore";

class SubjectRow extends Component {
  render() {
    let { subject } = this.props;
    return (
      <tr className="">
        <td>
          <Link to={`/subjects/${subject.subjectName}`}>
            {subject.subjectName}
          </Link>
        </td>
        <td>{subject.description}</td>
        <td>{subject.questions.length}</td>
        <td>

          <Link to={`/editSubject/${subject.subjectName}`}>
            <span>
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </Link>
          <span>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => store.deleteSubject(subject)}
            />
          </span>
          <Link to={`/exam/${subject.subjectName}`}>
            <button className="btn btn-warning ml-3">Start</button>
          </Link>
        </td>
      </tr>
    );
  }
}

export default SubjectRow;
