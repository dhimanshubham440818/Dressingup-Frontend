import React from "react";
import emailSchema from "../validators/mailSchema";
import { useFormik } from "formik";
const initialStatus = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const Contact = () => {
  
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialStatus,
      validationSchema: emailSchema,
      onSubmit: (values, action) => {
        console.log(values);
        // action.resetForm();
      },
    });
  return (
    <>
                {/* <!-- Page content--> */}
      <section className="py-5">
          <div className="container px-5">
            {/* <!-- Contact form--> */}
            <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
              <div className="text-center mb-5">
                <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-envelope"></i>
                </div>
                <h1 className="fw-bolder">Get in touch</h1>
              </div>
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  <form id="contactForm" onSubmit={handleSubmit}>
                    {/* <!-- Name input--> */}
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="name123"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="name123">Full Name</label>
                      <p className="text-danger">
                        {errors && touched.name ? errors.name : null}
                      </p>
                    </div>
                    {/* <!-- Email address input--> */}
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        autoComplete="off"
                        placeholder="name@example.com"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="email">Email address</label>
                      <p className="text-danger">
                        {errors && touched.email ? errors.email : null}
                      </p>
                    </div>
                    {/* <!-- Password input--> */}
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="password"
                        type="number"
                        placeholder="Phone number"
                        autoComplete="off"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="Password">Phone Number</label>
                      <p className="text-danger">
                        {" "}
                        {errors && touched.phone
                          ? errors.phone
                          : null}{" "}
                      </p>
                    </div>
                  {/* <!-- Message input--> */}
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      type="text"
                      placeholder="Enter your message here..."
                      style={{ height: "10rem" }}
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    <p className="text-danger">
                      {errors && touched.message ? errors.message : null}
                    </p>
                  </div>                                        
                    {/* <!-- Submit Button--> */}
                    <div className="d-grid">
                      <button
                        className="btn btn-dark btn-lg"
                        id="submitButton"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Contact;
