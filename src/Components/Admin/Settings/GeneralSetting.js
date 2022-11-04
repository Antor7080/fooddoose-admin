import React from "react";
import Header from "../../Header";

const GeneralSetting = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <h4>General Settings</h4>
          <div className="card-body border rounded">
            <form className="add-merchant">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="title">Title</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="title"
                    value="FoodDoose"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="m-heading">Website Heading</label>
                  <input
                    className="form-control"
                    type="text"
                    name="heading"
                    id="m-heading"
                    value="Heading"
                  />
                </div>
              </div>
              <button className="btn btn-success mt-2 common-color">Upload</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneralSetting;
