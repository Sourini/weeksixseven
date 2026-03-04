const ProductListing = ({ product }) => {
  return (
    <div className="product-preview">
      <h2>{product.productName}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Inventory Count: {product.inventoryCount}</p>
    </div>
  );
};

export default ProductListing;
