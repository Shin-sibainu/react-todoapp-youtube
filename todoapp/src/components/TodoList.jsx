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
            <i class="fas fa-check"></i>
            <i class="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
