import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">Weather app</div>
        <div className="card">
        <div className="card__close"></div>
          <div className="card__location">Niteroi, RJ - Brasil</div>
          <div className="card__weather">20°C Nublado</div>
          <div className="card__lower-bound"> 
            <div className="card__lower-bound-icon"></div>16°
          </div>
          <div className="card__upper-bound">
            <div className="card__upper-bound-icon"></div>16°
          </div>
          <div className="card__sense">Sensacao <strong>19°C</strong></div>
          <div className="card__wind">Vento <strong>18km/h</strong></div>
          <div className="card__humidity">Humidade <strong>89%</strong></div>
          <div className="card__line"></div>
          <div className="card-days">
          {[1,2,3,4,5].map(x => <div key={x} className="card-day">
            <div className="card-day__name">Terca</div>
            <div className="card-day__temperature">18° 26°</div>
          </div>)}
          </div>
        </div>
        <div className="search-bar">
          <div className="search-bar__group">
            <input className="search-bar__input" placeholder="Insira aqui o nome da cidade"/>
            <div className="search-bar__icon"></div>
          </div>
        </div>
        <div className="capitals">
          <div className="capitals__title">Capitais</div>
          <div className="capitals-table">
            <div className="capitals-table__row">
              <div className="capitals-table__item">
                <div className="capitals-table__th">Min</div>
                <div className="capitals-table__th">Max</div>
              </div>
              <div className="capitals-table__item">
                <div className="capitals-table__th">Min</div>
                <div className="capitals-table__th">Max</div>
              </div>
            </div>
          </div>
          <div className="capitals-table__row">
            {[1,2,3,4,5,6,7,8,9,10].map(x => 
            <div key={x} className="capitals-table__item">
              <div className="capitals-table__td">18°</div>
              <div className="capitals-table__td">18°</div>
              <div className="capitals-table__td">Rio de Janeiro</div>
            </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
