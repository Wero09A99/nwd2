import {useCartStore} from "../../store/useStore.ts";
import {Box, Button, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";

const BuyProductsInCart = () => {

    const { totalAmount } = useCartStore();

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingY: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: 2,
                    }}
                >
                    <Typography variant="subtitle1">Total:</Typography>
                    <Typography variant="subtitle1" fontWeight="bold">
                        ${totalAmount.toFixed(2)}
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    disabled={totalAmount === 0}
                    color="success"
                    fullWidth
                    onClick={() => {
                        // Lógica para proceder con la compra
                        console.log('Proceder con la compra');
                    }}
                >
                    Comprar
                </Button>
                <Divider variant="middle" sx={{ my: 1 }} />
                <Button
                    variant="contained"
                    disabled={totalAmount === 0}
                    color="primary"
                    fullWidth
                    onClick={() => {
                        // Lógica para proceder con la compra
                        console.log('Procede a ver los detalles');
                    }}
                >
                    Detalles
                </Button>
            </Box>
        </>
    )
}

export default BuyProductsInCart