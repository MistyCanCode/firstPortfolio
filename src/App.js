import './misty.css';
import './App.css';
import './misty.js';
import Site from './site';
import BackToTopState from './site';
import React from 'react'

function App() {
  return (
    <div className="App">
      <BackToTopState>
            <Site />
        </BackToTopState>
    </div>
  );
}

export default App;
