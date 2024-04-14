import { Box, Modal } from "@mui/material";

type CustomMopdal = {
  toggleModal: boolean;
  closeModal: () => void;
  children: React.ReactElement;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const CustomModal = ({
  toggleModal,
  closeModal,
  children,
}: CustomMopdal) => {
  return (
    <Modal
      open={toggleModal}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};
