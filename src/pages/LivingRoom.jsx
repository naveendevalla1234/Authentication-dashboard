import products from "../data/products";
import ProductCard from "../components/ProductCard";

function LivingRoom() {
  const items = products.filter(
    (product) => product.category === "Living Room"
  );

  return (
    <section className="page-section">
      <div className="page-header">
        <p className="eyebrow">COLLECTION</p>
        <h1>Living Room</h1>
        <p>Elegant furniture for beautiful living spaces.</p>
      </div>

      <div className="products-grid">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default LivingRoom;