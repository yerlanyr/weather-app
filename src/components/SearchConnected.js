import {connect} from 'react-redux';
import Search from './Search';
import { setCitiesAction } from '../store';
export default connect(() => ({}), dispatch => ({
    search: (q) => {
        fetch('/api/search?q=' + encodeURI(q)).then(x => x.json()).then(cities => {
            dispatch(setCitiesAction(cities));
        });
    }
}))(Search);