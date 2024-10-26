import { Routes, Route, BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage/ShopPage"
import WishlistPage from "./pages/WishlistPage/WishlistPage"
import { WishlistProvider } from "./context/WishlistContext"


function App() {

  return (
    <WishlistProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </BrowserRouter>
    </WishlistProvider>

  )
}

export default App