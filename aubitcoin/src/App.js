import "./App.css";
import React, { useState } from "react";
import { getUserToken, saveUserToken, clearUserToken } from "./localStorage";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import { IconButton,Typography,Button,Toolbar,AppBar, makeStyles, Box, List, ListItem, Icon , SvgIcon} from "@mui/material";  
import ABC from "./abc.svg";


var SERVER_URL = "http://127.0.0.1:5000";

function App() {
  const States = {
    PENDING: "PENDING",
    USER_CREATION: "USER_CREATION",
    USER_LOG_IN: "USER_LOG_IN",
    USER_AUTHENTICATED: "USER_AUTHENTICATED",
  };
  
  let [userToken, setUserToken] = useState(getUserToken());
  let [authState, setAuthState] = useState(States.PENDING);

  function login(username, password) {
    return fetch(`${SERVER_URL}/authentication`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((body) => {
        setAuthState(States.USER_AUTHENTICATED);
        setUserToken(body.token);
        saveUserToken(body.token);
      });
  }

  function createUser(username, password) {
    return fetch(`${SERVER_URL}/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: username,
        password: password,
      }),
    }).then((response) => login(username, password));
  }

  function logout() {
    setUserToken(null);
    clearUserToken();
  }
  return (
    <div className="App">
      <Box className="navbar">
        <List className="navbar-li">
        <ListItem >
          
          </ListItem>
          <IconButton><Icon style={{width:40, height:40}}><img className="logoIm" src="./abc.png"/></Icon></IconButton>
          <ListItem >
          <IconButton><HomeIcon className="navbar-icon" sx={{color: "white", fontSize: 40}}/></IconButton>
          </ListItem>
          <ListItem>
            <IconButton><ShoppingCartIcon className="navbar-icon" sx={{color: "white", fontSize: 40}}/></IconButton>
          </ListItem>
          <ListItem>
            <IconButton><SearchIcon className="navbar-icon" sx={{color: "white", fontSize: 40}}/></IconButton>
          </ListItem>
          <ListItem>
            <IconButton><LoginIcon className="navbar-icon" sx={{color: "white", fontSize: 40}}/></IconButton>
          </ListItem>

        </List>

      </Box>
    </div>
  );
}

export default App;
