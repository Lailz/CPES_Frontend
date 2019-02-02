import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import store from "../Store/SubjectStore";

class AddSubject extends Component {
  state = {
    subjectName: "",
    description: "",
    questions: []
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    store.subjects.push(this.state);
    this.props.history.push(`/subjects/${this.state.subjectName}`);
  };

  handleSubmitTwo = event => {
    event.preventDefault();
    store.subjects.push(this.state);
    this.props.history.push(`/addQuestion/${this.state.subjectName}`);
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Subject</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="subjectName"
                placeholder="Subject"
                value={this.state.subjectName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-warning"
            onClick={this.handleSubmit}
          >
            Add Subject
          </button>
          <button class="btn btn-warning" onClick={this.handleSubmitTwo}>
            Add Questions
          </button>
        </form>
      </div>
    );
  }
}

export default AddSubject;
