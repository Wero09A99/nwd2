import { useState } from "react";
import CartInfo from "../molecules/CartInfo";
import WalletInfo from "../molecules/WalletInfo";
import SearchBar from "../molecules/SearchBar";
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SelectBasic from "../atoms/Selec.tsx";
import Divider from "@mui/material/Divider";
import Sidebar from "./Sidebar.tsx";
import CartDrawer from "./Drawers/CartDrawer.tsx";

//en el directorio try ahi estuve probando la navbar
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);

    if(isOpen) setIsOpen(false);
  }

  return (
    <>

      {/* Barra de navegacion principal */}
      <AppBar position="static"
              sx={{backgroundColor: "white"}}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          {/* Boton de menu para telefonos */}
          <IconButton
            edge="start"
            color="success"
            aria-label="menu"
            onClick={() => setIsOpen(!isOpen)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* SearchBar siempre visible */}
          <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>

          {/* Contenedor de opciones en pantallas grandes */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <CartInfo onclick={() => openCart()} />
            <WalletInfo saldo={0.004} onclick={() => console.log("billetera")} />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
          anchor="left"
          open={isOpen}
          onClose={() => setIsOpen(!isOpen)}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: 250,
              height: '100%',
              padding: 2,
              boxShadow: '3px 0px 10px rgba(0, 0, 0, 0.3)', // Sombra en el lado derecho
            },
          }}
      >
          <Avatar
              src="https://i.ibb.co/XkYjgR4j/Logo-NDW-removebg-preview.png"
              onClick={() => setIsOpen(!isOpen)}
              alt="LOGO_MODO CLARO"
              sx={{
                  width: 128, // Equivalente a w-32 en Tailwind CSS
                  height: 128, // Equivalente a h-32 en Tailwind CSS
                  margin: '0 auto',
              }}
          />

        {/* SelectBasic dentro del sidebar para teléfonos */}
        <Box>
          <SelectBasic />
        </Box>

        {/* Contenido del Sidebar */}
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => openCart()}>
              <ListItemIcon>
                <CartInfo />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => console.log('Billetera')}>
              <ListItemIcon>
                <WalletInfo saldo={0.004} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>

        {/* Sidebar de la home que solo se verá en la vista de móviles */}
        <Sidebar />
      </Drawer>

      {/* Drawer del carrito */}
      <CartDrawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
    </>
  );
}

export default Navbar;