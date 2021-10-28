import React from "react";

export const TodoList = ({ taskList, setTaskList }) => {
  const handleDone = (id) => {
    /* 現在のタスクに取り消し線を追加する。 */
    setTaskList(
      taskList.map((task) => {
        // console.log("a");
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const handleDelete = (id) => {
    /* 現在のタスクを削除する。 */
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => (
          <div
            className={`todo ${task.completed ? "completed" : ""}`}
            key={index}
          >
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button onClick={() => handleDone(task.id)}>
                <i className="fas fa-check"></i>
              </button>
              <button onClick={() => handleDelete(task.id)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
