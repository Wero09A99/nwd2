import {Box, IconButton, Typography} from "@mui/material";
import {IoRemoveCircleSharp} from "react-icons/io5";
import {IoIosAddCircle} from "react-icons/io";
import {useCartStore} from "../../store/useStore.ts";

type AddQuantityOfProductProps ={
    id: number;
    quantity: number;
}

const AddQuantityOfProduct = ( { id, quantity } : AddQuantityOfProductProps  ) => {

    const { addQuantityById, removeQuantityById } = useCartStore();

    return (
        <>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "0.5fr 1fr 0.5fr", // Menos espacio para botones, más para número
                    alignItems: "center",
                    border: "1px solid #ddd",
                    borderRadius: 2,
                    width: "100px", // Ajusta el ancho según sea necesario
                    textAlign: "center",
                }}
            >
                <IconButton disabled={quantity === 1} size="small"
                            onClick={() => removeQuantityById(id)}
                >
                    <IoRemoveCircleSharp />
                </IconButton>

                <Typography sx={{ fontWeight: "bold" }}> {quantity} </Typography>

                <IconButton size="small" disabled={quantity === 10}
                    onClick={() => addQuantityById(id)}
                >
                    <IoIosAddCircle />
                </IconButton>
            </Box>
        </>
    )
}

export default AddQuantityOfProduct;