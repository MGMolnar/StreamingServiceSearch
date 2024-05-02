"use client"
import styles from './style.module.css'
import MovieRow from './components/movieRow/page'
import { useState } from 'react';
import './style.css'

const API_KEY: string = process.env.DATA_API_KEY_STREAMING_API as string;
const url = 'https://streaming-availability.p.rapidapi.com/search/filters?services=prime.subscription&country=us&keyword=zombie&output_language=en&order_by=year&genres_relation=and&show_type=all';

export default function Home() {
  const [movieRowInformation, setMovieDetails] = useState([]);

  return (
    <div>
        <button className={styles.searchButton}
          onClick={searchApi}>Click
        </button>
        <div className={styles.movieContent}>
          <table className={styles.movieTable}>
            <tbody>
              <tr className={styles.header}>
                  <th className={styles.title}>Title</th>
                  <th className={styles.overview}>Overview</th>
                  <th className={styles.year}>Year</th>
                  <th className={styles.genres}>Genre(s)</th>
              </tr>
              {movieRowInformation}
            </tbody>
          </table>
        </div>
    </div>

  );

  async function searchApi(){
    const res = await fetch('http://localhost:3000/api/streamingSearch',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {return res.json()})
    .then(resJson =>{
      //{jsonData.map((movieRow) => <MovieRow movieDetails={jsonData}/>)}
      //resJson.forEach(jsonData => {
        setMovieDetails(resJson.result.map((json: movieDetailsType) => <MovieRow key={json.title} {...json}/>));
        //});
    });
  } 
}

