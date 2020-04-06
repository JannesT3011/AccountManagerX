import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddAccount from "./pages/AddAccount/addAccount"
import Home from "./pages/Home/home"
import './App.css';


class App extends React.Component {
  render() {
    return(
      <Router>
        <Route path={["/", "/home", "/index"]} component={Home}/>
        <Route path="/addAccount" exact component={AddAccount}/>
      </Router>
    )
  }
}


export default App;
