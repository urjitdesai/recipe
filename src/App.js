import React,{useEffect, useState} from 'react';
import Recipe from './Recipe'
import logo from './logo.svg';
import './App.css';

function App() {

  const APP_ID="94c843ff"
  const APP_KEY="ac86e1db11807bb4dc523d571d4748b9"


  const getRecipes =async () => {
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data=await response.json()
    setRecipes(data.hits)
    console.log(data);
  }

  const [recipes, setRecipes]=useState([])
  const [search, setSearch]=useState('')
  const [query, setQuery]=useState('chicken')

  useEffect( ()=>{
    getRecipes()
    
  }, [query])

  
  const getSearch= e => {
    e.preventDefault()
    setQuery(search)
  }
  
  const updateSearch =e => { setSearch(e.target.value)
                              console.log(e.target.value);
                                        
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}></input>
        <button className='search-button' type='submit' > Search </button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe => (<Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}></Recipe>))}
      </div>
    </div>
  );
}

export default App;
