import React, { useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import cross from "../static/images/cross.svg"
import { FetchGetStarted } from "../services/helperFunctions"
import {toast } from 'react-toastify';
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../static/style/componentStyle/getStartedModal.scss"

require('react-toastify/dist/ReactToastify.css');



const {countries} = FetchGetStarted();
const encode = data => {
  return Object.keys(data)
    .map(key => {
      if (key === 'country') {
        const countryLabel = countries.find(country => country.value === data[key])?.label || '';
        return encodeURIComponent(key) + "=" + encodeURIComponent(countryLabel);
      }
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
    })
    .join("&");
}

// const backendUrl = "http://localhost:3000";

const GetStartedModal = ({ children, isOpen, setIsOpen,isModalOpen, handleIsOpenModal }) => {
  const [randomValue, setRandomValue] = useState(null);
  function randomm() {
    // Generate a random number between 1000 and 9999
    return Math.floor(Math.random() * 9000) + 1000;
  }
  useEffect(()=>{
    const random = randomm();
    setRandomValue(random);
  },[])
  let name=`name${randomValue}`;
  let email=`email${randomValue}`;
  let mobile=`mobile${randomValue}`;
  let message=`message${randomValue}`;

  return (
    <>
      {!isOpen ? (
        <button onClick={() => setIsOpen(!isOpen)}>Connect with us</button>
      ) : (
        <>
          <div className="get-started-wrapper">
            <div className="get-started-form">
              <div className="cross-icon">
                <div>
                  <img onClick={() => setIsOpen(!isOpen)} src={cross} alt="cross-icon"/>
                </div>
              </div>
              {children}
              <div className="wrapper contact_form">
                <Formik
                const 
                  initialValues={{
                    [name]: "",
                    [email]: "",
                    [mobile]: "",
                    [message]: "",
                  }}
                  onSubmit={(values, actions) => {
                    fetch(`/access`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                      body: encode({ "form-name": "contactForm", name:values[name],email:values[email],mobile:values[mobile],message:values[message],web:"lumiq"}),
                    })
                      .then(() => {
                        toast.success('Your response has been recorded successfully. We\'ll reach out to you!', {
                          position: toast.POSITION.TOP_CENTER,
                        });
                        actions.resetForm();
                        navigate("/success-page");
                        handleIsOpenModal(isModalOpen)
                      })
                      .catch(() => {
                        toast.error('Message failed to send.', {
                          position: toast.POSITION.TOP_CENTER,
                        });
                      })
                      .finally(() => actions.setSubmitting(false))
                  }}
                  validate={values => {
                    const nameRegex = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
                    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}/
                    const errors = {}
                    if (!values[name] || !nameRegex.test(values[name])) {
                      errors[name] = "Valid Name Required"
                    }
                    if (!values[email] || !emailRegex.test(values[email])) {
                      errors[email] = "Valid Email Required"
                    }
                    if (values[mobile]) {
                      if (!mobileRegex.test(values[mobile])) {
                        errors[mobile] = "Valid Mobile Number"
                      }
                    }
                    return errors
                  }}
                >
                  {() => (
                    <Form name="contactForm" data-netlify={true}>
                      <div className="get-started-heading">
                        <h2 className="heading-md">
                          We are interested in solving your problems
                        </h2>
                      </div>
                      <div className=" get-started-form-field">
                        <label className="relative">
                          <span className="error">
                            <ErrorMessage name={name} />
                          </span>
                          <Field
                            name={name}
                            className="input-text"
                            placeholder="FULL NAME"
                            autoComplete="new-password"
                          />
                          
                        </label>
                        <label className="relative">
                          <span className="error">
                            <ErrorMessage name={email} />
                          </span>
                          <Field
                            name={email}
                            className="input-text"
                            placeholder="BUSINESS EMAIL ADDRESS"
                            autoComplete="new-password"
                          />
                          
                        </label>
                        {/* <label className="country-dropdown">
                            <Select
                              name="country"
                              className="input-text"
                              placeholder="COUNTRY"
                              options={countries}
                              isClearable={true}
                            />
                          </label> */}
                        <label className="relative">
                          <span className="error">
                            <ErrorMessage name={mobile} />
                          </span>
                          <Field
                            name={mobile}
                            className="input-text"
                            placeholder="PHONE NUMBER"
                            autoComplete="new-password"
                          />
                        </label>
                        <label className="label-get-started-textarea">
                          <p>
                          Tell us about your project, a bit of context will allow us to connect you to the right team faster:
                          </p>
                          <Field
                            name={message}
                            className="get-started-textarea"
                            component="textarea"
                            autoComplete="new-password"
                            // placeholder="Tell us about yourself, your general queries, technical requirements or anything else."
                          />
                        </label>
                        <label className="">
                          <button type="" className="">
                            Submit
                          </button>
                        </label>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default GetStartedModal
