import React, {useState} from 'react';
import './App.css';
import MoviesDisplay from './Components/Display/MoviesDisplay';

function App() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  const fetchMovies = () => {
    const key = 'dcc27c18d9f18a55dd0ee08fffefa3c0';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1`;

    fetch(url)
      .then(res => {
        if(res.status !== 200){
          throw new Error('Fetch Error');
        }
        else{
          return res.json();
        }
        // ! Doesn't like the throw keyword
        // res.status == 200 ? res.json() : throw new Error('Fetch Error'); 
      })
      .then(json => {
        if(json.results.lenth == 0){
          throw new Error('No Results');
        }
        else{
          // Removed since I'm returning an array of 5 movies and not just a random movie
          //// const movieNum = Math.floor(Math.random() * json.results.length);  
          setResults(json.results.slice(0, 5));
          // console.log(results);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='main'>
      <div className='mainDiv'>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <button onClick={fetchMovies}>Click for Movie Pic Search</button>
        {
          // If no result is found from query or the result doesn't have a poster path then display nothing
          // Else load the MovieDisplay component passing in the result as a prop (prop.movie in MovieDisplay component)
          results.length == 0 || !results[0].poster_path ? null : <MoviesDisplay movies={results} />
        }
        {/* { console.log(results) } */}
      </div>
    </div>
  );
};

export default App;
