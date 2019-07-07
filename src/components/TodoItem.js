import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  completedStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  deleteStyle = () => {
    return {
      padding: "5px 10px",
      float: "right",
      background: "#ff0000",
      color: "#fff",
      border: "none",
      borderBottom: "1px #ccc dotted"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    const { toggleComplete } = this.props;
    return (
      <div style={this.completedStyle()}>
        <p>
          <input
            className="m-2"
            type="checkbox"
            onChange={toggleComplete.bind(this, id)}
          />
          {title}
          <button
            className="close"
            aria-label="Close"
            onClick={this.props.onDelete.bind(this, id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
