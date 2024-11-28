import { createContext, useState } from "react"

export const CartContext = createContext();

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) =>{
        setCart((prevCart)=>{

            const productIndex = prevCart.findIndex((item)=>item.product._id === product._id);
            if(productIndex >= 0){
                //if product exist in the cart, update the quantity
                const updatedCart = [...prevCart];
                updatedCart[productIndex].quantity += 1;
                return updatedCart;
            }else{
                return [...prevCart, {product, quantity:1}];//If product doesn't exist in the cart, add it
            }
        })
    }

  return (
    <CartContext.Provider value={{cart, addToCart, setCart}}>
        {children}        
    </CartContext.Provider>
  )
}

