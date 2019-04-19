import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
// import uuid from 'uuid';
import About from "./components/pages/About";
import axios from 'axios';

class App extends Component {
state = {
 todos: []
}

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
       this.setState({todos:res.data})
      })
}

  markComplete = (id) => {
  this.setState({
    todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  });
  }

  DelTodo = (id) => {
  axios.delete('https://jsonplaceholder.typicode.com/todos/${id}').then(res => {
    this.setState({
      todos:[...this.state.todos.filter(todo => todo.id !== id)]
    });
  })

}

addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {title:title,completed:false}).then(res => {
    this.setState({todos: [...this.state.todos,res.data]})
  });

};

  render() {
    return (
        <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" render={ props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos markComplete={this.markComplete}  DelTodo={this.DelTodo} todos={this.state.todos}/>
            </React.Fragment>
        )} />

        <Route path="/About" component={About}/>
      </div>
        </Router>
    );
  }
}

export default App;
