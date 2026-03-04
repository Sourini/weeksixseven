import { useNavigate } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("user"));
const token = user ? user.token : null;

const AddProductPage = () => {
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
      const newProduct = {
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
  addProduct(newProduct);
  navigate("/");
};

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inventoryCount, setInventoryCount] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [isVerified, setIsVerified] = useState("true");

const addProduct = async (newProduct) => {
  try {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newProduct),
    });
    if (!res.ok) throw new Error("Failed to add product");
    return true;
  } catch (error) {
    console.error("Error adding product:", error);
    return false;
  }
};

  return (
    <div className="create">
      <h2>Add a New Product</h2>
      <form onSubmit={submitForm}>
        <label>Product Name:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Furniture">Furniture</option>
          <option value="Food">Food</option>
          <option value="Other">Other</option>
        </select>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        <label>Price:</label>
        <input type="number" step="0.01" min="0" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <label>Inventory Count:</label>
        <input type="number" min="0" value={inventoryCount} onChange={(e) => setInventoryCount(e.target.value)} required />
        <label>Supplier Name:</label>
        <input type="text" value={supplierName} onChange={(e) => setSupplierName(e.target.value)} required />
        <label>Supplier Email:</label>
        <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required />
        <label>Supplier Phone:</label>
        <input type="text" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} required />
        <label>Supplier Verified:</label>
        <select value={isVerified} onChange={(e) => setIsVerified(e.target.value)}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <button>Add a New Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
