import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { Table } from "../../components/CustomTable/CustomTable";
import { useGetUsersQuery } from "../../slices/usersApi";
import { CustomModal } from "../../components/CustomModal/CustomModal";
import { useContext, useEffect, useState } from "react";
import { ModalFormUser } from "../../components/templates/users/ModalFormUser/ModalFormUser";
import { ModalDeleteUser } from "../../components/templates/users/ModalDeleteUsers/ModalDeleteUser";
import { UsersContext } from "../../context/context";
import { Image } from "@nextui-org/react";

export const HomePage = () => {
  const { data, isLoading } = useGetUsersQuery();
  const [toggleModalCreate, setToggleModalCreate] = useState(false);
  const [toggleModalDelete, setToggleModalDelete] = useState(false);
  const [arrayUserSelected, setArrayUserSelected] = useState<number[]>([]);

  const { user, setUserEdit } = useContext(UsersContext);
  const cleanUserEdit = () => {
    setUserEdit({
      name: "",
      email: "",
      age: null,
      lastName: "",
    });
  };
  useEffect(() => {
    if (arrayUserSelected.length === 0) cleanUserEdit();
  }, [arrayUserSelected]);

  return isLoading ? (
    <CircularProgress color="secondary" />
  ) : (
    <Box
      sx={{
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <Typography variant="h3">
          Hello: {user || localStorage.getItem("userName") || ""}
        </Typography>
        <Image
          width={75}
          height={75}
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "60%",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h4">Users control</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <Button
            disabled={arrayUserSelected.length === 0}
            color="warning"
            variant="contained"
            onClick={() => setToggleModalDelete(true)}
          >
            Delete users
          </Button>
          <Button
            disabled={
              arrayUserSelected.length === 0 || arrayUserSelected.length > 1
            }
            variant="contained"
            onClick={() => setToggleModalCreate(true)}
          >
            Edit User
          </Button>
          <Button
            disabled={arrayUserSelected.length !== 0}
            variant="contained"
            onClick={() => setToggleModalCreate(true)}
          >
            Add new user
          </Button>
        </Box>
      </Box>
      {data && (
        <Table
          data={data}
          setArrayUserSelected={setArrayUserSelected}
          arrayUserSelected={arrayUserSelected}
        />
      )}

      <CustomModal
        toggleModal={toggleModalCreate}
        closeModal={() => {
          setArrayUserSelected([]);
          setToggleModalCreate(false);
        }}
      >
        <ModalFormUser
          setArrayUserSelected={setArrayUserSelected}
          setToggleModal={setToggleModalCreate}
          id={arrayUserSelected[0]}
        />
      </CustomModal>
      <CustomModal
        toggleModal={toggleModalDelete}
        closeModal={() => {
          setArrayUserSelected([]);
          setToggleModalDelete(false);
        }}
      >
        <ModalDeleteUser
          setArrayUserSelected={setArrayUserSelected}
          arrayUserSelected={arrayUserSelected}
          setToggleModal={setToggleModalDelete}
        />
      </CustomModal>
    </Box>
  );
};
