import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import './DisplayTasks.css';

function DisplayTasks() {
  return (
    <div className='displayTask'>
      <p>There are no available tasks.</p>

      <div className='displayTask__tasks'>
        <label class='displayTask__task'>
          <div>
            <input type='checkbox' />
            <span className='displayTask__task--text'>
              Pick children at school
            </span>
          </div>

          <HighlightOffIcon />
        </label>

        <label class='displayTask__task'>
          <div>
            <input type='checkbox' />
            <span className='displayTask__task--text'>
              Pick children at school
            </span>
          </div>

          <HighlightOffIcon />
        </label>
        <label class='displayTask__task'>
          <div>
            <input type='checkbox' />
            <span className='displayTask__task--text'>
              Pick children at school
            </span>
          </div>

          <HighlightOffIcon />
        </label>
        <label class='displayTask__task'>
          <div>
            <input type='checkbox' />
            <span className='displayTask__task--text'>
              Pick children at school
            </span>
          </div>

          <HighlightOffIcon />
        </label>
        <label class='displayTask__task'>
          <div>
            <input type='checkbox' />
            <span className='displayTask__task--text'>
              Pick children at school
            </span>
          </div>

          <HighlightOffIcon />
        </label>
      </div>
    </div>
  );
}

export default DisplayTasks;
