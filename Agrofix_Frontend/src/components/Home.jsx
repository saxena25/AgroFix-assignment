import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Home() {
  const [data, setData] = useState([]);
  const { addToCart } = useContext(CartContext);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:1122/products");
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (product) =>{
    addToCart(product);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-wrapper">
      <div className="home">
        <h1>Product Catalog</h1>
        <div className="products">
          {data.map((product) => (
            <div className="card" key={product._id}>
              <img src={product.link} alt={product.name} />
              <p>{product.name}</p>
              <p>₹{product.price}</p>
              <button onClick={()=> handleAddToCart(product)}>Order</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
