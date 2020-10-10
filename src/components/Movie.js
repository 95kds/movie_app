import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({id, year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title}/>
            <div className="movie-info">
                <h3 className="title">{title}</h3>
                <span className="year">{year}</span>
                <p className="summary">{summary}</p>
                <p className="genres">
                    {
                        genres.map((item, index) => (
                        <span key={index} className="tag"> #{item} </span>
                        ))
                    }
                </p>
            </div>
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