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
  TextField,
  createTheme,
  TextareaAutosize,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { SERVER_URL } from "../App";
import { ThemeProvider } from "@emotion/react";

let theme = createTheme({
  // components:{
  //   // MuiTextField:{

  //   // }
  // }
  palette: {
    primary: {
      main: "#000",
    },
  },
});

function AdminAdd() {
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
    <ThemeProvider theme={theme}>
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
            <Box className="formBox" display="flex" flexDirection="row">
              <div className="wrapper">
                <Typography
                  sx={{ fontFamily: "Arial Black", color: "black" }}
                  variant="h5"
                  margin={"1rem"}
                >
                  Add Coins 
                </Typography>

                <TextField
                  sx={{margin: "1rem"}}
                  type="text"
                  //value={itemQuantity}
                  label="Username"
                  //onChange={(e) => setItemQuantity(e.target.value)}
                />

                <TextField
                  sx={{margin: "1rem"}}
                  type="number"
                  //value={itemQuantity}
                  label="ABC Quantity"
                  //onChange={(e) => setItemQuantity(e.target.value)}
                />
              </div>
            </Box>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}
export default AdminAdd;
