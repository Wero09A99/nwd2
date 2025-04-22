import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";

type PaginationComponentProps = {
  totalItems: number; // Total de elementos a paginar
  itemsPerPage: number; // Numero de elementos por pagina
  currentPage: number; // Pagina actual
  onPageChange: (page: number) => void; // Funcion para cambiar la página
};

function PaginationComponent({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationComponentProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detecta si es una pantalla de telefono

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
        mb: 6,
      }}
    >
      <Pagination
        count={Math.ceil(totalItems / itemsPerPage)} 
        page={currentPage}
        onChange={handleChange}
        color="primary"
        size="large"
        sx={{
          maxWidth: isMobile ? "90%" : "400px",
          margin: "0 auto",
        }}
      />
    </Box>
  );
}

export default PaginationComponent;