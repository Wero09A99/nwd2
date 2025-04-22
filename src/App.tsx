import { BrowserRouter as Router, Route, Routes } from "react-router";
import Login from "./components/organisms/Login";
import Home from "./pages/Home";
import Try from "./pages/Try";
import DetailCartShop from "./pages/DetailCartShop.tsx";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detil-cart" element={<DetailCartShop />} />
        <Route path="/try" element={<Try />} />
      </Routes>
    </Router>
  );
}

export default App
