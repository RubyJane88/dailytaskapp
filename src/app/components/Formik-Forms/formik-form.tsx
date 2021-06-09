import React from "react";
import { Form, Formik } from "formik";
import { formsInitialValues } from "./forms-initial-values";
import { validationSchema } from "./yup-validationschema";
import FormikTextfield from "./formik-textfield";
import FormikValuesViewer from "../shared/formik-values-viewer";
import { useDispatch } from "react-redux";

type Props = {
  handleCreateAction?: (values: any) => void;
};

const FormikForm = ({ handleCreateAction }: Props) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={formsInitialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(handleCreateAction(values));
        actions.resetForm();
      }}
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
