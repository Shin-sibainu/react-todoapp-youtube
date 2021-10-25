import React from "react";

export const TodoList = () => {
  return (
    <div className="todoList">
      <div className="todos">
        <div className="todo">
          <div className="todoText">
            <span>something</span>
          </div>
          <div className="icons">
            <i className="fas fa-check"></i>
            <i className="fas fa-trash"></i>
          </div>
        </div>
        <div className="todo">
          <div className="todoText">
            <span>something</span>
          </div>
          <div className="icons">
            <i className="fas fa-check"></i>
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
