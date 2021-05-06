import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import SingleRecipe from './pages/Recipe'
import Error from './pages/Error'
import Navbar from './components/Navbar'


const App =() =>{
  const APP_ID= '9f910e7b'
  const APP_KEY= '543491186020f922e225c915a71c611c'

  // useEffect( () => {
  //   getRecipes()
  // },[])
  // const getRecipes = async ()=>{
  //   const reponse = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  //   const data = await reponse.json()
  //   console.log(data)
  // }
  return(
    <Router>
      <main>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/recipes" exact component={Recipes}></Route>
          <Route path="/recipes/:id"  component={SingleRecipe}></Route>
          <Route component={Error}></Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App;
