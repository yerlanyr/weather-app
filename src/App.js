import React, { Component } from 'react';
import './App.css';
import CardConnected from './components/CardConnected';
import {Provider} from 'react-redux';
import CapitalsConnected from './components/CapitalsConnected';
import SearchConnected from './components/SearchConnected';
import store, {setCitiesAction} from './store';
class App extends Component {
  constructor(){
    super();
    fetch('/api/search').then(x => x.json()).then(x => store.dispatch(setCitiesAction(x)));
  }
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="title">Weather app</div>
          <CardConnected/>
          <SearchConnected/>
          <CapitalsConnected/>
        </div>
      </Provider>
    );
  }
}

export default App;
