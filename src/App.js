import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading :true,
    movies: []
  };
  getMovies = async () =>{
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies);
    //1. axios로 불러와진 데이터는 처음에 어디에 담기지?
    //2. 콘솔에 movies를 어떻게 바로찍을 수 있는지?

    this.setState({movies, isLoading:false})
    // movies = movies : movies 
  }
  componentDidMount(){
    this.getMovies();
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}

export default App;
