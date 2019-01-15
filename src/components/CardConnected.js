import {connect} from 'react-redux';
import Card from './Card';
import { setCurrentCityAction } from '../store';
export default connect(({currentCity}) => (currentCity ? {
    city: currentCity.city,
    country: currentCity.country,
    temperature: currentCity.weather.currently.temperature,
    conditions: currentCity.weather.currently.summary,
    lowest: currentCity.weather.currently.temperature - 1,
    highest: currentCity.weather.currently.temperature + 1,
    feeling: currentCity.weather.currently.apparentTemperature,
    wind: currentCity.weather.currently.windSpeed,
    humidity: currentCity.weather.currently.humidity * 100,
    days: currentCity.weather.daily.data.map(x => ({
        name: new Date(x.time * 1000).toLocaleDateString('en-US', {weekday: 'short'}),
        lowest: x.temperatureLow,
        highest: x.temperatureHigh
    })).slice(0, 4)
}  : {noCity: true}), dispatch => ({close: () => dispatch(setCurrentCityAction(null)) }))(Card);