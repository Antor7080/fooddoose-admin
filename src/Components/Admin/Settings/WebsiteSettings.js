import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React from "react";
import Header from "../../Header";

const WebsiteSettings = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <h4>Website Settings</h4>
          <div className="card-body border rounded">
            <form className="add-merchant">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="w-name">Website Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="w-name"
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
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="w-mail1">Website Email 1</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email_1"
                    id="w-mail1"
                    value="fooddoode@gmail.com"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="w-mail2">Website Email 2</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email_2"
                    id="w-mail2"
                    value="admin@gmail.com"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="w-phone1">Website Phone 1</label>
                  <input
                    className="form-control"
                    type="text"
                    name="phone_1"
                    id="w-phone1"
                    value="+8801837138563"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="w-phone2">Website Phone 2</label>
                  <input
                    className="form-control"
                    type="text"
                    name="phone_2"
                    id="w-phone2"
                    value="+88018371334563"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="w-app">Website App Link</label>
                  <input
                    className="form-control"
                    type="text"
                    name="app_link"
                    id="w-app"
                    value="https://play.google.com/FoodDoose"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="w-address">Website Address</label>
                  <input
                    className="form-control"
                    type="text"
                    name="web_link"
                    id="w-address"
                    value="https://www.fooddoose.com"
                  />
                </div>
              </div>
              <label htmlFor="">Website Details</label>

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
              <div className="row">
                <div className="col-lg-6 xol-md-6 col-sm-6">
                  <label htmlFor="w-logo">Website Logo</label>
                  <input
                    className="form-control"
                    type="file"
                    name="logo"
                    id="w-logo"
                  />
                </div>
                <div className="col-lg-6 xol-md-6 col-sm-6">
                  <label htmlFor="w-favicon">Website Favicon</label>
                  <input
                    className="form-control"
                    type="file"
                    name="favicon"
                    id="w-favicon"
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

export default WebsiteSettings;
