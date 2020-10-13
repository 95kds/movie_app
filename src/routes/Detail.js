import React from 'react';

class Detail extends React.Component{
    
    componentDidMount(){
        const { location, history} = this.props;
        if (location.state === undefined){
            history.push("/");
        }
    }
    render() {
        const {locationState} = this.props.state;
        if(locationState){
            return(
            <div className="movie detail">
                <img src={locationState.poster} alt={locationState.title}/>
                <div className="movie-info">
                    <h3 className="title">{locationState.title}</h3>
                    <span className="year">{locationState.year}</span>
                    <p className="summary">{locationState.summary}</p>
                    <p className="genres">
                        {
                            locationState.genres.map((item, index) => (
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