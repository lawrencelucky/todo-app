import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import './FormInput.css';

function FormInput({ task, setTask, tasks }) {
  const handleSubmit = () => {
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

    tasks.push(taskObject);
    setTask('');
  };

  return (
    <div className='formInput'>
      <input
        className='formInput__input'
        placeholder='Write down a task!'
        autoFocus
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <CheckCircleOutlineIcon onClick={handleSubmit} />
    </div>
  );
}

export default FormInput;
