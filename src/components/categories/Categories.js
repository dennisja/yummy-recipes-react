import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import CategoryRequest from '../../helpers/Categories';

const Category = (props)=>{
    const {created, edited, name, owner_details, id} = props.category;
    return (
        <li>
          <div className="collapsible-header">{ name }</div>
          <div className="collapsible-body">
            <table>
                <tbody>
                    <tr>
                        <td>
                            Category Name
                        </td>
                        <td>
                            {name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Owner
                        </td>
                        <td>
                            {`${owner_details.firstname} ${owner_details.lastname}`}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Created
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

            <div>
                <Link to={`edit-category/${id}`}><i className="fa fa-edit" /> Edit</Link>
                <Link to={`delete-category/${id}`} ><i className="fa fa-remove" /> Delete</Link>
            </div>
          </div>
        </li>
    )
}

class Categories extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        alert('yeah')
        CategoryRequest.fetchUserCategories()
        .then(response=>{
            this.setState({
                categories: response.data.recipe_cats
            })
            console.log(this.state)
        })
        .catch(error=>{
            console.log(error)
        })

        $('.collapsible').collapsible();
    }

    render() {
        const {categories} = this.state;

        if(categories.length <= 0){
            return (
                <div>
                    No categories yet
                </div>
            )
        }

        const categoryItems = categories.map(category=>{
            return (
                <Category category={category} key={category.id}/>
            )
        })

        return(
            <div className="row">
                <div className="col m4">
                </div>
                <div className="col m8 s12">
                <ul className="collapsible popout collapsible-accordion" data-collapsible="accordion">
                    { categoryItems }
                </ul>
                </div>
            </div>
        )
    }
}

export default Categories;
