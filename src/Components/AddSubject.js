import React, { Component } from "react";
import subjects from "../Data/Subjects";

class AddSubject extends Component {
  state = {
    subject: "Subject",
    description: "",
    questions: []
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    subjects.push(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Subject</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="description"
                placeholder="Subject"
                value={this.state.subject}
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
        </form>
      </div>
    );
  }
}

export default AddSubject;
