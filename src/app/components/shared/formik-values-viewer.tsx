import React from "react";

const FormikValuesViewer = ({ formikProps }) => {
  // for development only: to show formik values in UI
  return <pre>{JSON.stringify(formikProps.values, null, 2)}</pre>;
};

export default FormikValuesViewer;
