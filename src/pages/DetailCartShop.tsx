import {Box} from "@mui/material";
import Sidebar from "../components/organisms/Sidebar.tsx";
import Navbar from "../components/organisms/Navbar.tsx";
import {ToastContainer} from "react-toastify";
import DetailCart from "../components/organisms/DetailCart.tsx";
import StepperCart from "../components/molecules/StepperCart.tsx";

const DetailCartShop = () => {

    return (
        <>
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

                    <StepperCart/>

                    <DetailCart/>

                    <ToastContainer />
                </Box>
            </Box>
        </>
    )
}

export default DetailCartShop