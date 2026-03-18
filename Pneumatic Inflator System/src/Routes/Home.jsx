import React from 'react'
import styles from "./Home.module.css";


const Home = () => {
  return (
    <>
      <div className={`container my-5 ${styles.heroSection}`}>
        <div className={`row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg ${styles.heroBox}`}>
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="/image/Industrial air equipment collage.png" className={`d-block mx-lg-auto img-fluid ${styles.heroImg}`} alt='Industrial air equipment collage' width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className={`display-5 fw-bold lh-1 mb-3 ${styles.heading}`}>WELCOME TO PNEUMATIC INFLATOR SYSTEM!!!</h1>
            <p className={`lead ${styles.subtext}`}><b><u>“Advanced Pneumatic Inflator Systems for Precision and Performance”</u></b>
              Powering industries with reliable air compression solutions. Monitor pressure, manage equipment, and ensure efficiency with our smart inflator system.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className={`btn  px-4 me-md-2 ${styles.btnCustom}`}>Get Start with One Click...</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
