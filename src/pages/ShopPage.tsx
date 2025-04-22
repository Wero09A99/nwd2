import { useState } from "react";
import ProductCard from "../components/molecules/ProductCard.tsx";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useSearchStore } from "../store/useSearchStore.ts";
import PaginationComponent from "../components/molecules/Pgination.tsx";


const products = [
  { id: 1, name: "Spotify 30 días", price: "6000", image: "https://i.postimg.cc/tTKBmS2t/download.png" },
  { id: 2, name: "YouTube 1 mes", price: "6000", image: "https://i.postimg.cc/85c8V0R2/download.png" },
  { id: 3, name: "Paramount+ 1 mes", price: "6500", image: "https://i.postimg.cc/rpK6BHCv/download.png" },
  { id: 4, name: "Crunchyroll", price: "6000", image: "https://i.postimg.cc/qRs1ScYP/download.png" },
  { id: 5, name: "Plex", price: "6000", image: "https://i.postimg.cc/jd5h4rx0/download.jpg" },
  { id: 6, name: "HBO+", price: "6500", image: "https://i.postimg.cc/59kz1QVT/download.jpg" }
];

function ShopPage() {
  const [page, setPage] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ITEMS_PER_PAGE = isMobile ? 6 : 12;

  const { query, filteredProducts } = useSearchStore();

  const displayedProducts = query ? filteredProducts : products;
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const selectedProducts = displayedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Box sx={{ padding: 4 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 2
        }}
      >
        {/*no se por que da error */}
        {selectedProducts.map((product) => (
          <ProductCard key={product.id} product={product} idIndex={product.id} />
        ))}
      </Box>
      <PaginationComponent
        totalItems={displayedProducts.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={page}
        onPageChange={setPage}
      />
    </Box>
  );
}

export default ShopPage;