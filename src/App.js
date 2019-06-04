/*jshint esversion: 6 */
import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

 const todoListStart = [
  {
    task: 'Wake Up!',
    id: 600,
    completed: false
  },
  {
    task: 'Shower',
    id: 700,
    completed: false
  },
  {
    task: 'Go to Work',
    id: 800,
    completed: false
  },
  {
    task: 'Work',
    id: 900,
    completed: false
  },
  {
    task: 'Drive home from work',
    id: 1700,
    completed: false
  },
  {
    task: 'Make Dinner',
    id: 1800,
    completed: false
  },
  {
    task: 'Study/attend Lambda class',
    id: 1900,
    completed: false
  },
  {
    task: 'Go to bed ',
    id: 2200,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todoListStart,
      task: '',
      id: Date.now()
    };
  }

changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.setState({
      todoList: [...this.state.todoList,
                { task: this.state.task }
      ],
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todoChangeList={this.state.todoList} />
        <TodoForm
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
          task={this.state.task}
        />
      </div>
    );
  }
}

export default App;
