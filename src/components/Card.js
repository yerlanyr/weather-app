import React, { Component } from 'react';
import './Card.scss';
export default class Card extends Component {
  render() {
    const {
      city, country, temperature, conditions,
      lowest, highest, feeling, wind, humidity, days, noCity, close
    } = this.props;
    const round = num => num ? num.toFixed(0) : '';
    return <div className={`card ${noCity ? `card--hidden` : ``}`} >
      <div className="card__container">
        <div className="card__location">{city} - {country}</div>
        <div className="card__weather">{temperature}°C {conditions}</div>
        <div className="card__two_cols">
          <div className="card__two_col">
            <div className="card__lower-bound">
              <div className="card__lower-bound-icon"></div>{round(lowest)}°
            </div>
            <div className="card__upper-bound">
              <div className="card__upper-bound-icon"></div>{round(highest)}°
            </div>
          </div>
          <div className="card__two_col">
            <div className="card__sense">Felling <strong>{feeling}°C</strong></div>
          </div>
        </div>
        <div className="card__two_cols">
          <div className="card__two_col">
            <div className="card__wind">Wind <strong>{wind}km/h</strong></div>
          </div>
          <div className="card__two_col">
            <div className="card__humidity">Humidity <strong>{humidity ? humidity.toFixed(0) : ''}%</strong></div>
          </div>
        </div>
      </div>
      <div className="card__close" onClick={close}></div>
      <div className="card__line"></div>
      <div className="card__container">
        <div className="card-days">
          {days ? days.map(x => <div key={x.name} className="card-day">
            <div className="card-day__name">{x.name}</div>
            <div className="card-day__temperature">{x.lowest}° {x.highest}°</div>
          </div>) : ''}
        </div>
      </div>
    </div>;
  }
}