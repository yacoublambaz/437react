import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Profile from "./pages/Profile"

var SERVER_URL = "http://127.0.0.1:5000";

function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;