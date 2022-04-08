import "../App.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SearchIcon from "@mui/icons-material/Search";
import {useNavigate } from "react-router-dom";
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

function Home(){
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
            setUserInitial(body.user_initial)
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

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = [
        <div className="item" data-value="1">1</div>,
        <div className="item" data-value="2">2</div>,
        <div className="item" data-value="3">3</div>,
        <div className="item" data-value="4">4</div>,
        <div className="item" data-value="5">5</div>,
    ];
    

    return(
        <>
        <Box display="flex" flexDirection="row">
            <Box display="flex" flexDirection="row">
                <Box className="navbar">
                    <List className="navbar-li">
                        <ListItem>
                            <IconButton onClick={Gotomain}>
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
                                    sx={{ color: "white", fontSize: 40 }} />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton onClick={Gotocart}>
                                <ShoppingCartOutlinedIcon
                                    className="navbar-icon"
                                    sx={{ color: "#f3c317", fontSize: 40 }} />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton onClick={Gotosearch}>
                                <SearchIcon
                                    className="navbar-icon"
                                    sx={{ color: "#f3c317", fontSize: 40 }} />
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

                <Box display="flex" flexDirection="column" color={"white"} marginLeft={"10px"}>
                    <Box className="header">
                        <Typography variant="h4">Home</Typography>
                    </Box>
                    <Box className="shops">
                    </Box>
                </Box>

                <Box>
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        controlsStrategy="alternate"
                    />
                </Box>
                
            </Box>

            <Box className="mainContent">

            </Box>

            </Box>
        </>
    )
}
export default Home;