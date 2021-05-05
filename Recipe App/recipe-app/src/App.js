import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const App =() =>{
  const APP_ID= '9f910e7b'
  const APP_KEY= '543491186020f922e225c915a71c611c'

  useEffect( () => {
    getRecipes()
  },[])
  const getRecipes = async ()=>{
    const reponse = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await reponse.json()
    console.log(data)
  }
  return(
    <div className='App'>
      <h2>hgdgd</h2>
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button  className='search-button' type='submit'>search</button>
      </form>
    </div>
  )
}

export default App;
