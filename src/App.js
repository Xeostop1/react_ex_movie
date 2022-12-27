import { useEffect, useState } from 'react';
import './App.css';

function App() {
  //로딩을 보여주는 useState
  const [loading, setLoading]=useState(true);
  const [movies, setMovies]=useState([]);
  useEffect(()=>{
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    .then((response)=>response.json())
    .then(json=>{
      setMovies(json.data.movies);
      setLoading(false);
    });
    },[]);
    console.log(movies);
  return (
    <div className="App">
      {loading? <h1>Loading....</h1>:null}
      4:52까지
    </div>
  );
}

export default App;
