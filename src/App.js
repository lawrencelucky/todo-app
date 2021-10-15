import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FormInput from './components/FormInput';
import DisplayTasks from './components/DisplayTasks';

// Working on my github

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  return (
    <div className='app'>
      <Header />
      <FormInput task={task} setTask={setTask} tasks={tasks} />
      <DisplayTasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
