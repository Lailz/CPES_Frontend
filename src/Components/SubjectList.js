import React, { Component } from "react";

import theSubjects from "../Data/Subjects";

// Components
import SubjectRow from "./SubjectRow";

class SubjectList extends Component {
  state = {
    subjects: theSubjects
  };

  deleteSubject = deletedSubject => {
    let newSubjects = this.state.subjects.filter(
      subject => subject !== deletedSubject
    );
    this.setState({ subjects: newSubjects });
  };

  render() {
    console.log(this.state.subjects);
    let subjectList = this.state.subjects.map(subject => {
      return (
        <SubjectRow
          subject={subject}
          key={subject.subjectName}
          deleteSubject={this.deleteSubject}
        />
      );
    });

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Subject</th>
              <th scope="col">Description</th>
              <th scope="col">Num of Questions</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{subjectList}</tbody>
        </table>
      </div>
    );
  }
}

export default SubjectList;
