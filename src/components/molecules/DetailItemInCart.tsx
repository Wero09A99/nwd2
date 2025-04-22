import { Box, Typography } from "@mui/material";
import { CartItem } from "../../types/GlobalTypes.ts";
import ImageProductInCart from "../atoms/ImageProductInCart.tsx";
import AddQuantityOfProduct from "../atoms/AddQuantityOfProduct.tsx";

type DetailItemInCartProps = {
    item: CartItem;
};

const DetailItemInCart = ({ item }: DetailItemInCartProps) => {
    return (
        <>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "0.5fr 1fr 0.5fr 0.5fr 0.5fr",
                    padding: 0.5,
                    gap: 1,
                    borderBottom: "1px solid #ddd",
                    // Responsive: cambiar a flex cuando el tamaño de pantalla sea pequeño
                    "@media (max-width: 600px)": {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ImageProductInCart name={item.name} image={item.imageUrl} id={item.id} />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center", // Centrar el nombre del producto
                    }}
                >
                    <Typography variant="h6">{item.name}</Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center", // Centrar el precio
                    }}
                >
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }} variant="caption">
                        ${item.price}
                    </Typography>
                </Box>

                <AddQuantityOfProduct id={item.id} quantity={item.quantity} />

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center", // Centrar el total
                    }}
                >
                    <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }} variant="caption">
                        ${+item.price * item.quantity}
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default DetailItemInCart;
