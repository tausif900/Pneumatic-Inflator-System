import React from 'react'

function Home() {
  return (
    <div>
      <center className='m-5'> <h1>WELCOME TO PNEUMATIC INFLATOR SYSTEM</h1>
        <h4>More than a Family that connects you Globally!!!!!!!!!!!!!!!!!!!!!!</h4></center>
      <section className="text-dark text-center py-5">
        <div className="container">
          <h1 className="display-4">Pneumatic Inflator System</h1>
          <p className="lead">
            Smart and efficient solution for automatic tyre inflation.
          </p>

          <button className="btn btn-primary mt-3">
            Explore System
          </button>
        </div>
      </section>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Automatic Pneumatic Tyre Inflation System</h1>
          <p class="lead">The Pneumatic Inflator System is designed to automatically detect and maintain the required tyre pressure. It enhances vehicle safety, improves tyre life, and ensures efficient performance using pneumatic technology.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">  Explore System</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">View Features</button>
          </div>
        </div>
      </div>
      {/* SYSTEM OVERVIEW */}
      <section className="py-5">
        <div className="container">

          <h2 className="text-center mb-4">
            About Pneumatic Inflator System
          </h2>

          <p className="text-center">
            The Pneumatic Inflator System is designed to automatically
            monitor and maintain tyre pressure using compressed air.
            It improves safety, fuel efficiency, and tyre life.
          </p>

        </div>
      </section>


      {/* FEATURES */}
      <section className="py-5">
        <div className="container">

          <h2 className="text-center mb-5">Key Features</h2>

          <div className="row">

            <div className="col-md-4">
              <div className="card p-3 shadow">
                <h4>Automatic Pressure Control</h4>
                <p>
                  Detects tyre pressure and fills air automatically.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 shadow">
                <h4>Fast Air Delivery</h4>
                <p>
                  Pneumatic system ensures quick and efficient inflation.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 shadow">
                <h4>Easy Operation</h4>
                <p>
                  Simple interface for user friendly operation.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Home
