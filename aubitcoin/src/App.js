import "./App.css";
import React, { useState } from "react";
import { getUserToken, saveUserToken, clearUserToken } from "./localStorage";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Search from "./pages/Search"

export var SERVER_URL = "http://127.0.0.1:5000";

function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;