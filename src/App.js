import React, {Component} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
//import Header from './Header';
import Todos from './Todos';
import AddTodo from './AddTodo';
//import About from './About';
import {v4 as uuidv4} from 'uuid'
class App extends Component {
  state = {
    todos: []
  }
  // Toggles todo completion state
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  //Delete Todo
  delete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  //Add Todo
  addTodo = (title) => {

    //a variable that creates a new Todo object, called in the this.setState method below
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    //the '...' is a spreader method that copies this.state.todos as a new object, then newTodo changes the keys inside the object
    this.setState({ todos: [...this.state.todos, newTodo] });
  }


  render() {
  return (
    //from BrowserRouter, allows the creation of multiple pages. Create new pages with "<Route path >"
  <Router>
    <div className="App">
    <div className="container container-fluid">
    <Route exact path="/" render={props => (
      <React.Fragment>
        <AddTodo addTodo={this.addTodo}/>
         <Todos todos={this.state.todos} markComplete={this.markComplete}delete={this.delete} />
      </React.Fragment>
    )} />
    </div>
    </div>
    </Router>
  );
  }
}

export default App;
