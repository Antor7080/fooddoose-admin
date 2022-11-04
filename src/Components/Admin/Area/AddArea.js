import React from 'react';
import Navbar from '../../../layouts/backend/Navbar';
import Sidebar from '../../../layouts/backend/Sidebar';

const AddArea = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <h4>Add Area</h4>
          <div className="card">
            <form className="p-3">
              <div className="row">
                <div className="">
                  <label htmlFor="d-name">District Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="d-name"
                    placeholder="District Name"
                  />
                </div>
                <div>
                  <label htmlFor="d-desc">District Description</label>
                  <textarea className='form-control' name="" id="d-desc" cols="30" rows="5" placeholder='District Description'></textarea>
                </div>
                <div className="col-md-6 xol-lg-6 col-sm-6">
                  <label htmlFor="d-image">District Image</label>
                  <input
                    className="form-control"
                    type="file"
                    name=""
                    id="d-image"
                  />
                </div>
                <div className="col-md-6 xol-lg-6 col-sm-6">
                  <label htmlFor="db-image">District Banner Image</label>
                  <input
                    className="form-control"
                    type="file"
                    name=""
                    id="db-image"
                  />
                </div>
              </div>
              <button className='btn btn-success mt-2 common-color'>Add</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddArea;