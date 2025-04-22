import {Paper, Box, Typography, Button} from "@mui/material";
import DetailItemInCart from "../molecules/DetailItemInCart.tsx";
import {useCartStore} from "../../store/useStore.ts";

const DetailCart = () => {

    const { cartStore, totalAmount } = useCartStore();

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Box sx={{
                    width: '80%'
                }}>
                    <Paper
                        sx={{
                            width: '100%',
                            padding: 3,
                            borderRadius: 3,
                            boxShadow: 5,
                            backgroundColor: '#ffffff',
                            marginBottom: 3
                        }}
                        elevation={3}
                    >

                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(1, 1fr)",
                                borderRadius: 2,
                                boxShadow: 2,
                                gap: 1,
                                padding: 2,
                                alignItems: "center",
                                maxHeight: "250px",
                                overflowY: "auto",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "0.5fr 1fr 0.5fr 0.5fr 0.5fr",
                                    fontWeight: "bold",
                                    paddingBottom: 1,
                                    borderBottom: "1px solid #ccc",
                                    "@media (max-width: 600px)": {
                                        display: "none", // Ocultar en móviles
                                    },
                                }}
                            >
                                <Typography align="center">Imagen</Typography>
                                <Typography align="center">Producto</Typography>
                                <Typography align="center">Precio</Typography>
                                <Typography align="center">Cantidad</Typography>
                                <Typography align="center">Total</Typography>
                            </Box>

                            {cartStore.map( ( item, index ) => (
                                <>
                                    <DetailItemInCart key={index} item={item}/>
                                </>
                            ) )}
                        </Box>

                    </Paper>

                    <Paper
                        sx={{
                            width: '100%',
                            padding: 3,
                            borderRadius: 3,
                            boxShadow: 5,
                            backgroundColor: '#ffffff',
                        }}
                        elevation={3}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                borderBottom: '2px solid #ddd',
                                paddingBottom: 1,
                                marginBottom: 2
                            }}
                        >
                            TOTALES DEL CARRITO
                        </Typography>

                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ marginBottom: 2 }}
                        >
                            <Typography variant="body1">Total</Typography>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000' }}>
                                ${totalAmount}
                            </Typography>
                        </Box>

                        <Button
                            variant="contained"
                            disabled={cartStore.length === 0}
                            sx={{
                                width: '100%',
                                backgroundColor: '#000',
                                color: '#fff',
                                '&:hover': { backgroundColor: '#333' },
                                fontWeight: 'bold',
                                padding: '10px'
                            }}
                        >
                            FINALIZAR COMPRA
                        </Button>
                    </Paper>
                </Box>
            </Box>
        </>
    )
}

export default DetailCart;