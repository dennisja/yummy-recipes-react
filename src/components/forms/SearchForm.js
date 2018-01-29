import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component{
    static initialState= {
        q: "",
    };

    state = SearchForm.initialState;

    handleSearchInputSubmit = (event)=>{
        event.preventDefault();
        this.props.getSearchInput(this.state);
    }

    handleSearchInputChange = (event)=>{
        const {name, value} = event.target;
        this.setState({
            [name]:value,
        });
    }

    getStateOnKeyup = event=>{
        this.props.getSearchInput(this.state);
    }
    

    render(){
        const {q} = this.state;
        const { handleSearchInputBlur, handleSearchInputFocus, onMouseEnter, onMouseLeave} = this.props;
        
        return(
            <form onSubmit={this.handleSearchInputSubmit} id="searchForm">
                <div className ="row"  onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
                    <div className="input-field col s9 m8 offset-m1 ">
                        <label htmlFor="q">What are you looking for?</label>
                        <input 
                            type="search" 
                            name="q" value={q} id="q" 
                            onChange={this.handleSearchInputChange}
                            onFocus={handleSearchInputFocus}
                            onBlur={handleSearchInputBlur}
                            onKeyUp={this.getStateOnKeyup}/>
                    </div>
                    <div className="input-field col s2 m2">
                        <button className="btn btn-small orange white-text" type="submit"><i className="fa fa-search" /></button>
                    </div>
                </div>
            </form>
        )
    }
}

SearchForm.propTypes = {
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    handleSearchInputBlur: PropTypes.func,
    handleSearchInputFocus: PropTypes.func,
}
export default SearchForm;