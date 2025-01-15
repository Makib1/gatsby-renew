import React from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import "../static/style/pageStyle/get-started.scss"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { navigate } from "gatsby";
require("react-toastify/dist/ReactToastify.css")

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const GetStarted = ({ children, isOpen, setIsOpen }) => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  // const backendUrl = "https://devweb.lumiq.ai"

  return (
    <div className={`get-started-page${isNavBarOpen ? "" : "no-scroll"}`}>
      <div className="page-content">
        <div className="page-wrapper">
          <div className="section-inner">
            <h2 className="heading-md">
              We are interested in <br /> solving your problems
            </h2>
          </div>
          <div className="get-started-wrapper">
            <div className="get-started-form">
              {children}
              <div className="wrapper contact_form">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    mobile: "",
                    message: "",
                  }}
                  onSubmit={(values, actions) => {
                    fetch(`/access`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                      body: encode({
                        "form-name": "contactFormGetStarted",
                        "web":"lumiq",
                        ...values,
                      }),
                    })
                      .then(() => {
                        toast.success(
                          "Your response has been recorded successfully. We'll reach out to you!",
                          {
                            position: toast.POSITION.TOP_CENTER,
                          }
                        )
                        actions.resetForm()
                        navigate("/success-page");
                      })
                      .catch(() => {
                        toast.error("Message failed to send.", {
                          position: toast.POSITION.TOP_CENTER,
                        })
                      })
                      .finally(() => actions.setSubmitting(false))
                  }}
                  validate={values => {
                    const nameRegex = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
                    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}/
                    const errors = {}
                    if (!values.name || !nameRegex.test(values.name)) {
                      errors.name = "Valid Name Required"
                    }
                    if (!values.email || !emailRegex.test(values.email)) {
                      errors.email = "Valid Email Required"
                    }
                    if (values.mobile) {
                      if (!mobileRegex.test(values.mobile)) {
                        errors.mobile = "Valid Mobile Number"
                      }
                    }
                    return errors
                  }}
                >
                  {() => (
                    <Form name="contactForm" data-netlify={true}>
                      <div className="get-started-heading"></div>
                      <div className=" get-started-form-field">
                        <label className="relative">
                          <span className="error">
                            <ErrorMessage name="name" />
                          </span>
                          <Field
                            name="name"
                            className="input-text"
                            placeholder="FULL NAME"
                          />
                        </label>

                        <div className="address">
                          <label className="relative">
                            <Field
                              name="email"
                              className="input-text"
                              placeholder="BUSINESS EMAIL ADDRESS"
                            />
                          </label>
                          <label className="relative">
                            {/* <span className="error">
                              <ErrorMessage name="mobile" />
                            </span> */}
                            <Field
                              name="mobile"
                              className="input-text"
                              placeholder="PHONE NUMBER"
                            />
                          </label>
                        </div>

                        <label className="label-get-started-textarea">
                          <p>
                            Tell us about your project, a bit of context will
                            allow us to connect you to the right team faster:
                          </p>
                          <Field
                            name="message"
                            className="get-started-textarea"
                            component="textarea"
                          />
                        </label>
                        <label className="submit-button">
                          <button type="submit" className="">
                            Submit
                          </button>
                        </label>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
