import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import {
  useCreateUserMutation,
  useEditUserMutation,
  useGetUsersQuery,
  usersApi,
} from "../../../../slices/usersApi";
import { useInitialValues } from "./useInitialValues";
import { initialFormUserType } from "./types";
import { useformCreateValudation } from "./useValidations";
import { useDispatch } from "react-redux";

export const ModalFormUser = ({
  id,
  setToggleModal,
  setArrayUserSelected,
}: {
  setArrayUserSelected: React.Dispatch<React.SetStateAction<number[]>>;
  id: number;
  setToggleModal: (value: boolean) => void;
}) => {
  const { refetch } = useGetUsersQuery();
  const [triggerCreateUser] = useCreateUserMutation();
  const [triggerEditUser] = useEditUserMutation();
  const { initialFormUser } = useInitialValues();
  const validationSchema = useformCreateValudation();
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormUser}
        onSubmit={(values: initialFormUserType, options) => {
          try {
            if (id) {
              triggerEditUser({
                id: id,
                name: values.name,
                email: values.email,
                age: values.age,
                lastName: values.lastName,
              }).finally(() => {
                refetch();
                options.resetForm();
                setArrayUserSelected([]);
                setToggleModal(false);
              });
            } else {
              triggerCreateUser({
                name: values.name,
                email: values.email,
                age: values.age,
                lastName: values.lastName,
              }).finally(() => {
                refetch();
                options.resetForm();
                setToggleModal(false);
              });
            }
          } catch (error) {
            window.alert(`Sorry an error occurred ${error}`);
          }
        }}
      >
        {({ handleSubmit, setFieldValue, values, errors }) => (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">Create user</Typography>{" "}
              <Typography fontWeight="bold" color="red">
                {errors.name || errors.lastName || errors.age || errors.email}
              </Typography>
            </Box>
            <TextField
              value={values.name}
              name="name"
              onChange={(e) => setFieldValue("name", e.target.value)}
              sx={{ width: "30vw" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              error={Boolean(errors.name)}
            />
            <TextField
              value={values.lastName}
              name="lastName"
              onChange={(e) => setFieldValue("lastName", e.target.value)}
              sx={{ width: "30vw" }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              error={Boolean(errors.lastName)}
            />
            <TextField
              value={values.age}
              name="age"
              onChange={(e) => setFieldValue("age", e.target.value)}
              sx={{ width: "30vw" }}
              id="outlined-basic"
              label="Age"
              type="number"
              variant="outlined"
              error={Boolean(errors.age)}
            />
            <TextField
              value={values.email}
              name="email"
              onChange={(e) => setFieldValue("email", e.target.value)}
              sx={{ width: "30vw" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              error={Boolean(errors.email)}
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              variant="contained"
            >
              Submit
            </Button>
          </>
        )}
      </Formik>
    </>
  );
};
