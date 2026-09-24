import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Dining() {
  const items = products.filter(
    (product) => product.category === "Dining"
  );

  return (
    <section className="page-section">
      <div className="page-header">
        <p className="eyebrow">COLLECTION</p>
        <h1>Dining</h1>
        <p>Beautiful dining furniture for family moments.</p>
      </div>

      <div className="products-grid">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Dining;