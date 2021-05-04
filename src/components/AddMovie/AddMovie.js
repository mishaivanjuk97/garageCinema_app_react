import React from 'react'
import { useState } from 'react'
import styles from './addMovie.module.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'


const AddMovie = () => {
   const [isLoadding, setIsloading] = useState(false);
   const [success, setSuccess] = useState(false);
   const [titleInput, setTitleInput] = useState('');
   const [yearInput, setYearInput] = useState('');

   const [title, setTitle] = useState('');
   const [year, setYear] = useState(''); 
   const [director, setDirector] = useState('');
   const [actors, setActors] = useState('');
   const [plot, setPlot] = useState('');
   const [genre, setGenre] = useState('');
   const [error, setError] = useState(null);
   const [poster, setPoster] = useState('');
   const [id, setId] = useState('');
   

   const findMovie = async (e) => {
      e.preventDefault();
      
      setIsloading(true);

      const response = await axios.get(`https://www.omdbapi.com/?t=${titleInput}&y=${yearInput}&apikey=677bff9b`);
      const data = await response.data;

      setError(data.Error);
      setPoster(data.Poster);
      setTitle(data.Title);
      setYear(data.Year);
      setDirector(data.Director);
      setActors(data.Actors);
      setPlot(data.Plot);
      setId(data.imdbID);
      setGenre(data.Genre);
      setSuccess(false);
      setIsloading(false);  

   }

   const addMovie = () => {
      const suggested = JSON.parse(localStorage.getItem('user')).name;

      const movie = {title, year, director, id, actors, genre, suggested};
      let movies;

      if(localStorage.getItem('movies') === null) {
         movies = [];
         movies.push(movie);
         localStorage.setItem('movies', JSON.stringify(movies))    
      } else {
         movies = JSON.parse(localStorage.getItem('movies'));
         if(!movies.filter(item => item.id === movie.id).length){
            movies.push(movie);
            localStorage.setItem('movies', JSON.stringify(movies))
         }
      }
      setSuccess(true)
   }

   const cancelMovie = () => {
      setTitle('');
      setPoster('');
   }   

   const validateMovie = <div className={styles.validateMovie}>
                           <p className={styles.question}>Is it what you're looking for?</p>
                           <p>{title} ({year})</p>
                           <p>Director: {director}</p>
                           <p>Actors: {actors}</p>
                           <p>{plot}</p>
                           {success ? <Link to='/'><div className={styles.message}><p>Added to list</p></div></Link> : <div>
                              <button className={styles.btn} onClick={addMovie}>Yes</button>
                              <button className={styles.btn} onClick={cancelMovie}>No</button>
                           </div>}
                        </div>;

   return (

      <div className={title ? styles.cardExpand : styles.card} >
         <div className={styles.find}>
            <form onSubmit={findMovie}>
               <div className={styles.title}>
                  <label>Title</label>
                  <input type="text" onChange={(e) => setTitleInput(e.target.value)}/>
               </div>
               <div className={styles.year}>
                  <label>Year</label>
                  <input type="number" onChange={(e) => setYearInput(e.target.value)}/>
               </div>
               <button className={styles.findBtn}>Find</button>
            </form>
            {error && <div className={styles.error}>{error}</div>}
            {isLoadding && <div className={styles.loading}></div>}
            {title && validateMovie}
         </div>
         {title && <div className={styles.poster} style={{backgroundImage: `url(${poster})`}}> 
         </div>}
      </div>
   )
}

export default AddMovie
