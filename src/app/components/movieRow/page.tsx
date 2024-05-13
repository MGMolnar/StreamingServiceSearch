import { useState, useMemo } from 'react';
import styles from './style.module.css'

export default function MovieRow(movieDetails: movieDetailsType) {
    const [movieImage, setMovieImage] = useState(String);

    async function searchForMovieImage(){
        const res = await fetch(`http://localhost:3000/api/imageSearch?tmdbId=${movieDetails.tmdbId}`,
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
                    setMovieImage("/src/app/components/movieRow/noImageProvided.png");
                }
        });
    }
    searchForMovieImage();

    return (
        <td className={styles.dataCell}>
            <img className={styles.image} src={movieImage} alt='Movie Image'></img>
            <div className={styles.movieDetails}>
                <div className='title'>{movieDetails.title}</div>
                <div className='year'>{movieDetails.year}</div>
            </div>
            {/* <ul className={styles.movieGenre}>
                {movieDetails.genres.map((genreData: any) => <li key={genreData.name}>{genreData.name}</li>)}
            </ul> */}
        </td>
    );
}

