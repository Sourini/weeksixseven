import ProductListing from "./ProductListing";
import { Link } from "react-router-dom";

const ProductListings = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductListing key={product.id} product={product} />
      ))}
      <Link to={`/products/${product.id}`}>
        <h2>{product.productName}</h2>
      </Link>
    </div>
  );
};

export default ProductListings;
