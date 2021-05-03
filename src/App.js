import {Fragment} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LogIn from "./components/Login/LogIn";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import AddMovie from "./components/AddMovie/AddMovie";
import MovieInfo from './components/MovieInfo/MovieInfo';

function App() {
  const loggedIn = JSON.parse(localStorage.getItem('user'))

  const layout = <Fragment>
                    <Navbar/>
                    <Switch>
                      <Route exact path="/">
                        <MovieList/>
                      </Route>
                      <Route exact path="/add">
                        <AddMovie/>
                      </Route>
                      <Route exact path="/movieInfo/:id">
                        <MovieInfo/>
                      </Route>
                    </Switch> 
                  </Fragment>
    
  

  return (
    <Router>
      <div className="App">
        {loggedIn ? layout : <LogIn/>}  
      </div>
      </Router>
  );
}

export default App;