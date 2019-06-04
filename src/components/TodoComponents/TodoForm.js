/*jshint esversion: 6 */
import React from 'react';

function TodoForm(props) {
  return (
    <form onSubmit={props.submitHandler}>
     <input
      value={props.task}
      placeholder="...todo"
      type="text"
      name="task"
      onChange={props.changeHandler}
      />
      <button type="submit">Add Todo</button>
      <button type="submit">Clear Completed</button>
    </form>
  );
}

export default TodoForm;
