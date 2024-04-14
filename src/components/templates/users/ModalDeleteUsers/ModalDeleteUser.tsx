import { Box, Button, Typography } from "@mui/material";
import {
  useGetUsersQuery,
  useUserDeleteMutation,
} from "../../../../slices/usersApi";

export const ModalDeleteUser = ({
  setToggleModal,
  arrayUserSelected,
  setArrayUserSelected,
}: {
  setArrayUserSelected: React.Dispatch<React.SetStateAction<number[]>>;
  setToggleModal: (value: boolean) => void;
  arrayUserSelected: number[];
}) => {
  const { refetch } = useGetUsersQuery();
  const [triggerDelete] = useUserDeleteMutation();

  const handleDelete = () => {
    arrayUserSelected.forEach((id) =>
      triggerDelete({ id })
        .then(() => {
          setArrayUserSelected([]);
        })
        .catch((error) => {
          window.alert(`Sorry an error occurred ${error}`);
        })
        .finally(() => refetch().then(() => setToggleModal(false)))
    );
  };

  return (
    <>
      <Typography variant="h5">
        Are you sure you want to delete the selected users?
      </Typography>
      <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={() => setToggleModal(false)}>
          Cancel
        </Button>
        <Button
          onClick={async () => {
            handleDelete();
          }}
          color="warning"
          variant="contained"
        >
          Yes, I am sure
        </Button>
      </Box>
    </>
  );
};
