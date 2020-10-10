import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation'

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} /> {/* router가 다른 /(슬래쉬)를 읽지 않도록 exact={true} */}
      <Route path="/about" component={About}/>
    </HashRouter>)
}

export default App;