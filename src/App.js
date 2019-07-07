import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import NavBar from "./components/layout/NavBar";
import AddTodo from "./components/AddTodo";

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
    const todos = [...this.state.todos.filter(todo => todo.id !== id)];
    this.setState({ todos });
  };

  handleAddTodoSubmit = title => {
    console.log("New todo: ", title);
    const newId = this.state.todos.length + 1;
    const todoNew = {
      id: newId,
      title,
      completed: false
    };
    this.setState({ ...this.state.todos.push(todoNew) });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <AddTodo onAddTodoSubmit={this.handleAddTodoSubmit} />
          <Todos
            todos={this.state.todos}
            toggleComplete={this.handleToggleComplete}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
