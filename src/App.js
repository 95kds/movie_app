import React from 'react';
// import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    isLoading :true
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading : false});
    }, 6000)
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
