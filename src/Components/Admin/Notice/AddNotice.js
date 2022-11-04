import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React from "react";

import { Link } from "react-router-dom";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

const AddNotice = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <div className="d-flex justify-content-between top-content">
            <h4>Add Notice</h4>{" "}
            <button className="btn btn-success mb-2">
              <Link to="/all-notice">All Notice</Link>
            </button>
          </div>
          <div className="card-body border rounded">
            <form className="add-notice">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="heading">Heading</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="heading"
                    placeholder="Heading"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="s-heading">Sub Heading</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="s-heading"
                    placeholder="Sub Heading"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="title">Title</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="title"
                    placeholder="Title"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="notice-date">Notice Date</label>
                  <input
                    className="form-control"
                    type="date"
                    name=""
                    id="notice-date"
                    placeholder="Notice Date"
                  />
                </div>
                <div>
                  <label htmlFor="status">Status</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="status"
                    placeholder="Status"
                  />
                </div>
              </div>
              <p>
                Notice Details
              </p>

              <CKEditor
                editor={ClassicEditor}
                data=""
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />

              <button className="btn btn-success mt-2 common-color">Upload</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddNotice;
