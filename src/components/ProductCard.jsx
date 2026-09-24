import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <span className="category">{product.category}</span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>₹{product.price.toLocaleString()}</strong>

          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>

        <Link to={`/products/${product.id}`} className="details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;