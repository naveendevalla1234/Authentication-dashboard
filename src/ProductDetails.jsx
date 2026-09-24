import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <section className="page-section">
        <h1>Product Not Found</h1>
        <Link to="/products">Back to Products</Link>
      </section>
    );
  }

  return (
    <section className="details-page">
      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="details-content">
        <span className="category">{product.category}</span>

        <h1>{product.name}</h1>

        <p>{product.description}</p>

        <h2>₹{product.price.toLocaleString()}</h2>

        <button
          className="primary-btn"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>

        <Link to="/products" className="back-link">
          ← Back to Products
        </Link>
      </div>
    </section>
  );
}

export default ProductDetails;