import React, { Component } from "react";
class AddTodo extends Component {
  state = {
    title: ""
  };
  onAddTodoChange = t => {
    this.setState({ [t.target.name]: [t.target.value] });
  };
  onAddTodoSubmit = e => {
    e.preventDefault();
    this.props.onAddTodoSubmit(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.onAddTodoSubmit}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              name="title"
              id="title"
              placeholder="Add Todo here..."
              value={this.state.title}
              onChange={this.onAddTodoChange}
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary btn-sm">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddTodo;
