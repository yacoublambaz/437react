import "../App.css";
import React, { useState } from "react";
import { getUserToken, saveUserToken, clearUserToken } from "../localStorage";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
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
    const navigate = useNavigate();

    function Gotomain(){
        navigate('/', {replace:true});
    }

    function Gotohome(){
        navigate('/home', {replace:true})
    }

    function Gotocart(){
        navigate('/cart', {replace:true});
    }

    return(
        <><div style={{color:"white"}}>Welcome to Cart</div>
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
                            <IconButton onClick={Gotohome}>
                                <HomeIcon
                                    className="navbar-icon"
                                    sx={{ color: "white", fontSize: 40 }} />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton onClick={Gotocart}>
                                <ShoppingCartIcon
                                    className="navbar-icon"
                                    sx={{ color: "white", fontSize: 40 }} />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <SearchIcon
                                    className="navbar-icon"
                                    sx={{ color: "white", fontSize: 40 }} />
                            </IconButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </>
    )
}
export default Cart;

