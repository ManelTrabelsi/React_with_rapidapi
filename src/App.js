import React from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook';

class App extends React.Component
{
  render()
  {
    return (
      <div className="App">
        <Facebook />
      </div>
    );
  }
}


export default App;
