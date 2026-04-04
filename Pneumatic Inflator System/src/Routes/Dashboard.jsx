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

  const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4000 },
    { name: "May", sales: 6000 },
  ];

  const productsOverviews = [
    {
      ID: 1,
      Product_Name: "Air Compressor",
      Category: "Machine",
      Quantity: 10,
      Net_Price: 15000,
      Status: "Available",
    },
    {
      ID: 2,
      Product_Name: "Air Filter",
      Category: "Filter",
      Quantity: 5,
      Net_Price: 2000,
      Status: "Low Stock",
    },
    {
      ID: 3,
      Product_Name: "Oil Filter",
      Category: "Filter",
      Quantity: 10,
      Net_Price: 500,
      Status: "Not Available",
    },
  ];

  const filteredProducts = productsOverviews
    .filter((product) => {
      return;
      productStatus === "All" || product.Status === productStatus;
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

        {/* Search Input to check Products Availability*/}
        <div class="mb-3">
          <input
            type="text"
            class="form-control mx-2"
            placeholder="Search Products......"
            value={searchProducts}
            onChange={(e) => setSearchProducts(e.target.value)}
          />
        </div>

        {/* Buttons for Filtration */}
        <div class="mb-3 d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-primary me-2"
            onClick={() => setProductStatus("All")}
          >
            All
          </button>
          <button
            type="button"
            class="btn btn-success me-2 "
            onClick={() => setProductStatus("Available")}
          >
            Available Products
          </button>
          <button
            type="button"
            class="btn btn-warning me-2"
            onClick={() => setProductStatus("Low Stock")}
          >
            Low Stock Product
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setProductStatus("Not Available")}
          >
            Out of Stock Products
          </button>
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
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Section */}

      <div className={styles.chartSection}>
        <h2 className={styles.heading}>Charts</h2>
        <hr />
        <h3>Sales Overview</h3>

        {/* Graph Representation */}

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e1e2f",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Legend wrapperStyle={{ color: "#fff" }} />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#00e5ff"
              strokeWidth={3}
              dot={{ r: 4, fill: '"#00e5ff"' }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Dashboard;
