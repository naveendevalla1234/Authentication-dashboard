import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="page-section">
      <div className="page-header">
        <p className="eyebrow">OUR COLLECTION</p>
        <h1>Furniture Products</h1>
        <p>Explore our complete furniture collection.</p>
      </div>

      <div className="search-area">
        <input
          type="text"
          placeholder="Search furniture..."
          value={search}
          onChange={(e) =>
            setSearchParams(
              e.target.value ? { search: e.target.value } : {}
            )
          }
        />
      </div>

      <div className="category-links">
        <Link to="/products/living-room">Living Room</Link>
        <Link to="/products/bedroom">Bedroom</Link>
        <Link to="/products/dining">Dining</Link>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;