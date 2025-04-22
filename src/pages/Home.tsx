import Sidebar from "../components/organisms/Sidebar";
import Navbar from "../components/organisms/Navbar";
import ShopPage from "../pages/ShopPage";
import {ToastContainer} from "react-toastify";
import {Box} from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Sidebar  />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <ShopPage />
      <ToastContainer />
      </Box>
    </Box>
  );
}

export default Home;