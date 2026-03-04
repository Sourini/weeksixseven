const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/requireAuth');
const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productControllers');
const requireAuth = require('../middleware/requireAuth');

// GET /api/products
router.get('/', getAllProducts);

// GET /api/products/:productId
router.get('/:productId', getProductById);

// Apply authentication middleware to all routes below
router.use(requireAuth); 

// POST /api/products
router.post('/', createProduct);

// PUT /api/products/:productId
router.put('/:productId', updateProduct);

// DELETE /api/products/:productId
router.delete('/:productId', deleteProduct);

module.exports = router;
