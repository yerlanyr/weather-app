import React, { Component } from 'react';
import './App.css';
import CardConnected from './components/CardConnected';
import {Provider} from 'react-redux';
import CapitalsConnected from './components/CapitalsConnected';
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
          <div className="search-bar">
            <div className="search-bar__group">
              <input className="search-bar__input" placeholder="Insira aqui o nome da cidade"/>
              <div className="search-bar__icon"></div>
            </div>
          </div>
          <CapitalsConnected/>
        </div>
      </Provider>
    );
  }
}

export default App;
