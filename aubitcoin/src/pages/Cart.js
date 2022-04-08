import "../App.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SearchIcon from "@mui/icons-material/Search";
import {useNavigate } from "react-router-dom";
import {
  IconButton,
  Box,
  List,
  ListItem,
  Avatar,
  Icon,
} from "@mui/material";

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
        <>
        <Box display="flex" flexDirection="row">
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
                            <IconButton onClick={Gotomain}>
                                <Icon style={{ width: 40, height: 40 }}>
                                    <img className="logoIm" src="./abc.png" />
                                </Icon>
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

            <Box className="mainContent">

            </Box>

            </Box>
        </>
    )
}
export default Cart;

