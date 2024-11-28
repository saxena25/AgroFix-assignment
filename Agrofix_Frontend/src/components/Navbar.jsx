// import agrofixLogo from "../assets/agrofixLogo.png";
import search from "../assets/search.png";
import cart from "../assets/cart.png";
import "./Navbar.css"
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/')
    }
  return (
    <>
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="navbar-logo" onClick={handleClick}>
                    <h2>AGROFIX</h2>
                </div>
                <div className="search-bar">
                    <input type="search" name="search" className="nav-search" placeholder="Search Vegetables & Fruits" />
                    <img src={search} alt="search Glass" className="search-icon" />
                </div>
                <div className="right-navbar">
                    <button onClick={()=>navigate("/admin")}>Admin</button>
                    <div className="cart-btn-wrapper" onClick={()=>navigate("/cart")}>
                        <button className="cart-btn">My Cart</button>
                        <img src={cart} alt="Cart" className="nav-cart" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
