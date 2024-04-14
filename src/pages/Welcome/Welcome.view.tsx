import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../context/context";

export const WelcomePage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UsersContext);
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <img src="https://i0.wp.com/networknuts.net/wp-content/uploads/2019/11/zahir-accounting-software-have-more-than-60.000-users.png" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginBottom: -2 }} color="primary" variant="h1">
              Welcome to
            </Typography>

            <Typography color="primary" variant="h1">
              Users App
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <TextField
              onChange={(e) => setUser(e.target.value)}
              sx={{ width: "30vw" }}
              id="outlined-basic"
              label="Please writte your name"
              variant="outlined"
            />
            <Button
              onClick={() => {
                if (user.trim() !== "") {
                  localStorage.setItem("userName", user);
                  navigate("/home");
                } else {
                  alert("Please enter your name");
                }
              }}
              sx={{ height: "200%", padding: 2 }}
              variant="contained"
            >
              Continuar
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
