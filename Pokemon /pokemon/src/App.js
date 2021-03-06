import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import { getAllPokemon, getPokemon } from './services/pokemon';



function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'

  useEffect(() =>{
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();

  }, [] );

  const loadingPokemon = async (data) => {
    //will take a array of promises and return the array when all the promises have resolved
    let _pokemondata = await Promise.all(data.map(async pokemon =>{
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))
    setPokemonData(_pokemondata)
  }
  console.log(pokemonData)
  return (
    <div>
     { loading ? <h1>Loading...</h1> : (
       <>
        <div className="grid-container">
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon}></Card>;
          })}

          </div>
       </>
     )}
    </div>
  );
}

export default App;
