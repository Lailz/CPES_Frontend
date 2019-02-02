import React, { Component } from "react";
import { observer } from "mobx-react";

// Components
import SubjectRow from "./SubjectRow";

import store from "../Store/SubjectStore";

class SubjectList extends Component {
  render() {
    let subjectList = store.subjects.map(subject => {
      return <SubjectRow subject={subject} key={subject.subjectName} />;
    });

    return (
      <div className="p-5">
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

export default observer(SubjectList);
