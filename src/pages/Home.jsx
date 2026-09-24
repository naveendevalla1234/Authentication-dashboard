import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">PREMIUM FURNITURE STORE</p>

          <h1>
            Make Your Home
            <br />
            <span>Beautiful & Comfortable</span>
          </h1>

          <p>
            Discover premium sofas, beds, dining sets and modern furniture
            designed for your dream home.
          </p>

          <Link to="/products" className="hero-btn">
            Explore Products
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <p className="eyebrow">OUR COLLECTION</p>
          <h2>Featured Furniture</h2>
          <p>Choose furniture that matches your style.</p>
        </div>

        <div className="products-grid">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;