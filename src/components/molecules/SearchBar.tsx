import { useState, useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { IoSearchSharp } from "react-icons/io5";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useSearchStore } from "../../store/useSearchStore.ts";

const products = [
  { id: 1, name: "Spotify 30 días", price: "6000", image: "https://i.postimg.cc/tTKBmS2t/download.png" },
  { id: 2, name: "YouTube 1 mes", price: "6000", image: "https://i.postimg.cc/85c8V0R2/download.png" },
  { id: 3, name: "Paramount+ 1 mes", price: "6500", image: "https://i.postimg.cc/rpK6BHCv/download.png" },
  { id: 4, name: "Crunchyroll", price: "6000", image: "https://i.postimg.cc/qRs1ScYP/download.png" },
  { id: 5, name: "Plex", price: "6000", image: "https://i.postimg.cc/jd5h4rx0/download.jpg" },
  { id: 6, name: "HBO+", price: "6500", image: "https://i.postimg.cc/59kz1QVT/download.jpg" },
  { id: 7, name: "Netflix 1 mes", price: "7000", image: "https://i.postimg.cc/3x3QzSGq/download.png" },
  { id: 8, name: "Disney+ 1 mes", price: "7500", image: "https://i.postimg.cc/3Jwq8z9P/download.png" },
  { id: 9, name: "Amazon Prime 1 mes", price: "8000", image: "https://i.postimg.cc/3Jwq8z9P/download.png" },
  { id: 10, name: "Apple TV+ 1 mes", price: "8500", image: "https://i.postimg.cc/3Jwq8z9P/download.png" },
  { id: 11, name: "Hulu 1 mes", price: "9000", image: "https://i.postimg.cc/3Jwq8z9P/download.png" },
  { id: 12, name: "Showtime 1 mes", price: "9500", image: "https://i.postimg.cc/3Jwq8z9P/download.png" },
  { id: 13, name: "Starz 1 mes", price: "10000", image: "https://i.postimg.cc/3Jwq8z9P/download.png" },
  { id: 14, name: "Peacock 1 mes", price: "10500", image: "https://i.postimg.cc/3Jwq8z9P/download.png" },
  { id: 15, name: "Discovery+ 1 mes", price: "11000", image: "https://i.postimg.cc/3Jwq8z9P/download.png" },
  { id: 16, name: "BritBox 1 mes", price: "11500", image: "https://i.postimg.cc/3Jwq8z9P/download.png" },
  { id: 17, name: "Acorn TV 1 mes", price: "12000", image: "https://i.postimg.cc/3Jwq8z9P/download.png" },
  { id: 18, name: "Shudder 1 mes", price: "12500", image: "https://i.postimg.cc/3Jwq8z9P/download.png" }
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof products>([]);
  const { setQuery: setSearchQuery, setFilteredProducts } = useSearchStore();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (query.trim()) {
      timeoutId = setTimeout(() => {
        setResults(products.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        ));
      }, 0);
    } else {
      setResults([]);
      setFilteredProducts(products);
    }
    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = (name: string) => {
    setQuery(name);
    setResults([]);
    setFilteredProducts(products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    ));
  };

  const handleSearch = () => {
    setSearchQuery(query);
    setFilteredProducts(query.trim()
      ? products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      : products
    );
  };

  return (
    <div ref={containerRef} style={{ position: "relative", maxWidth: 400 }}>
      <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton onClick={handleSearch} sx={{ p: "10px" }} aria-label="buscar">
          <IoSearchSharp />
        </IconButton>
      </Paper>
      {results.length > 0 && (
        <List
          sx={{
            position: "absolute",
            width: "100%",
            background: "white",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            zIndex: 10,
            borderRadius: "4px",
            mt: 1,
            maxHeight: 200,
            overflowY: "auto",
            color: "black"
          }}
        >
          {/* si al list item le pones el button asi component="button" ya no se comporta como boton(hover y todo eso)*/}
          {results.map((item) => (
            
            <ListItem key={item.id} button onClick={() => handleResultClick(item.name)}>
              <ListItemAvatar>
                <Avatar src={item.image} alt={item.name} />
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={`$${item.price}`} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}
