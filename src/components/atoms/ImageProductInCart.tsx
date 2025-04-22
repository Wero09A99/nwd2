import {Avatar, Box, IconButton} from "@mui/material";
import {IoIosCloseCircle} from "react-icons/io";
import {useCartStore} from "../../store/useStore.ts";
import useTostifyNotifications from "../../hooks/useTostifyNotifications.ts";
type ImageProductInCartProps = {
    name: string;
    image: string;
    id: number
}

const ImageProductInCart = ( { name, image, id }: ImageProductInCartProps ) => {

    const { removeItemById } = useCartStore();
    const { notifyError } = useTostifyNotifications();

    return (
        <>
            {/* Contenedor de la imagen con la "X" en la esquina */}
            <Box position="relative">
                <Avatar
                    alt={name}
                    src={image}
                    sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2, // Hace que no sea completamente redonda
                        objectFit: "cover", // Se ajusta sin deformarse
                    }}
                />

                {/* Botón para eliminar en la parte superior derecha del Avatar */}
                <IconButton
                    onClick={() => {
                        removeItemById(id);
                        notifyError(`Se elimino ${name} correctamente del carrito `)
                    } }
                    sx={{
                        position: "absolute",
                        top: -6,
                        right: -6,
                        backgroundColor: "rgba(255, 255, 255, 1)", // Fondo blanco con transparencia
                        color: "red",
                        width: 20,
                        height: 20,
                        padding: 0,
                        "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 1)",
                        }
                    }}
                >
                    <IoIosCloseCircle />
                </IconButton>
            </Box>
        </>
    )
}

export default ImageProductInCart;