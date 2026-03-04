import ProductListings from "../components/ProductListings";
import { useState } from "react";
import { useEffect } from "react";


const Home = () => {
  return (
    <div className="home">
      <ProductListings />
    </div>
  );
};

const [products, setProducts] = useState(null);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Could not fetch products");
      const data = await res.json();
      setProducts(data);
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };
  fetchProducts();
}, []);

return (
  <div className="home">
    {error && <div>{error}</div>}
    {isPending && <div>Loading...</div>}
    {products && <ProductListings products={products} />}
  </div>
);

export default Home;
