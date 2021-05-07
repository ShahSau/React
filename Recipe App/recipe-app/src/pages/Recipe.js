import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
const Recipe= (props) =>{
    console.log(props)
    const id =props.location.state
    const [ recipe, setRecipe] = useState([])
    const [loading, setLoading] = useState(true)
    const path = props.location.pathname.substring(9)
    console.log(path)
    const health = props.location.hash.substring(1)
    console.log(health)
   



    const APP_ID= '9f910e7b'
    const APP_KEY= '543491186020f922e225c915a71c611c'
    useEffect( () => {
    getRecipes()
    
  },[])
  const getRecipes = async ()=>{
    const reponse = await fetch(`https://api.edamam.com/search?q=${id}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await reponse.json()
    let filter_recipe = await data.hits.find((r)=>  r.recipe.uri.includes(path))
    setRecipe(filter_recipe.recipe)
    setLoading(false)
  }

        
      console.log(recipe)
      console.log(id)

    if (loading){
        return(
        <div className='container'>
            <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                    <h2 className='text-blue text-uppercase text-center'>
                        Loading recipe...
                    </h2>
                </div>
            </div>
        </div>)
    }
    
    
    
    return (
        <div className='container my-5'>
            <Link to='/recipes' className='btn btn-warning mb-5 text-capitalize'>
                back to recipe list
            </Link>
            <div className='row'>
            
                <div className='col-10 mx-auto col-md-6 my-3'>
                    <img src={recipe.image} className='d-block w-100' style={{maxHeight:'30rem'}}></img>
                </div>
                <div className='col-10 mx-auto col-md-6 my-3'>
                    <> </>
                    <h6 className='text-uppercase'>{recipe.label}</h6>
                    <h6 className='text-warning text-capitalize text-slanted'> Provided by {recipe.source}</h6>
                    <a href={recipe.url} target='_blank' rel='noopener noreferrer' className='btn btn-success mt-2 mx-2 text-capitalize'> How to Cook </a>
                    <ul className='list-group mt-4'>
                        <h2 className='mt-3 mb-4'>ingridients</h2>
                        {recipe.ingredientLines.map((item,index)=>{
                            return(<li key={index} className='list-group-item text-slanted'>{item}</li>)
                        })}
                    </ul>
                </div>
            </div>

        </div>


    )
}


export default Recipe
