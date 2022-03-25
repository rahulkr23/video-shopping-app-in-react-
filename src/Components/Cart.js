import { useContext } from "react";
import "./Cart.css";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { showCart, cartItems} = useContext(CartContext);

  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right" }}>

          </div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
