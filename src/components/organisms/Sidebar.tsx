import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import {IoIosHome} from "react-icons/io";
import {FaShoppingCart, FaStore} from "react-icons/fa";
import {MdManageAccounts, MdOutlineSupportAgent} from "react-icons/md";
import {IoReceiptSharp} from "react-icons/io5";
import {ImExit} from "react-icons/im";

function Sidebar() {

    const menuItems = [
        { text: 'Home', icon: <IoIosHome /> },
        { text: 'Pedidos', icon: <FaShoppingCart /> },
        { text: 'Cuentas', icon: <MdManageAccounts /> },
        { text: 'Tienda', icon: <FaStore /> },
        { text: 'Movimientos', icon: <IoReceiptSharp /> },
        { text: 'Soporte', icon: <MdOutlineSupportAgent /> },
        { text: 'Salir', icon: <ImExit /> },
    ];

    const theme = useTheme();

    return (
        <Box
            sx={{
                width: 240, // Equivalente a w-60 en Tailwind CSS
                padding: 2, // Equivalente a p-5 en Tailwind CSS
            }}
        >

            <List>
                {menuItems.map((item, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                        sx={{
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover,
                            },
                            '&.Mui-selected': {
                                backgroundColor: theme.palette.action.selected,
                                '&:hover': {
                                    backgroundColor: theme.palette.action.selected,
                                },
                            },
                        }}
                    >
                        <ListItemButton selected={item.text === 'Home'}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Divider />
            </List>
        </Box>
    );
}

export default Sidebar;
