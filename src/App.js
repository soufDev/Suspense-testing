import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu color={'blue'} inverted size={'huge'}>
          <Menu.Item>Home</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default App;
