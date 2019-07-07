import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import NavBar from "./components/layout/NavBar";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import About from "./components/pages/About";

class App extends Component {
  state = {
    todos: [
      { id: uuid.v4(), title: "Take out the trash", completed: false },
      { id: uuid.v4(), title: "Dinner with wife", completed: false },
      { id: uuid.v4(), title: "Meeting with boss", completed: false }
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
    const todoNew = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ ...this.state.todos.push(todoNew) });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route
            exact
            path="/"
            render={props => (
              <main className="container">
                <AddTodo onAddTodoSubmit={this.handleAddTodoSubmit} />
                <Todos
                  todos={this.state.todos}
                  toggleComplete={this.handleToggleComplete}
                  onDelete={this.handleDelete}
                />
              </main>
            )}
          />
          <Route path="/about" component={About} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
