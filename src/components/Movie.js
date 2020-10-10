import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({id, year, title, summary, poster, genres}){
    return (
        
        <div className="movie">
            <Link 
            to={{
                pathname: "/movie-detail",
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}
        >
            <img src={poster} alt={title}/>
            <div className="movie-info">
                <h3 className="title">{title}</h3>
                <span className="year">{year}</span>
                <p className="summary">{summary.slice(0,130)}...</p>
                <p className="genres">
                    {
                        genres.map((item, index) => (
                        <span key={index} className="tag"> #{item} </span>
                        ))
                    }
                </p>
            </div>
            </Link>
        </div>
        
        
    )
}

Movie.propTypes = { // propTypes 대소문자 사용에 유의..(?)
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    posteter: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;