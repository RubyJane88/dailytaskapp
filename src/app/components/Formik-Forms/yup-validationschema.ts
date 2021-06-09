import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().label("Name").min(2).required(),
  description: yup.string().label("Description"),
});
