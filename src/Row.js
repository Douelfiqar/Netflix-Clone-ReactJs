import React, { useEffect,useState } from 'react'
import axios from 'axios';
import "./Row.css";



const base_url="https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl , isLarge}) { 
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    
  return (
    <div className='row'>
        {/* title */}
<h2>{title}</h2> 
        {/* container -> posters */}

<div className="row__posters">

  { movies.map(movie => (
      <img
      className={`row__poster ${isLarge && "row__postersLarge"}`}
       key={movie.id} 
       src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}/>
    ))}

  </div>
        
    </div>
  )
}

export default Row