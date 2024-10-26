import { Routes, Route, BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage/ShopPage"


function App() {

  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App