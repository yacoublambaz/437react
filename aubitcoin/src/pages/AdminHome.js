import "../App.css";
import React, { useState } from "react";
import { getUserToken, saveUserToken, clearUserToken } from "../localStorage";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  IconButton,
  Box,
  List,
  ListItem,
  Icon,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { SERVER_URL } from "../App";

function AdminHome() {
  const navigate = useNavigate();

  function GoToAdminHome() {
    navigate("/adminhome", { replace: true });
  }

  function GoToAdminAdd() {
    navigate("/adminadd", { replace: true });
  }

  function GoToAdminData() {
    navigate("/admindata", { replace: true });
  }
  function logout() {
    setUserToken(null);
    clearUserToken();
  }

  const States = {
    PENDING: "PENDING",
    USER_CREATION: "USER_CREATION",
    USER_LOG_IN: "USER_LOG_IN",
    USER_AUTHENTICATED: "USER_AUTHENTICATED",
    HOME: "HOME",
  };

  let [userToken, setUserToken] = useState(getUserToken());
  let [authState, setAuthState] = useState(States.PENDING);

  return (
    <div className="App">
      <Box display="flex" flexDirection="row">
        <Box className="navbar">
          <List className="navbar-li">
            <ListItem>
              <IconButton onClick={GoToAdminHome}>
                <Icon style={{ width: 40, height: 40 }}>
                  <img className="logoIm" src="./abc.png" />
                </Icon>
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton onClick={GoToAdminAdd}>
                <AddCircleIcon
                  className="navbar-icon"
                  sx={{ color: "#f3c317", fontSize: 40 }}
                />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton onClick={GoToAdminData}>
                <AnalyticsIcon
                  className="navbar-icon"
                  sx={{ color: "#f3c317", fontSize: 40 }}
                />
              </IconButton>
            </ListItem>
            <ListItem className="last">
              <IconButton onClick={logout}>
                <LogoutIcon
                  className="navbar-icon"
                  sx={{ color: "#f3c317", fontSize: 40 }}
                />
              </IconButton>
            </ListItem>
          </List>
        </Box>

        <Box className="mainContent">
          <img className="bubbles" src={require("../graphics/bubbles.png")} />
          <Typography
            sx={{
              color: "white",
              fontWeight: "bolder",
              marginLeft: "5rem",
              marginTop: "5rem",
            }}
            variant="h4"
          >
            Welcome Admin
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
export default AdminHome;
