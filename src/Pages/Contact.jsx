import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name is ${data.fullname}. My Mobile No is ${data.phone} and my email is ${data.email}, and my message is ${data.msg} `
    );
  };
  return (
    <>
      <Helmet>
        <title>Contact || Vilakshya</title>
        <meta
          name="title"
          content="For More information About Waitominute Contact Us"
        />
      </Helmet>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter Your mobile Number Here"
                />
              </div>{" "}
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter Your E-mail"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="examplehtmlFormControlTextarea1"
                  className="form-label"
                >
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
