import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
        {/* Hero Section start */}
        <div className={`container my-5 ${styles.heroSection}`}>
          <div
            className={`row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg ${styles.heroBox}`}
          >
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="/image/Industrial air equipment collage.png"
                className={`d-block mx-lg-auto img-fluid ${styles.heroImg}`}
                alt="Industrial air equipment collage"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className={`display-5 fw-bold lh-1 mb-3 ${styles.heading}`}>
                WELCOME TO PNEUMATIC INFLATOR SYSTEM!!!
              </h1>
              <p className={`lead ${styles.subtext}`}>
                <b>
                  <u>
                    “Advanced Pneumatic Inflator Systems for Precision and
                    Performance”
                  </u>
                </b>
                Powering industries with reliable air compression solutions.
                Monitor pressure, manage equipment, and ensure efficiency with our
                smart inflator system.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className={`btn  px-4 me-md-2 ${styles.btnCustom}`}
                >
                  Get Start with One Click...
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Hero section ends */}
        {/* Festures Cards starts */}
        <div className="container px-4 py-5" id="icon-grid">
          <h2 className="pb-2 border-bottom">Our Features</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div className={`col d-flex align-items-start ${styles.featureCard}`}>
              <i className={`bi bi-cart-check  ${styles.featureIcon}`}></i>
              <div>
                <h3 className={`fw-bold mb-0 fs-4 text-body-emphasis ${styles.featureTitle}`}>
                  Sales Management
                </h3>
                <p className={styles.featureText}>
                  Manage daily sales and transactions efficiently.
                </p>
              </div>
            </div>
            <div className={`col d-flex align-items-start ${styles.featureCard}`}>
              <i className={`bi bi-receipt  ${styles.featureIcon}`}></i>
              <div>
                <h3 className={`fw-bold mb-0 fs-4 text-body-emphasis ${styles.featureTitle}`}>
                  Smart Billing
                </h3>
                <p className={styles.featureText}>
                  Generate accurate and fast bills instantly.
                </p>
              </div>
            </div>
            <div className={`col d-flex align-items-start ${styles.featureCard}`}>
              <i className={`bi bi-box-seam  ${styles.featureIcon}`}></i>
              <div>
                <h3 className={`fw-bold mb-0 fs-4 text-body-emphasis ${styles.featureTitle}`}>
                  Product Management
                </h3>
                <p className={styles.featureText}>
                  Keep track of all inflator products and stock.
                </p>
              </div>
            </div>
            <div className={`col d-flex align-items-start ${styles.featureCard}`}>
              <i className={`bi bi-bar-chart-line  ${styles.featureIcon}`}></i>
              <div>
                <h3 className={`fw-bold mb-0 fs-4 text-body-emphasis ${styles.featureTitle}`}>
                  Reports & Analytics
                </h3>
                <p className={styles.featureText}>
                  View sales and purchase insights easily.
                </p>
              </div>
            </div>
            <div className={`col d-flex align-items-start ${styles.featureCard}`}>
              <i className={`bi bi-speedometer2  ${styles.featureIcon}`}></i>
              <div>
                <h3 className={`fw-bold mb-0 fs-4 text-body-emphasis ${styles.featureTitle}`}>
                  Dashboard
                </h3>
                <p className={styles.featureText}>
                  Monitor all activities from one place.
                </p>
              </div>
            </div>
            <div className={`col d-flex align-items-start ${styles.featureCard}`}>
              <i className={`bi bi-bag-check  ${styles.featureIcon}`}></i>
              <div>
                <h3 className={`fw-bold mb-0 fs-4 text-body-emphasis ${styles.featureTitle}`}>
                  Purchase Management
                </h3>
                <p className={styles.featureText}>
                  Handle supplier purchases smoothly.
                </p>
              </div>
            </div>
            <div className={`col d-flex align-items-start ${styles.featureCard}`}>
              <i className={`bi bi-check-circle  ${styles.featureIcon}`}></i>
              <div>
                <h3 className={`fw-bold mb-0 fs-4 text-body-emphasis ${styles.featureTitle}`}>
                  Accuracy
                </h3>
                <p className={styles.featureText}>
                  Reduce errors with automated calculations.
                </p>
              </div>
            </div>
            <div className={`col d-flex align-items-start ${styles.featureCard}`}>
              <i className={`bi bi-people  ${styles.featureIcon}`}></i>
              <div>
                <h3 className={`fw-bold mb-0 fs-4 text-body-emphasis ${styles.featureTitle}`}>
                  Easy to Use
                </h3>
                <p className={styles.featureText}>
                  Simple interface for all departments.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Features section ends  */}
    </>
  );
};

export default Home;
