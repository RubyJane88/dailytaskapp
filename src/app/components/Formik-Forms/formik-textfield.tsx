import React from "react";

import { ErrorMessage } from "formik";

const FormikTextfield = ({ id, formikProps, placeholder, label }) => {
  return (
    <div>
      <section className={"Formik-Textfield"}>
        <input
          className={"InputForm"}
          id={id}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          placeholder={placeholder}
        />
        <div className={"Formik-ErrorMessage"}>
          <ErrorMessage name={id} />
        </div>
      </section>
    </div>
  );
};

export default FormikTextfield;
