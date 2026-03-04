import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const { id } = useParams();
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const navigate = useNavigate();

useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await fetch(`/api/products/${id}`);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchProduct();
}, [id]);

const ProductPage = () => {
  return (
    <div className="product-preview">
      <h2>Product Details</h2>
    <button onClick={() => navigate(`/edit-product/${product._id}`)}>Edit</button>
    <button onClick={() => navigate("/")}>Back</button>
    <button onClick={() => onDeleteClick(product._id)}>Delete</button>
    </div>
  );
};

const deleteProduct = async (productId) => {
  try {
    const res = await fetch(`/api/products/${productId}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete product");
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

const onDeleteClick = (productId) => {
  const confirm = window.confirm("Are you sure you want to delete this product?");
  if (!confirm) return;
  deleteProduct(productId);
  navigate("/");
};

export default ProductPage;
