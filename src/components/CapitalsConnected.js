import {connect} from 'react-redux';
import Capitals from './Capitals';
import {setCurrentCityAction} from '../store';
export default connect(({cities}) => ({cities}), dispatch => ({cityClick : (city) => {
    dispatch(setCurrentCityAction(city));
}}))(Capitals);