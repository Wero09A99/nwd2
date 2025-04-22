import {Box, Drawer, IconButton, List, ListItem, Typography} from "@mui/material";
import {Fragment} from "react";
import ItemInCartSlider from "../../molecules/ItemInCartSlider.tsx";
import Divider from "@mui/material/Divider";
import NotProductsInCart from "../../atoms/NotProductsInCart.tsx";
import BuyProductsInCart from "../../atoms/BuyProductsInCart.tsx";
import {useCartStore} from "../../../store/useStore.ts";
import {MdCancel} from "react-icons/md";

type CartDrawerProps = {
    isCartOpen: boolean;
    setIsCartOpen: (value: boolean) => void
}

const CartDrawer = ( { isCartOpen, setIsCartOpen } : CartDrawerProps ) => {

    const { cartStore } = useCartStore();

    return (
        <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
            <Box
                sx={{
                    width: 300,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 2,
                }}
            >
                {/* Contenido principal del carrito */}
                <Box sx={{ overflowY: 'auto' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >
                        <Typography sx={{
                            display: "flex",
                            justifyContent: "space-around"
                        }} variant="h6" gutterBottom>
                            Carrito de Compras
                        </Typography>

                        <IconButton
                            sx={{
                                color: 'red'
                            }}
                            onClick={() => setIsCartOpen(!isCartOpen)}
                        >
                            <MdCancel />
                        </IconButton>
                    </Box>

                    <List>
                        {cartStore.length > 0 ? (
                            cartStore.map((item) => (
                                <Fragment key={item.id}>
                                    <ListItem sx={{ padding: 1.5 }}>
                                        <ItemInCartSlider item={item} />
                                    </ListItem>
                                    <Divider variant="middle" component="li" />
                                </Fragment>
                            ))
                        ) : (
                            <NotProductsInCart/>
                        )}
                    </List>
                </Box>

                {/* Sección inferior con el total y botón de compra */}
                <Box sx={{ paddingTop: 2 }}>
                    <Divider />
                    <BuyProductsInCart />
                </Box>
            </Box>
        </Drawer>
    )
}

export default CartDrawer;