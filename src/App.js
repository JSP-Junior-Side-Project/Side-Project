import 'App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navigator from 'Components/Navigator/Navigator';
import PersonalInfo from 'Pages/PersonalInfo';
import Profile from 'Pages/Profile';
import Join from 'Pages/Join';
import Login from 'Pages/Login';
import Home from 'Pages/Home';
import ProjectList from 'Pages/ProjectList';
import { authService } from 'Services/myBase';
import { useStateValue } from 'Services/StateProvider/StateProvider';
import { useEffect, useState } from 'react';
import { USER_API_ENDPOINT } from 'Services/Api/Endpoint';
import axios from 'axios';
import Post from 'Pages/Post';
import ProjectPopup from 'Components/ProjectPopup';
import { createNewUser } from 'Services/Api/api';


function App() {
  const [init, setInit] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [{user}, dispatch] = useStateValue();
  const [newUser, setNewUser] = useState(true);
  
  const fetchUserData = async (user) => {
    await axios.get(`${USER_API_ENDPOINT}/${user.uid}`)
    // !--userData 와 upvoteData 동시에 가져와야 함.--!
    .then((response) => {
      const { data } = response
      if (data.name) {
        dispatch({
          type: 'UPDATE_PROFILE',
          profile: {
            name: data.name,
            nickname: data.nickname,
            email: data.email,
            image_link: data.image_link,
            introduction: data.introduction
          }
        })
        setNewUser(false);
      } else {
        setNewUser(true);
      }
    })
    .catch((error) => {
      createNewUser(user)
      setNewUser(true);
      setError(error.message);
    })
  
  }

  useEffect(() => {
    authService().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true)
        dispatch({
          type: 'SET_USER',
          user: user
        })
        fetchUserData(user);
      } else {
        setLoggedIn(false)
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
      setInit(true)  
    })
  }, [])

  return (
    <>
      { init ? (
          <Router>
            <div className="App">
              <Switch>
                <Route exact path="/post/new">
                  <Navigator />
                  <Post />
                </Route>
                <Route exact path="/projects">
                  <Navigator />
                  <ProjectList />
                </Route>
                <Route exact path="/personal-info">
                  <Navigator />
                  <PersonalInfo />
                </Route>
                <Route exact path="/profile">
                  <Navigator />
                  <Profile />
                </Route>
                <Route exact path="/join">
                  {newUser ? <Join /> : <Redirect to="/"/>}
                </Route>
                <Route exact path="/login">
                  <Navigator />
                  {user ? <Redirect to="/" /> : <Login />}
                </Route>
                <Route exact path="/">
                  <Route path="/post/:id" component={ProjectPopup} />
                  <Home />
                </Route>
                <Route>
                  {'404'}
                </Route>
              </Switch>
            </div>
          </Router>
        ):(
          <h1> Loading ... </h1>
      )}
    </>
  );
}

export default App;
