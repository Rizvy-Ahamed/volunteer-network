import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Home/Login/Login';
import Registration from './Components/Registration/Registration';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [showdata, setShowData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });


  return (
    <UserContext.Provider value={{ showdata, setShowData, loggedInUser, setLoggedInUser, user, setUser,volunteers, setVolunteers }}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/selection/:_id">
              <Registration />
            </PrivateRoute>
            {/* <Route path="/volunteerdetails">
              <VolunteerDetails />
            </Route>
            <Route path="/volunteeractivity">
              <VolunteerActivity />
            </Route>
            <Route path="/adminpanel">
              <AdminPanel />
            </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/selection/:_id">
            <Registration />
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>

  );
}
export default App;
