import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required(),
  address: yup.string().required(),
  phone: yup.string().required(),
});