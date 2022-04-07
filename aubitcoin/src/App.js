import "./App.css";
import React, { useState } from "react";
import { getUserToken, saveUserToken, clearUserToken } from "./localStorage";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import {
  IconButton,
  Typography,
  Button,
  Toolbar,
  AppBar,
  Box,
  List,
  ListItem,
  Avatar,
  Icon,
} from "@mui/material";
import LoginDialog from "./UserCredentialsDialog/LoginDialog";
import RegisterDialog from "./UserCredentialsDialog/RegisterDialog";
import LogoutIcon from "@mui/icons-material/Logout";
import { ConstraintLayout, ConstraintGuide } from "react-constraint-layout";
import BoughtTransaction from "./transaction/boughtTransaction";
import SoldTransaction from "./transaction/soldTransaction";
var SERVER_URL = "http://127.0.0.1:5000";

function App() {
  const Pages = {
    PROFILE: "PROFILE",
    HOME: "HOME",
    CART: "CART",
    SEARCH: "SEARCH",
  };

  const States = {
    PENDING: "PENDING",
    USER_CREATION: "USER_CREATION",
    USER_LOG_IN: "USER_LOG_IN",
    USER_AUTHENTICATED: "USER_AUTHENTICATED",
    HOME: "HOME",
  };

  let [userToken, setUserToken] = useState(getUserToken());
  let [authState, setAuthState] = useState(States.PENDING);
  let [pageState, setpageState] = useState(Pages.Home);

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

  function createUser(username, password, aubId, aubEmail) {
    return fetch(`${SERVER_URL}/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: username,
        password: password,
        aub_id: aubId,
        aub_email: aubEmail,
      }),
    }).then((response) => login(username, password));
  }

  function logout() {
    setUserToken(null);
    clearUserToken();
  }

  return (
    <div className="App">
      <LoginDialog
        open={States.USER_LOG_IN === authState}
        title={"LOGIN"}
        onClose={() => setAuthState(States.PENDING)}
        submitText={"Login"}
        onCreateNew={() => setAuthState(States.USER_CREATION)}
        onSubmit={login}
      />

      <RegisterDialog
        open={States.USER_CREATION === authState}
        title={"REGISTER"}
        onClose={() => setAuthState(States.PENDING)}
        submitText={"Register"}
        onSubmit={createUser}
      />

      <Box display="flex" flexDirection="row">
        <Box className="navbar">
          <List className="navbar-li">
            <ListItem>
              <IconButton>
                <Icon style={{ width: 40, height: 40 }}>
                  <img className="logoIm" src="./abc.png" />
                </Icon>
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton>
                <HomeIcon
                  className="navbar-icon"
                  sx={{ color: "white", fontSize: 40 }}
                />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton>
                <ShoppingCartIcon
                  className="navbar-icon"
                  sx={{ color: "white", fontSize: 40 }}
                />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton>
                <SearchIcon
                  className="navbar-icon"
                  sx={{ color: "white", fontSize: 40 }}
                />
              </IconButton>
            </ListItem>
            <ListItem className="last">
              {userToken !== null ? (
                <IconButton onClick={logout}>
                  <LogoutIcon
                    className="navbar-icon"
                    sx={{ color: "white", fontSize: 40 }}
                  />
                </IconButton>
              ) : (
                <IconButton onClick={() => setAuthState(States.USER_LOG_IN)}>
                  <LoginIcon
                    className="navbar-icon"
                    sx={{ color: "white", fontSize: 40 }}
                  />
                </IconButton>
              )}
            </ListItem>
          </List>
        </Box>

        <Box className="mainContent">
          <img
            className="bubbles"
            src={require("./graphics/bubbles.png")}
          ></img>

          <Box display="flex" flexDirection="column">
            <Box className="avatarBox" display="flex" flexDirection="row">
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  fontSize: 50,
                  backgroundColor: "#F3C317",
                }}
              >
                ZZ
              </Avatar>
              <Box display="flex" flexDirection="column">
                <Typography
                  sx={{
                    fontFamily: "Arial",
                    fontWeight: "bolder",
                    color: "white",
                    marginLeft: 1,
                  }}
                  className="avatarBox-text"
                >
                  Zein Zebib LINE 186
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Arial",
                    fontWeight: "bolder",
                    color: "white",
                    marginLeft: 1,
                  }}
                  className="avatarBox-text"
                >
                  202002343 LINE 197
                </Typography>
              </Box>
            </Box>
            <Box className="balanceBox" display="flex" flexDirection="row">
              <img className="balanceIm" src="./abc.png" />
              <Typography
                sx={{
                  fontFamily: "Arial",
                  fontWeight: "bolder",
                  color: "white",
                }}
              >
                1.0 ABC LINE 210
              </Typography>
            </Box>
          </Box>

          <div class="tabs">
            <input
              type="radio"
              class="tabs__radio"
              name="tabs-example"
              id="tab1"
              checked
            />
            <label for="tab1" class="tabs__label">
              BOUGHT
            </label>
            <div class="tabs__content">
              <List>
                <ListItem>
                  <BoughtTransaction
                    Item={"Pencil"}
                    Date={"02-02-02"}
                    Amount={"1.0"}
                    Receiver={"Sam"}
                    Code={"12343"}
                  ></BoughtTransaction>
                </ListItem>
                <ListItem>
                  <BoughtTransaction
                    Item={"Pencil"}
                    Date={"02-02-02"}
                    Amount={"1.0"}
                    Receiver={"Sam"}
                    Code={"12343"}
                  ></BoughtTransaction>
                </ListItem>
                <ListItem>
                  <BoughtTransaction
                    Item={"Pencil"}
                    Date={"02-02-02"}
                    Amount={"1.0"}
                    Receiver={"Sam"}
                    Code={"12343"}
                  ></BoughtTransaction>
                </ListItem>
                <ListItem>
                  <BoughtTransaction
                    Item={"Pencil"}
                    Date={"02-02-02"}
                    Amount={"1.0"}
                    Receiver={"Sam"}
                    Code={"12343"}
                  ></BoughtTransaction>
                </ListItem>
                <ListItem>
                  <BoughtTransaction
                    Item={"Pencil"}
                    Date={"02-02-02"}
                    Amount={"1.0"}
                    Receiver={"Sam"}
                    Code={"12343"}
                  ></BoughtTransaction>
                </ListItem>
              </List>
            </div>

            <input
              type="radio"
              class="tabs__radio"
              name="tabs-example"
              id="tab2"
            />
            <label for="tab2" class="tabs__label">
              SOLD
            </label>
            <div class="tabs__content">
              <List>
                <ListItem>
                  <SoldTransaction
                    Shop={"T-Mabouta"}
                    Date={"02-02-02"}
                    Amount={"1.0"}
                    Sender={"Sam"}
                    Code={"12343"}
                  ></SoldTransaction>
                </ListItem>
                <ListItem>
                  <SoldTransaction
                    Shop={"T-Mabouta"}
                    Date={"02-02-02"}
                    Amount={"1.0"}
                    Sender={"Sam"}
                    Code={"12343"}
                  ></SoldTransaction>
                </ListItem>
                <ListItem>
                  <SoldTransaction
                    Shop={"T-Mabouta"}
                    Date={"02-02-02"}
                    Amount={"1.0"}
                    Sender={"Sam"}
                    Code={"12343"}
                  ></SoldTransaction>
                </ListItem>
                <ListItem>
                  <SoldTransaction
                    Shop={"T-Mabouta"}
                    Date={"02-02-02"}
                    Amount={"1.0"}
                    Sender={"Sam"}
                    Code={"12343"}
                  ></SoldTransaction>
                </ListItem>
                <ListItem>
                  <SoldTransaction
                    Shop={"T-Mabouta"}
                    Date={"02-02-02"}
                    Amount={"1.0"}
                    Sender={"Sam"}
                    Code={"12343"}
                  ></SoldTransaction>
                </ListItem>
              </List>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default App;
