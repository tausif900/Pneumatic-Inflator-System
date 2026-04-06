import React, { useState } from "react";
import styles from "./Dashboard.module.css";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [searchProducts, setSearchProducts] = useState("");
  const [productStatus, setProductStatus] = useState("All");
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    Product_Name: "",
    Category: "",
    Quantity: "",
    Net_Price: "",
    Status: "Available",
  });

  const [editID, setEditID] = useState(null);

  // handleChange is a function that handles the change when we write anything in input fields.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Add Product funtionality
  const handleAddProduct = () => {
    if (!newProduct.Product_Name || !newProduct.Category) {
      alert("Please fill all fields");
    }
    if (editID !== null) {
      const updatedProducts = products.map((product) => {
        product.ID === editID ? { ...newProduct, ID: editID } : product;
      });
      setProducts(updatedProducts);
      setEditID(null);
    }
    const newEntry = { ...newProduct, ID: products.length + 1 };
    setProducts([...products, newEntry]);
    setNewProduct({
      Product_Name: "",
      Category: "",
      Quantity: "",
      Net_Price: "",
      Status: "Available",
    });
  };

  //Delete Product funtionality
  const handleDeleteProduct = (id) => {
    const updateProducts = products.filter((product) => product.ID !== id);
    setProducts(updateProducts);
  };

  const handleEditProduct = (product) => {
    setNewProduct(product);
    setEditID(product.ID);
  };

  const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4000 },
    { name: "May", sales: 6000 },
  ];

  const filteredProducts = products
    .filter((product) => {
      return productStatus === "All" || product.Status === productStatus;
    })
    .filter((product) => {
      return product.Product_Name.toLowerCase().includes(
        searchProducts.toLowerCase(),
      );
    });

  return (
    <>
      <div className={styles.dashboardContainer}>
        {/* Heading */}
        <h2 className={styles.heading}>Dashboard</h2>
        <hr />
        {/* Cards Sections */}
        {/* Card-1 */}
        <div className={styles.cardGrid}>
          <div className={`${styles.card} ${styles.salesCard}`}>
            <div className={styles.cardTop}>
              <h5 className="card-title ">Total Sales</h5>
              <i className="bi bi-cart-check"></i>
            </div>
            <h4 className="card-title">Count: 50 sales</h4>
            <h3 className="card-text"> Rs 25,000.</h3>
          </div>
          {/* Card-2 */}
          <div className={`${styles.card} ${styles.purchaseCard}`}>
            <div className={styles.cardTop}>
              <h5 className="card-title">Total Purchases</h5>
              <i className="bi bi-bag-check"></i>
            </div>
            <h4 className="card-title">Count: 30 Purchases</h4>
            <h3 className="card-text"> Rs 25,000.</h3>
          </div>
          {/* Card-3 */}
          <div className={`${styles.card} ${styles.revenueCard}`}>
            <div className={styles.cardTop}>
              <h5 className="card-title">Total Revenue</h5>
              <i className="bi bi-currency-rupee"></i>
            </div>
            <h3 className="card-text">Rs 1,20,000.</h3>
          </div>
          {/* Card-4 */}
          <div className={`${styles.card} ${styles.productsCard}`}>
            <div className={styles.cardTop}>
              <h5 className="card-title">Products</h5>
              <i className="bi bi-box"></i>
            </div>
            <h3 className="card-text">120</h3>
          </div>
          {/* Card-5 */}
          <div className={`${styles.card} ${styles.ordersCard}`}>
            <div className={styles.cardTop}>
              <h5 className="card-title">Orders</h5>
              <i className="bi bi-receipt"></i>
            </div>
            <h3 className="card-text">320</h3>
          </div>
        </div>
      </div>

      {/* Recent Activities Section */}

      <div className={styles.recentActivityContainer}>
        <h2 className={styles.heading}>Recent Activities</h2>
        <hr />
        <div className={styles.tableContainer}>
          <table className={`table table-striped table-hover ${styles.table}`}>
            <thead>
              <tr>
                <th scope="col">SR.NO</th>
                <th scope="col">Type</th>
                <th scope="col">Item</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Sale</td>
                <td>Inflator Pump</td>
                <td>₹5,000</td>
                <td>Today</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Purchase</td>
                <td>Air Compressor</td>
                <td>₹15,000</td>
                <td>Yesterday</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Order</td>
                <td>Tyre Inflator</td>
                <td>₹3,000</td>
                <td>2 Days ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Products Overview Section */}
      <div className={styles.recentActivityContainer}>
        <h2 className={styles.heading}>Product Overview</h2>
        <hr />
        {/* CRUD for Product ----> form for product */}
        <div className="card p-2 shadow-sm mb-4 mx-5 px-5">
          <h5 className="px-3 my-3">Add New Product</h5>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="Product_Name"
                className="form-control mx-2"
                placeholder="Product Name"
                value={newProduct.Product_Name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="Category"
                className="form-control mx-2"
                placeholder="Category"
                value={newProduct.Category}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="number"
                name="Quantity"
                className="form-control mx-2"
                placeholder="Quantity"
                value={newProduct.Quantity}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="number"
                name="Net_Price"
                className="form-control mx-2"
                placeholder="Price"
                value={newProduct.Net_Price}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <select
                className="form-control mx-2"
                name="Status"
                value={newProduct.Status}
                onChange={handleChange}
              >
                <option>Available</option>
                <option>Low Stock</option>
                <option>Not Available</option>
              </select>
            </div>
            <div className="text-start col-md-6 mb-3">
              <button
                type="button"
                className="btn btn-primary px-4 mx-2"
                onClick={handleAddProduct}
              >
                {editID !== null ? "Update" : "Add"}
              </button>
              <button
                type="button"
                className="btn btn-primary px-4 mx-2"
                onClick={() => handleEditProduct(product)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Search Input to check Products Availability*/}
        <div className="row mx-2">
          <div className="mb-3 col-6">
            <input
              type="text"
              className="form-control mx-2"
              placeholder="Search Products......"
              value={searchProducts}
              onChange={(e) => setSearchProducts(e.target.value)}
            />
          </div>

          {/* Buttons for Filtration */}
          <div className="mb-3 col-6">
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => setProductStatus("All")}
            >
              All
            </button>
            <button
              type="button"
              className="btn btn-success me-2 "
              onClick={() => setProductStatus("Available")}
            >
              Available Products
            </button>
            <button
              type="button"
              className="btn btn-warning me-2"
              onClick={() => setProductStatus("Low Stock")}
            >
              Low Stock Product
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => setProductStatus("Not Available")}
            >
              Out of Stock Products
            </button>
          </div>
        </div>
        <div className={`table-responsive ${styles.tableContainer}`}>
          <table className={`table table-striped table-hover ${styles.table}`}>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category</th>
                <th scope="col">Quantity</th>
                <th scope="col">Net Price</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.ID}>
                    <td>{product.ID}</td>
                    <td>{product.Product_Name}</td>
                    <td>{product.Category}</td>
                    <td>{product.Quantity}</td>
                    <td>{product.Net_Price}</td>
                    <td>
                      <span
                        className={
                          product.Status === "Available"
                            ? "badge bg-success"
                            : product.Status === "Low Stock"
                              ? "badge bg-warning text-dark"
                              : "badge bg-danger"
                        }
                      >
                        {product.Status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteProduct(product.ID)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Charts Section */}
      <div className={styles.chartSection}>
        <h2 className={styles.heading}>Charts</h2>
        <hr />
        <h3>Sales Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#6d7f8e" />
            <XAxis dataKey="name" stroke="#f4f7fa" />
            <YAxis stroke="#f4f7fa" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#24303b",
                border: "1px solid rgba(242, 140, 40, 0.35)",
                borderRadius: "8px",
                color: "#f4f7fa",
              }}
            />
            <Legend wrapperStyle={{ color: "#f4f7fa" }} />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#f28c28"
              strokeWidth={3}
              dot={{ r: 4, fill: "#f28c28" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default Dashboard;
