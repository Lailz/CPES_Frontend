import React, { Component } from "react";

import QuestionList from "./QuestionList";

import allSubjects from "../Data/Subjects";
import allQuestions from "../Data/Questions";

class SubjectDetail extends Component {
  state = {
    subjects: allSubjects,
    questions: allQuestions
  };

  render() {
    const subjectName = this.props.match.params.subjectName;
    let subject = this.state.subjects.find(subject => {
      return subject.subjectName === subjectName;
    });
    let questions = this.state.questions.find(subjectQuestions => {
      return subjectQuestions.subject === subjectName;
    });
    return (
      <div>
        <h2>{subject.subjectName}</h2>
        <p>{subject.description}</p>
        <QuestionList questions={questions} />
      </div>
    );
  }
}

export default SubjectDetail;
