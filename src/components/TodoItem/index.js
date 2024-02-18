import React from 'react';
import './index.css';

const TodoItem = props => {
  const { todoDetails, deleteTodo } = props;
  const { id, title } = todoDetails;

  const onDeleteTodo = () => {
    deleteTodo(id); // Pass the id to deleteTodo function
  };

  return (
    <div className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
