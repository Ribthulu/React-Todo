/*jshint esversion: 6 */
import React from 'react';

function List(props) {
  return (
    <div className="list-card">
      <div className="list-info">
        <h3>{props.list.name}</h3>
        <p>
          <strong>task:</strong> {props.list.task}
        </p>
        <p>
          <strong>id:</strong> {props.list.id}
        </p>
        <p>
          <strong>completed</strong> {props.list.completed}
        </p>
      </div>
    </div>
  );
}

export default List;
