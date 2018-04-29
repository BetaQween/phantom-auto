import React, { Component } from 'react';
import './App.css';
import ComponentTest from './components/ComponentTest';
import  CarsList  from './containers/cars-list';
import  CarDetail  from './containers/car-detail';
import WebGLComponent from './components/WebGLComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Component Parent</h3>
        <ComponentTest />
        <hr />
        <h3>Dinamic Data from "containers":</h3>
        <p>Click on car</p>
        <CarsList />
        <hr />
        <h3>Data details from "containers":</h3>
        <CarDetail />
        <hr />
        <h3>WebGL:</h3>
        <WebGLComponent />
      </div>
    );
  }
}

export default App;
