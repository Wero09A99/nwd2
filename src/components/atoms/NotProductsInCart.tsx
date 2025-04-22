import {Box, Typography} from "@mui/material";

const NotProductsInCart = () => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                }}
            >
                <img
                    src="https://img.freepik.com/vector-gratis/ilustracion-concepto-carrito-compras-supermercado_114360-22408.jpg"
                    alt="Carrito vacío"
                    style={{
                        width: '100%',
                        maxWidth: '300px',
                        height: 'auto',
                        marginBottom: '16px',
                    }}
                />
                <Typography variant="body2">El carrito está vacío</Typography>
            </Box>
        </>
    )
}

export default NotProductsInCart