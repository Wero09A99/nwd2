import {Box, Collapse, IconButton, ListItem, ListItemText, Typography} from "@mui/material";
import {useState} from "react";
import {MdOutlineExpandMore} from "react-icons/md";

type InfoProductProps = {
    name: string;
    quantity: number;
    price: number;
}


const InfoProductInCart = ({name, quantity, price} : InfoProductProps ) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
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
                    <IconButton onClick={() => setOpen(!open)}>
                        <MdOutlineExpandMore
                            style={{
                                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.2s",
                            }}
                        />
                    </IconButton>
                </Box>

                <Collapse in={open} timeout="auto" unmountOnExit sx={{ width: "100%" }}>
                    <Typography
                        sx={{
                            pl: 2,
                            pb: 1,
                            fontWeight: "bold",
                            color: "green.700",
                        }}
                    >
                        ${(quantity * price).toFixed(2)}
                    </Typography>
                </Collapse>
            </ListItem>
        </>
    )
}

export default InfoProductInCart;