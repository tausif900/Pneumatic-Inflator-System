import React from 'react'
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <div className={styles.dashboardContainer}>
        {/* Heading */}
        <h2 className={styles.heading}>Dashboard</h2>
        {/* Card-1 */}
        <div className={styles.cardGrid}>
          <div className={`${styles.card} ${styles.salesCard}`}>
            <div className={styles.cardTop}>
              <h5 className="card-title ">Total Sales</h5>
              <i className='bi bi-cart-check'></i>
            </div>
            <h4 className='card-title'>Count: 50 sales</h4>
            <h3 className="card-text"> Rs 25,000.</h3>
          </div>
          {/* Card-2 */}
          <div className={`${styles.card} ${styles.purchaseCard}`}>
            <div className={styles.cardTop}>
              <h5 className="card-title">Total Purchases</h5>
              <i className='bi bi-bag-check'></i>
            </div>
            <h4 className='card-title'>Count: 30 Purchases</h4>
            <h3 className="card-text"> Rs 25,000.</h3>
          </div>
          {/* Card-3 */}
          <div className={`${styles.card} ${styles.revenueCard}`}>
            <div className={styles.cardTop}>
              <h5 className="card-title">Total Revenue</h5>
              <i className='bi bi-currency-rupee'></i>
            </div>
            <h3 className="card-text">Rs 1,20,000.</h3>
          </div>
          {/* Card-4 */}
          <div className={`${styles.card} ${styles.productsCard}`}>
            <div className={styles.cardTop} >
              <h5 className="card-title">Products</h5>
              <i className='bi bi-box'></i>
            </div>
            <h3 className="card-text">120</h3>
          </div>
          {/* Card-5 */}
          <div className={`${styles.card} ${styles.ordersCard}`}>
            <div className={styles.cardTop}>
              <h5 className="card-title">Orders</h5>
              <i className='bi bi-receipt'></i>
            </div>
            <h3 className="card-text">320</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;