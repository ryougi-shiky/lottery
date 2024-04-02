import React from 'react';
import Lottery from './component/Lottery';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Welcome to the lottery app!
        </h1>
      </header>
      <Lottery />
    </div>
  );
}

export default App;
