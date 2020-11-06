import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import './FormInput.css';

function FormInput({ task, setTask, tasks }) {
  const handleSubmit = e => {
    e.preventDefault();
    let id;
    if (tasks.length <= 0) {
      id = tasks.length + 1;
    } else if (tasks.length > 0) {
      id = tasks[tasks.length - 1].id + 1;
    }

    let taskObject = {
      todo: task,
      done: false,
      id,
    };

    if (taskObject.todo.length) {
      tasks.push(taskObject);
      setTask('');
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      alert(`You shouldn't submit an empty task!`);
    }
  };

  return (
    <div className='formInput'>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          className='formInput__input'
          placeholder='Write down a task!'
          autoFocus
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button
          className='formInput__button'
          onClick={handleSubmit}
          type='submit'
        >
          <CheckCircleOutlineIcon />
        </button>
      </form>
    </div>
  );
}

export default FormInput;
