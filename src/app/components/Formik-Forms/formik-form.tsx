import React from "react";
import { Form, Formik } from "formik";
import { formsInitialValues } from "./forms-initial-values";
import { validationSchema } from "./yup-validationschema";
import FormikTextfield from "./formik-textfield";
import FormikValuesViewer from "../shared/formik-values-viewer";

const FormikForm = () => {
  return (
    <Formik
      initialValues={formsInitialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {(formikProps) => (
        <>
          <Form className={"FormikForm"}>
            <div>
              <div className={"FormikName"}>Name</div>
              <FormikTextfield
                id={"name"}
                formikProps={formikProps}
                placeholder={""}
                label={"Name"}
              />
            </div>

            <div>
              <div className={"FormikDescription"}>Description</div>
              <FormikTextfield
                id={"description"}
                formikProps={formikProps}
                placeholder={""}
                label={"Description"}
              />
            </div>

            <div>
              <button className={"AddTaskButton"}>Add Task</button>
            </div>
          </Form>

          <FormikValuesViewer formikProps={formikProps} />
        </>
      )}
    </Formik>
  );
};

export default FormikForm;
