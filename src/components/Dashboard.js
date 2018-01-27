import React, {Component} from 'react';
import {notify} from 'react-notify-toast';

import Categories from './categories/Categories';
import SearchForm from './forms/SearchForm';
import FormCard from './forms/FormCard';

class Dashboard extends Component {
    state={
        displaySideBar: true,
    }

    handleSearchInputFocus = (event)=>{
        // alert('Yeah')
        this.setState({
            displaySideBar: false,
        })
    }

    handleSearchInputBlur = event=>{
        // alert('blur')
        this.setState({
            displaySideBar: true,
        })
    }

    handleSearch = data=>{
        console.log(JSON.stringify(data))
        if(data.q.length === 0){
            notify.show(" Empty Balls ", "success", 40000)
        }
    }

    render(){
        const {displaySideBar} = this.state;

        return (
        <div className="row">
            <div className={displaySideBar?"col s3 hide-on-small-only":"hide"}>
                SideBar here, date one side
            </div>
            <div className={displaySideBar?"col s9": "col s12"} id="search-form-holder">
                <FormCard 
                    form={<SearchForm 
                                handleSearchInputFocus={this.handleSearchInputFocus}
                                handleSearchInputBlur={this.handleSearchInputBlur}
                                getSearchInput={this.handleSearch} />}
                    title="Search for users, recipes and categories" />
            </div>
        </div>
    );
}
};

export default Dashboard;
