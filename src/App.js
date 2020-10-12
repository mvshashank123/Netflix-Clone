import React from "react";
import "./App.css";
import Login from "./Login";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from "./Home";


function App() {

  

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact>
             <Login/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
