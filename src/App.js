import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

import Navbar from './components/Navbar'
import Champions from'./components/Champions'
import Items from './components/Items'
import Synergy from './components/Synergy'
import Home from './components/Home'



const App =()=> {
  
  return (
      <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path = '/' exact component = {Home} />
          <Route path = '/champions' component ={Champions}/>
          <Route path = '/items' component ={Items}/>
          <Route path = '/synergy' component ={Synergy}/>
        </Switch>
      </div>
    </Router>
    );
}

export default App;
