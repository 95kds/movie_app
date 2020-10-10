import React, { Fragment } from 'react';

class Detail extends React.Component{
    
    componentDidMount(){
        const { location, history} = this.props;
        if (location.state === undefined){
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        if(location.state){
            return(
            <div className="movie detail">
                <img src={location.state.poster} alt={location.state.title}/>
                <div className="movie-info">
                    <h3 className="title">{location.state.title}</h3>
                    <span className="year">{location.state.year}</span>
                    <p className="summary">{location.state.summary}</p>
                    <p className="genres">
                        {
                            location.state.genres.map((item, index) => (
                            <span key={index} className="tag"> #{item} </span>
                            ))
                        }
                    </p>
                </div>
            </div>
            )
        } else {
            return null;
        }
        
    }
}

export default Detail;