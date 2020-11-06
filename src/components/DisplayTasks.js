import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import './DisplayTasks.css';

function DisplayTasks({ tasks, setTasks }) {
  const handleDoneTasks = doneTask => {
    const taskIndex = tasks.findIndex(task => task.id === doneTask.id);
    let newArray = [...tasks];
    newArray[taskIndex] = {
      ...newArray[taskIndex],
      done:
        newArray[taskIndex].done === false
          ? (doneTask.done = true)
          : (doneTask.done = false),
    };
    setTasks(newArray);
    // console.log(newArray);
    localStorage.setItem('tasks', JSON.stringify(newArray));
    // console.log();
  };

  const handleRemoveTask = removeTask => {
    const newArray = tasks.filter(task => task.id !== removeTask.id);
    setTasks(newArray);
    localStorage.setItem('tasks', JSON.stringify(newArray));
  };

  const displayDoneTasks = displayTask => {
    const lengthOfDoneTask = [];
    displayTask.forEach(task => {
      if (task.done) {
        lengthOfDoneTask.push(task.done);
      }
    });
    return lengthOfDoneTask.length;
  };

  return (
    <div className='displayTask'>
      <div className='displayTask__header'>
        <p className='displayTask__header--info'>
          {tasks.length > 0
            ? `There ${tasks.length > 1 ? 'are' : 'is'} ${tasks.length} ${
                tasks.length > 1 ? 'tasks' : 'task'
              }  available`
            : 'There are no available tasks'}
        </p>
        <p className='dsiplayTask__header--completed'>
          {tasks.length > 0 && tasks.length !== displayDoneTasks(tasks)
            ? `${displayDoneTasks(tasks)} of ${tasks.length} completed`
            : ''}
          {displayDoneTasks(tasks) === tasks.length && tasks.length > 0
            ? 'All tasks completed'
            : ''}
        </p>
      </div>

      <div className='displayTask__tasks'>
        {tasks.map((task, i) => (
          <div className='displayTask__task' key={i}>
            <label className='displayTask__task--label'>
              <input
                type='checkbox'
                checked={task.done}
                onChange={() => handleDoneTasks(task)}
              />
              <span
                className={`displayTask__task--text ${
                  task.done ? 'stroke' : ''
                }`}
              >
                {task.todo}
              </span>
            </label>

            <HighlightOffIcon onClick={() => handleRemoveTask(task)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayTasks;
