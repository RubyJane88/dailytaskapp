import React from "react";

import { ErrorMessage, useFormikContext } from "formik";

type Props = {
  id: string;
  label?: string;
  placeholder?: string;
};

const FormikTextfield = ({ id, label, placeholder }: Props) => {
  const formikProps = useFormikContext();
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
