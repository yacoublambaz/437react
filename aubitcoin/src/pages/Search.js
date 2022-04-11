import "../App.css";
import "./Search.css"
import algoliasearch from 'algoliasearch/lite';
import React, { useState } from "react";
import { getUserToken, saveUserToken, clearUserToken } from "../localStorage";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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
import LoginDialog from "../UserCredentialsDialog/LoginDialog";
import RegisterDialog from "../UserCredentialsDialog/RegisterDialog";
import LogoutIcon from "@mui/icons-material/Logout";
import { ConstraintLayout, ConstraintGuide } from "react-constraint-layout";
import BoughtTransaction from "../transaction/boughtTransaction";
import SoldTransaction from "../transaction/soldTransaction";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import { SERVER_URL } from "../App";

function Search() {
  const States = {
    PENDING: "PENDING",
    USER_CREATION: "USER_CREATION",
    USER_LOG_IN: "USER_LOG_IN",
    USER_AUTHENTICATED: "USER_AUTHENTICATED",
    HOME: "HOME",
  };

  
function Hit(props) {
  return (
    <div>
      <img src={props.hit.image} align="left" alt={props.hit.name} />
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price">${props.hit.price}</div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};


  let [userToken, setUserToken] = useState(getUserToken());
  let [authState, setAuthState] = useState(States.PENDING);
  let [userId, setUserId] = useState(null);
  let [userName, setUserName] = useState(null);
  let [userBalance, setUserBalance] = useState(0);
  let [userInitial, setUserInitial] = useState(null);

  function login(user_id, password) {
    return fetch(`${SERVER_URL}/authentication`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user_id,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((body) => {
        setAuthState(States.USER_AUTHENTICATED);
        setUserToken(body.token);
        saveUserToken(body.token);
        setUserId(user_id);
        setUserName(body.user_name);
        setUserInitial(body.user_initial);
        setUserBalance(body.balance);
      });
  }

  function createUser(user_id, username, password, aubEmail) {
    return fetch(`${SERVER_URL}/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user_id,
        user_name: username,
        password: password,
        email: aubEmail,
      }),
    }).then((response) => login(user_id, password));
  }

  const navigate = useNavigate();

  function Gotoprofile() {
    navigate("/profile", { replace: true });
  }

  function Gotohome() {
    navigate("/", { replace: true });
  }

  function Gotocart() {
    navigate("/cart", { replace: true });
  }

  function Gotosearch() {
    navigate("/search", { replace: true });
  }

  function logout() {
    setUserToken(null);
    clearUserToken();
  }

  const searchClient = algoliasearch(
    'B1G2GM9NG0',
    'aadef574be1f9252bb48d4ea09b5cfe5'
  );

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
              <IconButton onClick={Gotoprofile}>
                <Icon style={{ width: 40, height: 40 }}>
                  <img className="logoIm" src="./abc.png" />
                </Icon>
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton onClick={Gotohome}>
                <HomeIcon
                  className="navbar-icon"
                  sx={{ color: "#f3c317", fontSize: 40 }}
                />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton onClick={Gotocart}>
                <ShoppingCartIcon
                  className="navbar-icon"
                  sx={{ color: "#f3c317", fontSize: 40 }}
                />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton onClick={Gotosearch}>
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
                    sx={{ color: "#f3c317", fontSize: 40 }}
                  />
                </IconButton>
              ) : (
                <IconButton onClick={() => setAuthState(States.USER_LOG_IN)}>
                  <LoginIcon
                    className="navbar-icon"
                    sx={{ color: "#f3c317", fontSize: 40 }}
                  />
                </IconButton>
              )}
            </ListItem>
          </List>
        </Box>

        <Box className="mainContent">

        <div className="ais-InstantSearch">
        <h1>React InstantSearch e-commerce demo</h1>
        <InstantSearch indexName="demo_ecommerce" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <h2>Brands</h2>
            <RefinementList attribute="brand" />
            <Configure hitsPerPage={8} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div><div className="ais-InstantSearch">
        <h1>Search</h1>
        <InstantSearch indexName="demo_ecommerce" searchClient={searchClient}>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
            

        </Box>
      </Box>
    </div>
  );
}
export default Search;
