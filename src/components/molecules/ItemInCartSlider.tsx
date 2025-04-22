import {Box} from "@mui/material";
import ImageProductInCart from "../atoms/ImageProductInCart.tsx";
import {CartItem} from "../../types/GlobalTypes.ts";
import InfoProductInCart from "../atoms/InfoProductInCart.tsx";

type ItemInCartSliderProps = {
    item: CartItem;
}

const ItemInCartSlider = ( { item } : ItemInCartSliderProps ) => {

    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                gap={2}
                width="100%"
                position="relative"
            >
                <ImageProductInCart name={item.name} image={item.imageUrl} id={item.id} width={90} />
                <InfoProductInCart name={item.name} quantity={item.quantity} price={+item.price} />
            </Box>
        </>
    )
}

export default ItemInCartSlider;