import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button'

import MainBar from './components/MainBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainBar></MainBar>
      </div>
    );
  }
}

export default App;
