import React, { Component } from "react";

import subjects from "../Data/Subjects";

// Components
import SubjectRow from "./SubjectRow";

class SubjectList extends Component {
  render() {
    let subjectList = subjects.map(subject => {
      return <SubjectRow subject={subject} />;
    });

    return (
      <div>
        <table class="table">
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
