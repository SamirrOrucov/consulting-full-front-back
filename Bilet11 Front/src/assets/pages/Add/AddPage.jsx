import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./add.scss";
import { postService } from "../../helper/FormikFunc";
function AddPage() {
  return (
    <div className="form_container">
      <Formik
        initialValues={{ icon: "", title: "", decription: "" }}
        validationSchema={Yup.object({
          icon: Yup.string()
          .required("Required"),
          title:
            Yup.string()
            .required("Required"),
          decription:
            Yup.string()
            .required("Required"),
            
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            postService(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
          <label htmlFor="icon">ICON</label>
          <Field name="icon" type="text" />
          <ErrorMessage name="icon" />

          <label htmlFor="title">TITLE</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="decription">DESCRIPTION</label>
          <Field name="decription" type="decription" />
          <ErrorMessage name="decription" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddPage;
