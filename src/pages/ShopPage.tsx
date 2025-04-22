import { useState } from "react";
import ProductCard from "../components/molecules/ProductCard.tsx";
import PaginationComponent from "../components/molecules/Pagination.tsx";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const products = [
  { name: "Spotify 30 días", price: "6000", image: "https://i.postimg.cc/tTKBmS2t/download.png" },
  { name: "YouTube 1 mes", price: "6000", image: "https://i.postimg.cc/85c8V0R2/download.png" },
  { name: "Paramount+ 1 mes", price: "6500", image: "https://i.postimg.cc/rpK6BHCv/download.png" },
  { name: "Crunchyroll", price: "6000", image: "https://i.postimg.cc/qRs1ScYP/download.png" },
  { name: "Plex", price: "6000", image: "https://i.postimg.cc/jd5h4rx0/download.jpg" },
  { name: "HBO+", price: "6500", image: "https://i.postimg.cc/59kz1QVT/download.jpg" },
  { name: "Spotify 30 días", price: "6000", image: "https://i.postimg.cc/tTKBmS2t/download.png" },
  { name: "YouTube 1 mes", price: "6000", image: "https://i.postimg.cc/85c8V0R2/download.png" },
  { name: "Paramount+ 1 mes", price: "6500", image: "https://i.postimg.cc/rpK6BHCv/download.png" },
  { name: "Crunchyroll", price: "6000", image: "https://i.postimg.cc/qRs1ScYP/download.png" },
  { name: "Plex", price: "6000", image: "https://i.postimg.cc/jd5h4rx0/download.jpg" },
  { name: "HBO+", price: "6500", image: "https://i.postimg.cc/59kz1QVT/download.jpg" }
];

function ShopPage() {
  const [page, setPage] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  const ITEMS_PER_PAGE = isMobile ? 6 : 12;

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Box sx={{ padding: 4 }}>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 2,
        }}
      >
        {selectedProducts.map((product, index) => (
          <ProductCard key={startIndex + index} product={product} idIndex={startIndex + index} />
        ))}
      </Box>

      <PaginationComponent
        totalItems={products.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={page}
        onPageChange={setPage}
      />
    </Box>
  );
}

export default ShopPage;