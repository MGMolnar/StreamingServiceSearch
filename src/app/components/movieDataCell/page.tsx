import { useState} from 'react';
import styles from './style.module.css'
import noMovieFound from '../../images/noImageProvided.png'
import MoviePopup from '../moviePopup/page'

export default function movieDataCell(props: any) {
    const [movieImage, setMovieImage] = useState(String);


    async function searchForMovieImage(){
        const res = await fetch(`http://localhost:3000/api/imageSearch?tmdbId=${props.movieDetails.tmdbId}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
        }
        })
            .then(res => {return res.json()})
            .then(resJson =>{
                if(resJson.posters.length > 0){
                    setMovieImage(`https://image.tmdb.org/t/p/original/${resJson.posters[0].file_path}`);
                }
                else{
                    setMovieImage(noMovieFound.src);
                }
        });
    }
    searchForMovieImage();

    return (
        <td className={styles.dataCell}>
            <button onClick={e => props.createMoviePopup(props.movieDetails, movieImage, true)}>
                <img className={styles.image} src={movieImage} alt='Movie Image'></img>
                <div className={styles.movieDetails}>
                    <div className='title'>{props.movieDetails.title}</div>
                    <div className='year'>{props.movieDetails.year? props.movieDetails.year : "No Year Provided"}</div>
                </div>
            </button>
        </td>
    );
}

