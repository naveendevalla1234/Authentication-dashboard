import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Bedroom() {
  const items = products.filter(
    (product) => product.category === "Bedroom"
  );

  return (
    <section className="page-section">
      <div className="page-header">
        <p className="eyebrow">COLLECTION</p>
        <h1>Bedroom</h1>
        <p>Comfortable furniture for peaceful bedrooms.</p>
      </div>

      <div className="products-grid">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Bedroom;