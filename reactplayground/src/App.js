import React from 'react';
import logo from './logo.svg';
import './App.css';


function Grid() {
  return (
    <div className="column d-4 bg-dark">test</div>
  );
}


function App() {
  return (
    <div className="row border">
      <div className="col-4 border btn-primary">
        <p>test</p>
        <p>testing2</p>
      </div>
    </div>
  );
}

export default App;
