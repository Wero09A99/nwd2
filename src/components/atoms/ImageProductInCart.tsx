import {Avatar, Box, IconButton} from "@mui/material";
import {IoIosCloseCircle} from "react-icons/io";
import {useCartStore} from "../../store/useStore.ts";
import useTostifyNotifications from "../../hooks/useTostifyNotifications.ts";

type ImageProductInCartProps = {
    name: string;
    image: string;
    id: number;
    width?: number
}

const ImageProductInCart = ( { name, image, id, width }: ImageProductInCartProps ) => {

    const { removeItemById } = useCartStore();
    const { notifyError } = useTostifyNotifications();

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    width: width ? width : 60,
                    height: 60,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Avatar
                    alt={name}
                    src={image}
                    sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 2,
                        objectFit: "cover",
                    }}
                />

                {/* Botón de eliminar */}
                <IconButton
                    onClick={() => {
                        removeItemById(id);
                        notifyError(`Se eliminó ${name} correctamente del carrito`);
                    }}
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        transform: "translate(50%, -50%)", // Corrige alineación
                        backgroundColor: "white",
                        color: "red",
                        width: 22,
                        height: 22,
                        padding: 0,
                        borderRadius: "50%",
                        boxShadow: 2,
                        "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                        },
                    }}
                >
                    <IoIosCloseCircle size={20} />
                </IconButton>
            </Box>

        </>
    )
}

export default ImageProductInCart;