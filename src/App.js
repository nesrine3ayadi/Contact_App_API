import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import  AddContact  from "./components/addContact";
import ListContact from "./components/listContact";

function App() {
  return (
    <div className="App">
      
      <Router>
      <div className="col-md-12">
        <h1 className="col-md-12">Contact App</h1>
        <div>
          <Link to="/contactlist">
            <button className="btn btn-header">Contact List</button>
          </Link>
          <Link to="/addcontact"><button className="btn btn-header">Add Contact</button> </Link>
        </div>
      </div>
      <Route exact path="/updatecontact/:id" component={AddContact} />
       
      <Route exact path="/addcontact" component={AddContact} />
      <Route exact path="/contactlist" component={ListContact} />
    </Router>
    </div>
  );
}

export default App;
