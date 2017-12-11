import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
             
               <ul>
                  <li><Link to={'/Home'}>Button</Link></li>
                  <li><Link to={'/Login'}>Input</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/Home' component={Home} />
                  <Route exact path='/Login' component={Login} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;