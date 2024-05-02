import { useState, useMemo } from 'react';
import styles from './style.module.css'

export default function MovieRow(movieDetails: movieDetailsType) {
    console.log(movieDetails);
    return (
        <tr className={styles.movieContent}>
            <td>{movieDetails.title}</td>
            <td>{movieDetails.overview}</td>
            <td>{movieDetails.year}</td>
            <td>
                <ul className={styles.movieGenre}>
                    {movieDetails.genres.map((genreData: any) => <li key={genreData.name}>{genreData.name}</li>)}
                </ul>
            </td>
        </tr>
    );
}

