import {ListItemText} from "@mui/material";

type InfoProductProps = {
    name: string;
    quantity: number;
    price: number;
}

const InfoProductInCart = ({name, quantity, price} : InfoProductProps ) => {

    return (
        <>
            {/* Información del producto */}
            <ListItemText
                primary={name}
                secondary={`Total: ${quantity} * ${price}`}
                primaryTypographyProps={{
                    fontWeight: "bold",
                    fontSize: 16,
                }}
                secondaryTypographyProps={{
                    fontSize: 14,
                    color: "gray",
                }}
            />
        </>
    )
}

export default InfoProductInCart;