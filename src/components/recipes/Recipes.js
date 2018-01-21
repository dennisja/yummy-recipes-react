import React, {Component} from 'react';
import RecipesRequest from '../../helpers/Recipes';

import Preloader from '../Utilities';

const Recipe = (props)=>{
    return(
        <div>
            Hello
        </div>
    )
}

const RecipesList = props=>{
    return(
        <div>
            <Recipe />
            <Recipe />
            <Recipe />
        </div>
    )
}

class Recipes extends Component{
    state = {
        recipes: [],
        loadingRecipes: true,
        erroOccured : false,
        errors: [],
    }

    componentDidMount(){
        RecipesRequest.fetchRecipes()
        .then(response=>{
            this.setState({
                recipes: response.data.recipes,
                loadingRecipes: false,
            })
            console.log(response)
        })
        .catch(error=>{
            //notify user about the error that occured
            this.setState({
                errorOccured: true,
                loadingRecipes: false,
                errors: ["Set this depending on the error that occured"]
            })
            console.log(error.response||error.request||error)
        })
    }

    render(){
        
        const {loadingRecipes, erroOccured} = this.state;
        let componentToRender = null;

        if(loadingRecipes){
            componentToRender = (<Preloader message="Fetching Recipes......" />)
        }else if(erroOccured){
            componentToRender = "Errors occures"
        }else{
            componentToRender = <RecipesList />
        }

        return(
            <div className="row">
                <div className="col s12 m4">
                    SideBar Component Here
                </div>
                <div className="col s12 m8">
                    {componentToRender}
                </div>
            </div>
        )
    }
}

export default Recipes;