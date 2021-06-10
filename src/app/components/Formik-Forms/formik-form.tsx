import React from "react";
import { Form, Formik } from "formik";
import { formsInitialValues } from "./forms-initial-values";
import { validationSchema } from "./yup-validationschema";
import FormikTextfield from "./formik-textfield";
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
      onSubmit={(values) => {
        dispatch(handleCreateAction(values));
        values.name = "";
        values.description = "";
        // actions.resetForm({});
      }}
    >
      {(formikProps) => (
        <>
          <Form className={"FormikForm"}>
            <div>
              <div className={"FormikName"}>Name</div>
              <FormikTextfield id={"name"} label={"Name"} />
            </div>

            <div>
              <div className={"FormikDescription"}>Description</div>
              <FormikTextfield id={"description"} label={"Description"} />
            </div>

            <div>
              <button type={"submit"} className={"AddTaskButton"}>
                Add Todo
              </button>
            </div>
          </Form>

          {/*<FormikValuesViewer formikProps={formikProps} />*/}
        </>
      )}
    </Formik>
  );
};

export default FormikForm;
