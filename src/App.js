import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation'
import './App.css';

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} /> {/* router가 다른 /(슬래쉬)를 읽지 않도록 exact={true} */}
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail}/>
    </HashRouter>)
}

export default App;