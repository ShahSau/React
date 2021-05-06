import React, {useState, useEffect} from 'react'
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'
const Recipes=()=> {
    const APP_ID= '9f910e7b'
    const APP_KEY= '543491186020f922e225c915a71c611c'
    const [recipes, setRecipes]= useState([])
    useEffect( () => {
    getRecipes()
    
  },[])
  const getRecipes = async ()=>{
    const reponse = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await reponse.json()
    setRecipes(data.hits)
    //console.log(data)
    
 
  }
    
    const [search, setSearch]= useState('')
    const handleChange =(event)=>{
        setSearch(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
    }
    return (
        <>
            <Search search={search} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <RecipeList recipes={recipes}/>
        </>
    )
}
export default Recipes