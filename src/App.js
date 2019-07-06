import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "Take out the trash", completed: false },
      { id: 2, title: "Dinner with wife", completed: false },
      { id: 3, title: "Meeting with boss", completed: false }
    ]
  };

  handleToggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  handleDelete = id => {
    const todos = [...this.state.todos].filter(todo => todo.id !== id);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          markComplete={this.handleToggleComplete}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
