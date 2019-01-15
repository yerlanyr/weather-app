import React,{Component} from 'react';
import './Search.css';
export default class Search extends Component {
    render(){
        const {search} = this.props;
        let inp;
        return <form className="search-bar" onSubmit={(evt) => { 
            evt.preventDefault();
            search(inp.value);
        }}>
            <div className="search-bar__group">
                <input ref={x => inp = x} className="search-bar__input" placeholder="Insira aqui o nome da cidade"/>
                <button type="submit" className="search-bar__icon" ></button>
            </div>
        </form>; 
    }
}