import React, { Component } from "react";
import subjects from "../Data/Subjects";
import { Redirect } from "react-router-dom";

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
    subjects.push(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit" class="btn btn-warning">
            Add Subject
          </button>
          <button class="btn btn-warning">Add Questions</button>
        </form>
      </div>
    );
  }
}

export default AddSubject;
