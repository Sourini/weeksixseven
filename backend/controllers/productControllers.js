const Product = require('../models/productModel');
const mongoose = require('mongoose');

// GET /api/products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve products" });
  }
};

// POST /api/products
const createProduct = async (req, res) => {
  try {
    const user_id = req.user?._id;

    const newProduct = new Product({
      ...req.body,
      ...(user_id ? { user_id } : {}),
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);

    if (error?.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation failed",
        errors: Object.values(error.errors).map((e) => e.message),
      });
    }

    res.status(500).json({ error: "Server Error" });
  }
};

// GET /api/products/:productId
const getProductById = async (req, res) => {
  res.send("getProductById");
};

// PUT /api/products/:productId
const updateProduct = async (req, res) => {
  res.send("updateProduct");
};

// DELETE /api/products/:productId
const deleteProduct = async (req, res) => {
  res.send("deleteProduct");
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
