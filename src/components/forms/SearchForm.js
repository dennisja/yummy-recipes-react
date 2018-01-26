import React, {Component} from 'react';

class SearchForm extends Component{
    static initialState= {
        q: "",
        per_page: 4,
        page: 1,
    };

    state = SearchForm.initialState;

    render(){
        return(
            <form>
                <div className="input-field">
                    <input type="search" />
                </div>
            </form>
        )
    }
}