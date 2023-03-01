import React from "react";

function crudDates() {
  const tasks = [
    {
      task: "addDates",
      description: "add dates to database",
    },
    {
      task: "deleteDates",
      description: "delete dates from database",
    },
  ];

  const Button = ({ task }) => (
    <div className="flex-1 mb-5">
      <button
        className="border px-8 py-2 mt-5 mr-8 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover-darker"
        onClick={async () => {
          await fetch("/api/utils", {
            body: JSON.stringify({
              task: task.task,
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
        }}>
        {task.description}
      </button>
    </div>
  );

  return (
    <div className="mt-10 ml-20">
      <h2 className="mb-10 text-xl">
        Please take a choose
      </h2>
      {tasks.map((task, index) => (
        <Button key={index} task={task} />
      ))}
    </div>
  );
}

export default crudDates;
