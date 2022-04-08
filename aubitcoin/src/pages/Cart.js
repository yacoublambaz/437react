import "../App.css";
import React, { useState } from "react";
import { getUserToken, saveUserToken, clearUserToken } from "../localStorage";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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

function Cart(){

    const States = {
        PENDING: "PENDING",
        USER_CREATION: "USER_CREATION",
        USER_LOG_IN: "USER_LOG_IN",
        USER_AUTHENTICATED: "USER_AUTHENTICATED",
        HOME: "HOME",
      };

    let [userToken, setUserToken] = useState(getUserToken());
    let [authState, setAuthState] = useState(States.PENDING);

    const navigate = useNavigate();

    function Gotoprofile(){
        navigate('/profile', {replace:true});
    }

    function Gotohome(){
        navigate('/', {replace:true})
    }

    function Gotocart(){
        navigate('/cart', {replace:true});
    }

    function Gotosearch(){
        navigate('/search', {replace:true});
    }

    function logout() {
        setUserToken(null);
        clearUserToken();
      }

    return(
        <div className="App">
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
                            <IconButton onClick={Gotoprofile}>
                                <ChildCareIcon
                                className="navbar-icon"
                                sx={{ color: "#f3c317", fontSize: 40 }}
                                />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton onClick={Gotohome}>
                                <HomeOutlinedIcon
                                    className="navbar-icon"
                                    sx={{ color: "#f3c317", fontSize: 40 }} />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton onClick={Gotocart}>
                                <ShoppingCartOutlinedIcon
                                    className="navbar-icon"
                                    sx={{ color: "white", fontSize: 40 }} />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton onClick={Gotosearch}>
                                <SearchIcon
                                    className="navbar-icon"
                                    sx={{ color: "#f3c317", fontSize: 40 }} />
                            </IconButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </div>
    )
}
export default Cart;

