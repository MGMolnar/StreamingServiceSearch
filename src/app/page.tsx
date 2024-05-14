"use client"
import styles from './style.module.css'
import MovieDataCell from './components/movieDataCell/page'
import DropdownMenu from './components/dropdownMenu/page'
import MoviePopup from './components/moviePopup/page'
import { useState } from 'react';
import './style.css'

export default function Home() {
  const [movieTableInformation, setMovieDetails] = useState([]);
  const [moviePopupInformation, setMoviePopup] = useState(<MoviePopup />);
  const menuEntries= ["us", "sup", "test"];

  function createMoviePopup(movieDetails: movieDetailsType, imageSrc: string, trigger: boolean){
    setMoviePopup(<MoviePopup key={movieDetails.title} movieDetails={movieDetails} imageSrc={imageSrc} trigger={trigger}/>)
  }
  
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
            {movieTableInformation}
          </tbody>
        </table>
      </div>
      <div className='moviePopup'>
        {moviePopupInformation}
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
        console.log(resJson.result);
        for(let i = 1; i < resJson.result.length + 1; i++){
          currentRow[(i - 1) % 5]= <MovieDataCell key={resJson.result[i - 1].title} movieDetails={resJson.result[i - 1]} createMoviePopup={createMoviePopup} />
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

