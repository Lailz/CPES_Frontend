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
      <div className="container my-5">
        <section className="card container-fluid mt-1 p-5 pt-0 bg-dark text-white">
          <h1 className="mt-3 p-3">Add Subject</h1>

          <form className="p-3">
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
            <div className="float-right">
              <button
                type="submit"
                className="btn btn-warning mr-3"
                onClick={this.handleSubmit}
              >
                Add Subject
              </button>
              <button
                className="btn btn-warning"
                onClick={this.handleSubmitTwo}
              >
                Add Questions
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default AddSubject;
