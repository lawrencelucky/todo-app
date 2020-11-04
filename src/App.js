import React from 'react';
import './App.css';
import Header from './components/Header';
import FormInput from './components/FormInput';
import DisplayTasks from './components/DisplayTasks';

function App() {
  return (
    <div className='app'>
      <Header />
      <FormInput />
      <DisplayTasks />
    </div>
  );
}

export default App;
