import { useContext } from "react";
import "./ProductCard.css";
import CartContext from "../context/cart/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className='productCard__wrapper'>
      <div>
        <img className='productCard__img' src={product.image} alt='' />
        <h4>{product.name}</h4>
        <button
          className='ProductCard__button'
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
