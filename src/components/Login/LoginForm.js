import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

// CSS
import './LoginForm.css';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email("Please enter a valid email")
                        .required("Required"),
                    password: Yup.string()
                        .required("No password provided.")
                        // .min(8, "Password is too short - should be 8 characters minimum.")
                        // .matches(/(?=.*[0-9])/, "Password must contain a number.")
                })}
                
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        alert("Temporary response is in the browser's console.");
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ 
                    isSubmitting, 
                    touched,
                    errors, 
                }) => (
                    <Form className="loginForm">
                        <h3 align="center">Login Form</h3>
                        <Field type="email" name="email" placeholder="Enter your email" className={errors.email && touched.email && "error"}/>
                        <ErrorMessage name="email" component="div" className="input-feedback"/>
                        <Field type="password" name="password" placeholder="Enter your password" className={errors.password && touched.password && "error"}/>
                        <ErrorMessage name="password" component="div" className="input-feedback"/>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        )
    }
}
