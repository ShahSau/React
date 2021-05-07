import React, {useState, useEffect} from 'react'
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'
const Recipes=()=> {
    const APP_ID= '9f910e7b'
    const APP_KEY= '543491186020f922e225c915a71c611c'
    const [recipes, setRecipes]= useState([])
    const [search, setSearch]= useState('chicken,onion')
    useEffect( () => {
    getRecipes()
    
  },[])
  const getRecipes = async ()=>{
    const reponse = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await reponse.json()

    setRecipes(data.hits)
    console.log(data.hits)
 
  }


    
    const handleChange =(event)=>{
        setSearch(event.target.value)
     
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        getRecipes()
    }
    
    return (
        <>
            <Search 
            search={search} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            />
            <RecipeList recipes={recipes} search={search}/>
        </>
    )
}
export default Recipes