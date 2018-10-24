import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Menu';

const homeComponent = lazy (() => import('./components/Home'));
const userComponent = lazy (() => import('./components/Users/User'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path="/" component={homeComponent}/>
              <Route path="/user" component={userComponent}/>
            </Suspense>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
