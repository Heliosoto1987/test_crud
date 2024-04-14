import * as Yup from "yup";

export const useformCreateValudation = () => {
  const validation = Yup.object().shape({
    email: Yup.string()
      .email("It must be a valid email")
      .required("Email is required"),
    name: Yup.string().required("The name is required"),
    lastName: Yup.string().required("Last name is required"),
    age: Yup.number().required("Age is required"),
  });
  return validation;
};
