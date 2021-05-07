import React from 'react'
import {Link} from 'react-router-dom'
 const Recipe = ({recipe,search}) => {
const image_url= recipe.recipe.image
const title= recipe.recipe.label
const publisher= recipe.recipe.source
const source_url= recipe.recipe.url
const recipe_id =recipe.recipe.uri.substring(50)
console.log(recipe_id)
//image_url, title, source_url, publisher, recipe_id
    return (
        <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
            <div className='card' style={{height:'100%'}}> 
                <img src={image_url} style={{height:'14rem'}} className='img-card-top' alt='recipe'></img>
                <div className='card-body text-capitalize'>
                    <h6>{title}</h6>
                    <h6 className='text-warning text-slanted'>
                        provided by {publisher}
                    </h6>
                </div>
                <div className='card-footer'>
                    <Link to={{pathname:`/recipes/${recipe_id}`, state: search}} className='btn btn-primary text-capitalize'> Details</Link>
                    <a href={source_url} target='_blank' rel='noopener noreferrer' className='btn btn-success mx-2 text-capitalize'> Recipe URL</a>
                </div>
            </div>
            
        </div>
    )
}
export default Recipe