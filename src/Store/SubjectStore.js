import { decorate, observable } from "mobx";

import allSubjects from "../Data/Subjects";
import allQuestions from "../Data/Questions";

class SubjectStore {
  constructor() {
    this.subjects = allSubjects;
    this.questions = allQuestions;
    this.subject = null;
    this.questionSet = null;
  }

  fetchSubjectByName(name) {
    this.subject = this.subjects.find(subject => {
      return subject.subjectName === name;
    });
  }

  deleteSubject(deletedSubject) {
    this.subjects = this.subjects.filter(subject => subject !== deletedSubject);
  }

  fetchQuestionSetBySubject(subjectName) {
    this.questionSet = this.questions.find(questionSet => {
      return questionSet.subject === subjectName;
    });
  }

  deleteQuestion(deletedQuestion) {
    this.questionSet = this.questionSet.questions.filter(
      question => question !== deletedQuestion
    );
  }
}

decorate(SubjectStore, {
  subjects: observable,
  subject: observable,
  questions: observable,
  questionSet: observable
});

export default new SubjectStore();
