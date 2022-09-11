import {Switch, Route} from 'react-router-dom'
import React from 'react'
import NavBar from './NavBar'
import LoginPage from './LoginPage'
import LevelPage from './LevelPage'
import ScorePage from './ScorePage'

function App() {

  return (
    
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/level"> <LevelPage/> </Route>
        <Route path="/score"> <ScorePage/> </Route>
        <Route path="/"> <LoginPage/> </Route>
      </Switch>
    </div>

  );
}

export default App;
