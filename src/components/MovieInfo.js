import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styles from './movieInfo.module.scss'

const MovieInfo = () => {
   const {id} = useParams();
   const history = useHistory();
   const [data, setData] = useState('');
   const [modal, setModal] = useState();
   const [isLoadding, setIsLoading] = useState(true)
   useEffect(() => {
         const fetchData = async () => {
            const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=677bff9b`);
            const data = await response.data;
            
            setData(data)
            setIsLoading(false)
         }
         fetchData()
   }, [id])

   const removeMovie = (id) => {
      const movies = JSON.parse(localStorage.getItem('movies'));
      const filteredMovies = movies.filter(movie => movie.id !== id);

      localStorage.setItem('movies', JSON.stringify(filteredMovies));

      history.push('/')
   }

   const showModal = 
      <div className={styles.modal} style={modal ? {transform: 'translateY(0)'} : {transform: 'translateY(-100%)'}}>
         <div className={styles.card}>
            <h3>Are you sure?</h3>
            <div className={styles.answer}>
               <button onClick={() => removeMovie(data.imdbID)} className={`${styles.btn} ${styles.btnY}`}>Yes</button>
               <button onClick={() => setModal(false)} className={`${styles.btn} ${styles.btnN}`}>No</button>
            </div>
         </div>
      </div>;
  
   return (
      <div>
         {isLoadding && <div className={styles.loading}></div>}
         {!isLoadding && <div className={styles.card}>
            <div className={styles.header}>
               <div className={styles.poster} style={{backgroundImage: `url(${data.Poster})`}}>
               </div>
               <div className={styles.info}>
                  <h1>{data.Title}</h1>
                  <h3><span>Released:</span> {data.Released}</h3>
                  <h3><span>Genre:</span> {data.Genre}</h3>
                  <h3><span>IMDb Rating:</span> {data.imdbRating}</h3>
                  <h3><span>Duration:</span> {data.Runtime}</h3>
                  <h3><span>Box Office:</span> {data.BoxOffice}</h3>
                  <h3><span>Director:</span> {data.Director}</h3>
                  <h3><span>Cast:</span> {data.Actors}</h3>
               </div>
            </div>
            <div className={styles.description}>
               <h3><span>Plot:</span></h3>
               <h3>{data.Plot}</h3>
            </div>
            <button className={styles.btn} onClick={() => setModal(true)}>Remove</button>         
            {showModal}
         </div>}
      </div>
   )
}

export default MovieInfo
