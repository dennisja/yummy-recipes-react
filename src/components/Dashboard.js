import React, {Component} from 'react';
import $ from 'jquery';
import {notify} from 'react-notify-toast';

import Categories from './categories/Categories';
import SearchForm from './forms/SearchForm';
import FormCard from './forms/FormCard';
import SearchRequests from '../helpers/Search';
import CategoryRequest from '../helpers/Categories';
import RecipesRequest from '../helpers/Recipes';

import {Category} from './categories/Categories';
import RecipesList from './recipes/RecipeList';
import RecipeList from './recipes/RecipeList';
import ProfileCard from './profile/ProfileCard';
import { RecipeModel } from './recipes/Recipes';

const UsersList = props=>{
    const { users } = props;
    const userItems = users.map(user=>(
        <div className="col s12 m6 l4" key={user.id} >
            <ProfileCard userData={user}/>
        </div>
    ));

    return(
        <div className="row">
            {userItems}
        </div>
    )
}

const CategoryList = props=>{
    const {categories, deleteCategory} = props;
    const categoryItems = categories.map(category => {
        return (<Category category={category} key={category.id} deleteCategory={deleteCategory}/>)
    });

    return (
        <ul className="collapsible popout" data-collapsible="accordion">
            {categoryItems}
        </ul>
    );
}

const Pages = props=>{
    const {totalPages, activePage, handlePageClick} = props;
    const items = new Array(totalPages).fill(1);
    const pageItems = items.map((item, index)=>(
        <li className={(activePage===index+1) ?"active": ""} key={index}>
            <a onClick={e=>handlePageClick(e, index+1, totalPages)}>
                { index+1 }
            </a>
        </li>
    ));

    if(!totalPages){
        return null;
    }

    return (
    <ul className="pagination">
        <li className={activePage===1?"disabled":""} disabled={activePage <= 1} onClick={e=>handlePageClick(e, activePage-1, totalPages)}>
            <a disabled={activePage <= 1}><i className="fa fa-chevron-left"/></a>
        </li>
            {pageItems}
        <li className={activePage===totalPages?"disabled":""} disabled={activePage >= totalPages} onClick={e=>handlePageClick(e, activePage+1, totalPages)}>
            <a disabled={activePage >= totalPages}><i className="fa fa-chevron-right"/></a>
        </li>
    </ul>);
}

const SearchResults = (props)=>(
    <div className="card" id="search-results">
    <div className="card-content" id="search-results-header">
        <header className="center-align orange white-text">
            <h3>Search Results</h3>
        </header>
        <div className="row">
            <div className="col s4 m3 orange-text"><em>Total Results: {props.total_results}</em></div>
            <div className="col s4 m3 orange-text"><em>Recipes: {props.recipes_count}</em></div>
            <div className="col s4 m3 orange-text"><em>Categories: {props.categories_count}</em></div>
            <div className="col s4 m3 orange-text"><em>Users: {props.users_count}</em></div>
        </div>
    </div>
    <div className="card-tabs">
      <ul className="tabs tabs-fixed-width">
        <li className="tab"><a href="#recipesTab">Recipes</a></li>
        <li className="tab"><a className="active" href="#categoriesTab">Categories</a></li>
        <li className="tab"><a href="#usersTab">Users</a></li>
      </ul>
    </div>
    <div className="card-content" id="search-content">
      <div id="recipesTab">
        {
            props.recipes.length
            ?<RecipeList recipes={props.recipes} deleteRecipe={props.deleteRecipe} viewRecipe={props.viewRecipe}/>
            :<p className="center-align">No matching recipes on this page </p>
        }
      </div>
      <div id="categoriesTab">
        {
            props.categories.length
            ?<CategoryList categories={props.categories} deleteCategory={props.deleteCategory}/>
            :<p className="center-align"> No matching categories on this page </p>
        }
      </div>
      <div id="usersTab">
        {
            props.users.length
            ? <UsersList users={props.users} />
            : <p className="center-align">No matching users on this page </p>
        }
      </div>
    </div>
  </div>
);


class Dashboard extends Component {
    state={
        displaySideBar: true,
        results: null,
        searchData: null,
        displayRecipe: false,
        selectedRecipe: null,
        page: 1,
    }

    getSearchResults(searchData){
        // searchData["per_page"] = 1;
        SearchRequests.search(searchData)
        .then(response=>{
            this.setState({
                results: response.data,
            });
        })
        .catch(error=>{
            if(error.response){
                console.log(error.response)
            }else if(error.request){
                console.log(error.request)
            }
        })
    }

    handleSearchInputFocus = (event)=>{
        this.setState({
            displaySideBar: false,
            displayRecipe: false,
        })
    }

    handleSearchInputBlur = event=>{
        this.setState({
            displaySideBar: true,
        })
    }

    handleSearch = data=>{
        if(data.q.length === 0){
            notify.show("Search term is empty", "warning", 4000)
        }else{
            this.setState({
                searchData: data
            });
            this.getSearchResults(data);
        }
    }

    deleteRecipe = (event, recipeId)=>{
        event.preventDefault();
        RecipesRequest.deleteRecipe(recipeId)
        .then(response => {
            window
            .Materialize
            .toast(response.data.message, 4000)
            this.getSearchResults(this.state.searchData);
        })
        .catch(error => {
            if (error.response) {
                const { status, data } = error.response;
                window.Materialize.toast(data.errors[0], 5000);
            } else if (error.request) {
                window.Materialize.toast("Request Can't be made", 4000);
            }
        })
    }

    viewRecipe = (event, recipeId)=>{
        event.preventDefault();
        const {recipes} = this.state.results;

        for (let recipe of recipes){
            if (recipe.id === recipeId){
                this.setState({
                    selectedRecipe: recipe,
                    displayRecipe: true,
                })
                break;
            }
        }
    }

    deleteCategory = (event, categoryId)=>{
        event.preventDefault();
        const {searchData} = this.state;
        CategoryRequest.deleteCategory(categoryId)
        .then(response=>{
            //alert user that he has successfully deleted a recipe
            window.Materialize.toast(response.data.message, 4000);
            this.getSearchResults(searchData);
        })
        .catch(error=>{
            if(error.response){
                const { status, data } = error.response;
                window.Materialize.toast(data.errors[0], 4000);
            }else{
                window.Materialize.toast("Request Can't be made", 4000);
            }
        })
    }

    componentDidUpdate(){
        if(this.state.results){
            $('ul.tabs').tabs();
            $('.collapsible').collapsible();
        }

        if(this.state.displayRecipe){
            $('.modal').modal();
            $('#recipeModal').modal('open');
        }
    }

    handleSearchCardMouseLeave = (event)=>{
        this.handleSearchInputBlur(event);
    }

    handleSearchCardMouseEnter = (event)=>{
        this.handleSearchInputFocus(event);
    }

    handlePageClick = (event, page, totalPages)=>{
        if(page < 1 || page > totalPages){
            window.Materialize.toast("You are trying to access a page that doesnot exist", 3000);
            return ;
        }
        const {searchData} = this.state;
        searchData["page"] = page;
        this.setState({
            searchData,
            page,
        });
        this.getSearchResults(searchData);
    }

    render(){
        const {displaySideBar, results, displayRecipe, selectedRecipe,page} = this.state;

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
                                getSearchInput={this.handleSearch}
                                onMouseLeave={this.handleSearchCardMouseLeave}
                                onMouseEnter={this.handleSearchCardMouseEnter}/>}
                    title="Search for users, recipes and categories"/>
                {
                    results?
                    <div>
                    <SearchResults 
                        {...results}
                        deleteCategory={this.deleteCategory}
                        deleteRecipe={this.deleteRecipe}
                        viewRecipe={this.viewRecipe} />
                    <Pages totalPages={results.total_pages} activePage={page} handlePageClick={this.handlePageClick} />
                    </div>
                    : null
                }
                {
                    displayRecipe?
                    <RecipeModel recipe={selectedRecipe} />
                    :null
                }
            </div>
        </div>
    );
}
};

export default Dashboard;
