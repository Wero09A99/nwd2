import {Box, IconButton, Paper, Skeleton, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {FaShoppingBag} from "react-icons/fa";
import {useCartStore} from "../../store/useStore.ts";
import {CartItem} from "../../types/GlobalTypes.ts";
import useTostifyNotifications from "../../hooks/useTostifyNotifications.ts";

type ProductProps = {
  product: {
    name: string;
    price: string;
    image: string;
  };
  idIndex: number;
};

function ProductCard({ product, idIndex }: ProductProps) {

    const [ hoverImage, setHoverImage ] = useState<boolean>();
    const [loading, setLoading] = useState(true);
    const { addItemToCart } = useCartStore();
    const { notifySuccess } = useTostifyNotifications();

    const handleAddItemToCart = () => {
        const item: CartItem = {
            name: product.name,
            price: product.price,
            imageUrl: product.image,
            quantity: 1,
            id: idIndex
        }

        addItemToCart(item);
    }

    useEffect(() => {
        // Ocultar Skeleton después de 4 segundos
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer); // Limpieza del timer
    }, []);

  return (
      <>
          <Paper>
              <Box
                  position="relative"
                  width="100%"
                  height={132}
                  onMouseEnter={() => setHoverImage(true)}
                  onMouseLeave={() => setHoverImage(false)}
              >
                  {/* Imagen del producto o Skeleton */}
                  {loading ? (
                      <Skeleton variant="rectangular" width="100%" height="100%" />
                  ) : (
                      <Box
                          component="img"
                          src={product?.image}
                          alt={product?.name}
                          width="100%"
                          height="100%"
                          sx={{ objectFit: "cover", padding: 0.03 }}
                      />
                  )}

                  {hoverImage && !loading && (
                      <>
                          {/* Ícono en la esquina superior derecha */}
                          <IconButton
                              onClick={() => {
                                  handleAddItemToCart();
                                  notifySuccess(`Se agrego ${product.name} al carrito correctamente`);
                              }}
                              sx={{
                                  position: "absolute",
                                  top: 8,
                                  right: 8,
                                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                                  color: "white",
                                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                              }}
                          >
                              <FaShoppingBag />
                          </IconButton>

                          {/* Texto "Detalles" en la parte inferior */}
                          <Box
                              onClick={() => console.log("Aqui detils")}
                              sx={{
                                  position: "absolute",
                                  bottom: 0,
                                  width: "100%",
                                  height: 48,
                                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                                  color: "white",
                                  fontWeight: "bold",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  transition: "opacity 0.3s",
                                  opacity: hoverImage ? 0.8 : 1,
                                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                                  cursor: "pointer",
                              }}
                          >
                              <Typography variant="body1">Detalles</Typography>
                          </Box>
                      </>
                  )}
              </Box>

              <Box
                  sx={{
                      padding: 1,
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                      textAlign: "center",
                  }}
              >
                  {loading ? (
                      <>
                          <Skeleton variant="text" width="80%" sx={{ margin: "auto" }} />
                          <Skeleton variant="text" width="50%" sx={{ margin: "auto" }} />
                      </>
                  ) : (
                      <>
                          <Typography
                              variant="subtitle1"
                              sx={{
                                  color: "white",
                                  fontWeight: "bold",
                                  textShadow: "2px 2px 4px rgba(255, 255, 255, 0.3)",
                              }}
                          >
                              {product?.name}
                          </Typography>

                          <Typography
                              variant="subtitle1"
                              sx={{
                                  color: "#ffcc00",
                                  fontWeight: "bold",
                                  textShadow: "2px 2px 4px rgba(255, 204, 0, 0.4)",
                              }}
                          >
                              ${product?.price}
                          </Typography>
                      </>
                  )}
              </Box>
          </Paper>
      </>

  );
}

export default ProductCard;
