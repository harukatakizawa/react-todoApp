import React, { Component } from 'react';
import './App.css';

const todos = [];

const TodoItem = props => {
  return　(
    <li key={props.todo.id}>
       {props.todo.title}
    </li>
  );
}

const TodoList = props => {
  const todos = props.todos.map((todo) => {
    return (
      <TodoItem 
      key={todo.id} 
      todo={todo}
       />
    );
  });
  return (
    <ul>
      {todos}
    </ul>
  );
}

const TodoForm = props => {
  return (
    <form onSubmit={props.addTodo}>
      <input type="text" value={props.item} onChange={props.updateItem}/>
      <input type="submit" value="追加"/>
    </form>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      item: '',
      id: 0
    };
  }

  addTodo = e => {
    e.preventDefault();
    if (this.state.item.trim() === '') {
      return;
    }
    const item = {
      id: this.state.id += 1,
      title: this.state.item
    };
    const todos = this.state.todos.slice();
    todos.push(item);
    this.setState({
      todos: todos,
      item: '',
    });
  }

  updateItem = e => {
    this.setState({
      item: e.target.value
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Todoリスト</h1>
        <TodoForm
          item={this.state.item}
          updateItem={this.updateItem}
          addTodo={this.addTodo}
        />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

