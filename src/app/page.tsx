"use client"
import styles from './style.module.css'
import MovieRow from './components/movieRow/page'
import DropdownMenu from './components/dropdownMenu/page'
import { useState } from 'react';
import './style.css'
const url = 'https://streaming-availability.p.rapidapi.com/search/filters?services=prime.subscription&country=us&keyword=zombie&output_language=en&order_by=year&genres_relation=and&show_type=all';


export default function Home() {
  const [movieRowInformation, setMovieDetails] = useState([]);
  const menuEntries= ["us", "sup", "test"];
  
  return (
    <div>
      <div className='test'>
        <button className={styles.searchButton}
          onClick={e => searchApi()}>Click
        </button>
        {/* <DropdownMenu options={menuEntries} title={"title"} /> */}
      </div>
      <div className={styles.movieContent}>
        <table className={styles.movieTable}>
          <tbody>
            {/* <tr className={styles.header}>
              <th className={styles.title}>Title</th>
              <th className={styles.overview}>Overview</th>
              <th className={styles.year}>Year</th>
              <th className={styles.genres}>Genre(s)</th>
            </tr> */}
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
        let rows: any = [];
        let currentRow: any = [];
        let currentRowCount = 0;
        console.log(resJson.result.length);

        for(let i = 1; i < resJson.result.length + 1; i++){
          currentRow[(i - 1) % 5]= <MovieRow key={resJson.result[i - 1].title} {...resJson.result[i - 1]} />
          console.log(resJson.result[i - 1]);

          if(i % 5 == 0){
            rows[currentRowCount]= <tr key={currentRowCount}>{currentRow}</tr>;
            currentRowCount++;
            currentRow = [];
          }

        }
        setMovieDetails(rows);
    });
  } 
}

