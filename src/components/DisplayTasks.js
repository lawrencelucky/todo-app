import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import './DisplayTasks.css';

function DisplayTasks() {
  return (
    <div className='displayTask'>
      <p>There are no available tasks.</p>

      <div className='displayTask__tasks'>
        <div className='displayTask__task'>
          <label class='displayTask__task--label'>
            <input type='checkbox' />
            <span className='displayTask__task--text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              temporibus excepturi sunt eos quas molestias? Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Adipisci totam dignissimos
              est fugit optio eius earum ducimus eos ut assumenda!
            </span>
          </label>

          <HighlightOffIcon />
        </div>

        <div className='displayTask__task'>
          <label class='displayTask__task--label'>
            <input type='checkbox' />
            <span className='displayTask__task--text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              temporibus excepturi sunt eos quas molestias? Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Adipisci totam dignissimos
              est fugit optio eius earum ducimus eos ut assumenda!
            </span>
          </label>

          <HighlightOffIcon />
        </div>

        <div className='displayTask__task'>
          <label class='displayTask__task--label'>
            <input type='checkbox' />
            <span className='displayTask__task--text'>
              Pick children at school
            </span>
          </label>

          <HighlightOffIcon />
        </div>

        <div className='displayTask__task'>
          <label class='displayTask__task--label'>
            <input type='checkbox' />
            <span className='displayTask__task--text'>
              Pick children at school
            </span>
          </label>

          <HighlightOffIcon />
        </div>

        <div className='displayTask__task'>
          <label class='displayTask__task--label'>
            <input type='checkbox' />
            <span className='displayTask__task--text'>
              Pick children at school
            </span>
          </label>

          <HighlightOffIcon />
        </div>
      </div>
    </div>
  );
}

export default DisplayTasks;
