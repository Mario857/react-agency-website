import React from "react";
import { Form, Formik } from "formik";
import { axios } from "../services/axios";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required")
});

const Contact = () => {
  return (
    <>
      <div className="contact section-title mt-5">
        <div className="container text-white">
          <div className="row align-items-center">
            <div className="col-md-7 mx-auto">
              <div className="contact-title mb-5 mt-5">
                <h1 className="title-font title-font-size">Contact</h1>
                <p className="mt-4 mb-4 title-font-2">
                  Say Hello. If you want to extend some info, do not hesitate to
                  fill this form, we love to say ‘Hello Mate’.
                </p>
              </div>
            </div>

            <div className="col-lg-8 mx-auto text-white">
              <div className="contact-form mb-5 mt-5">
                <Formik
                  initialValues={{
                    name: "",
                    subject: "",
                    email: "",
                    message: ""
                  }}
                  validationSchema={contactSchema}
                  onSubmit={async (values, actions) => {
                    await axios.post("/contact", {
                      text: `${values.name} \n ${values.message}`,
                      contactEmail: values.email,
                      subject: values.subject
                    });

                    alert("Sent!");

                    actions.setSubmitting(false);
                  }}
                >
                  {(props) => (
                    <Form>
                      <div className="form-group">
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                          />
                        </div>
                        {props.errors && props.errors.name && (
                          <div class="invalid-feedback d-block">
                            {props.errors.name}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.subject}
                          />
                        </div>
                        {props.errors && props.errors.subject && (
                          <div class="invalid-feedback d-block">
                            {props.errors.subject}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="col-12">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                          />
                          {props.errors && props.errors.email && (
                            <div class="invalid-feedback d-block">
                              {props.errors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-12">
                          <textarea
                            className="form-control"
                            placeholder="Message"
                            rows="4"
                            name="message"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.message}
                          />
                          {props.errors && props.errors.message && (
                            <div class="invalid-feedback d-block">
                              {props.errors.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn mt-5">
                          Send Message
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
