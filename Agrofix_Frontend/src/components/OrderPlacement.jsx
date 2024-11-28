import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function OrderPlacement() {
  const { cart, setCart } = useContext(CartContext);

  const handleIncrease = (productId) =>{
      setCart(cart.map((item)=>{
        item.product._id === productId ? { ...item, quantity: item.quantity+1 } : item
      }))
  }

  const handleDecrease = (productId) =>{
      setCart(cart.map((item)=>{
        item.product._id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity-1 } : item
      }))
  }

  const handleRemoveItem = (productId) => {
    setCart(cart.filter(item => item.product._id !== productId));
  };  

  

  return (
    <div className="cart-wrapper">
      <div className="cart">
        <h2>Place An Bulk Order</h2>
        {cart.length === 0 ? (
          <h1>Your Cart is Empty!</h1>
        ): (
          <div className="cart-items">
            <div className="form">
              <form action="">
                <label htmlFor="">BuyerName: </label>
                <input type="text" name="" id="" />
              
                <label htmlFor="">Contact: </label>
                <input type="text" name="" id="" />
              
                <label htmlFor="">Address: </label>
                <input type="text" name="" id="" />
              </form>

            </div>
            {cart.map((item)=>(
              <div className="cart-item" key={item._id}>
                <img src={item.product.link} alt={item.product.name} className="cart-item-image" />
                <p>{item.product.name}</p>
                <p>{item.product.price}</p>
                <button onClick={()=>handleIncrease(item.product._id)}>+</button>
                <p>Quantity: {item.quantity}</p>
                <button onClick={()=>handleDecrease(item.product._id)}>-</button>
                <button onClick={()=>handleRemoveItem(item.product._id)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderPlacement;
