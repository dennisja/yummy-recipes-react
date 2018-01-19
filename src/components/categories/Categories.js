import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TimeAgo from 'react-timeago';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import PreLoader from '../Utilities';
import CategoryRequest from '../../helpers/Categories';

const Category = (props)=>{
    const {name, id, owner_details, created, edited } = props.category;

    return(
        <li>
            <div className="collapsible-header">{ name }</div>
            <div className="collapsible-body white ">
            <table>
                <tbody>
                    <tr>
                        <td>
                            Category Name:
                        </td>
                        <td>
                            {name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Owner:
                        </td>
                        <td>
                            {`${owner_details.firstname} ${owner_details.lastname}`}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Created:
                        </td>
                        <td>
                            <TimeAgo date={created} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Edited:
                        </td>
                        <td>
                            <TimeAgo date={edited} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="center-align">
                <Link to={`edit-category/${id}`} className="btn orange btn-small"><i className="fa fa-edit" /> Edit</Link>
                <Link to={`delete-category/${id}`} className="btn red btn-small" ><i className="fa fa-remove" /> Delete</Link>
            </div>
            </div>
        </li>
    )
}

class CategorList extends Component {
    state = {
        categories: [],
        fullyLoaded: false,
    }

    getUserCategories(){
        CategoryRequest.fetchUserCategories()
        .then(response=>{
            this.setState({
                categories: response.data.recipe_cats,
                fullyLoaded: true, 
            })
            console.log(response);
        })
        .catch(error=>{
            console.log(error)
        })
    }

    componentWillMount(){
        this.getUserCategories();
    }

    componentDidMount() {
        $('.collapsible').collapsible();
    }

    render() {
        const {categories, fullyLoaded} = this.state;
        // create a list of categories 
        const categoryItems = categories.map(category=>{
            return(
                <Category category={category} key={category.id} />
            )
        })

        return (
            <ul className="collapsible popout" data-collapsible="accordion">
                {categoryItems}
            </ul>
        )
    }
}

const Categories = () => {
    return (
        <div className="row">
            <div className="col s4">
                The side menu will go here
            </div>
            <div className="col s8">
                <div className="card orange-text center-align">
                    <div className="card-title">Categories</div>
                </div>
                <CategorList/>
            </div>
        </div>
    )
}

export default Categories;
