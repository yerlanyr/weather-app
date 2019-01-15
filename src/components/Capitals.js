import React from 'react';
import './Capitals.css';
export default ({cities, cityClick}) => (<div className="capitals">
<div className="capitals__title">Capitals</div>
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
  {cities ? cities.map(city => 
  <div key={city.city} className="capitals-table__item" onClick={() => cityClick(city)}>
    <div className="capitals-table__td">{city.weather.currently.temperature}°</div>
    <div className="capitals-table__td">{city.weather.currently.apparentTemperature}°</div>
    <div className="capitals-table__td">{city.city}</div>
  </div>
  ) : ''}
</div>
</div>);