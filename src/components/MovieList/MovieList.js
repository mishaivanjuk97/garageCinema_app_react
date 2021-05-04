import React from 'react'
import { useState } from 'react'
import styles from './movieList.module.scss'
import { Link } from 'react-router-dom'

const MovieList = () => {
   const [isLoadding, setIsloading] = useState(true);


   let movies = [];

   const defaultSuggest = {
      title: "The Gentlemen",
      year: "2019",
      director: "Guy Ritchie",
      id: "tt8367814",
      actors: "Matthew McConaughey, Charlie Hunnam, Michelle Dockery, Jeremy Strong",
      genre: "Action, Comedy, Crime",
      suggested: "Ivan"
  }

   if(localStorage.getItem('movies') === null) {
      movies.push(defaultSuggest); 
      localStorage.setItem('movies', JSON.stringify(movies))  
   } else {
      movies = JSON.parse(localStorage.getItem('movies'));
   }

   setTimeout(() => {
      setIsloading(false)
   }, 500)

   const loading = <div className={styles.loading}></div>;   

   const errorMessage = <div className={styles.errorMessage}>
      <p><Link to="/add">Add</Link> movies to list</p>
   </div>
   
   return (
      <div>
   {isLoadding ? loading : <div>
         {movies === null || !movies.length ? errorMessage : movies.map(movie => (
            <Link to={`/movieInfo/${movie.id}`} key={movie.id}>            
               <div className={styles.card}>
                  <div className={styles.header} >
                     <div className={styles.headerTitle}>
                        <h2>{movie.title}</h2>
                        <h2>({movie.year})</h2>
                     </div>
                     <div className={styles.headerSuggested}>
                        <p><span>Suggested by: </span>{movie.suggested}</p>
                     </div>
                  </div>
                  <div className={styles.info}>
                     <p><span>Genre:</span> {movie.genre}</p>
                     <p><span>Director:</span> {movie.director}</p>
                     <p><span>Actors:</span> {movie.actors}</p>
                  </div>
               </div>
            </Link>
         ))}       
      </div>}
      </div>
   )
}

export default MovieList
