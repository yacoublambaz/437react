import "../App.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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

            <Box className="mainContent">

            </Box>

            </Box>
        </>
    )
}
export default Cart;

