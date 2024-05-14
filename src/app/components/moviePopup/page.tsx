import { useState, useMemo } from 'react';
import styles from './style.module.css'

export default function MovieTable(props: any) {

    return (props.trigger) ? (
        <div className={styles.popupData}>
            <img className={styles.image} src={props.imageSrc} alt='Movie Image'></img>
            <div className={styles.movieDetails}>
                <div className='title'>{props.movieDetails.title}</div>
                <div className='overView'>{props.movieDetails.overview}</div>
                
                <div className='year'>{props.movieDetails.year? props.movieDetails.year : "No Year Provided"}</div>
                <div className= 'cast'>
                    <ul className={styles.cast}>
                        Staring: {props.movieDetails.cast.map((castData: any) => <li key={castData}>{castData}</li>)}
                    </ul>
                </div>
                <div className= 'directors'>
                    <ul className={styles.director}>
                        Directed By {props.movieDetails.directors.map((directorData: any) => <li key={directorData}>{directorData}</li>)}
                    </ul>
                </div>
                <div className= 'genres'>
                    <ul className={styles.movieGenre}>
                        {props.movieDetails.genres.map((genreData: any) => <li key={genreData.name}>{genreData.name}</li>)}
                    </ul>
                </div>
                
            </div>
        </div>
    ) : "";
}

