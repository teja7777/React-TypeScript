import React from 'react';
import './App.css';
import InputFiled from './Components/InputFiled';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>TASKIFY </span>
      <InputFiled />
    </div>
  );
}

export default App;
