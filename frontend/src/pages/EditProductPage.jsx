import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("user"));
const token = user ? user.token : null;

const EditProductPage = () => {
  return (
    <div className="create">
      <h2>Update Product</h2>
    </div>
  );
};

useEffect(() => {
  const fetchProduct = async () => {
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    setProductName(data.productName);
    setCategory(data.category);
    setDescription(data.description);
    setPrice(data.price.toString());
    setInventoryCount(data.inventoryCount.toString());
    setSupplierName(data.supplier.name);
    setContactEmail(data.supplier.contactEmail);
    setContactPhone(data.supplier.contactPhone);
    setIsVerified(data.supplier.isVerified ? "true" : "false");
  };
  fetchProduct();
}, [id]);

const updateProduct = async (product) => {
  try {
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(product),
    });
    if (!res.ok) throw new Error("Failed to update product");
    return true;
  } catch (error) {
    console.error("Error updating product:", error);
    return false;
  }
};

const submitForm = (e) => {
  e.preventDefault();
  const updatedProduct = {
    productName,
    category,
    description,
    price: parseFloat(price),
    inventoryCount: parseInt(inventoryCount, 10),
    supplier: {
      name: supplierName,
      contactEmail,
      contactPhone,
      isVerified: isVerified === "true",
    },
  };
  updateProduct(updatedProduct);
  navigate(`/products/${id}`);
};

export default EditProductPage;
