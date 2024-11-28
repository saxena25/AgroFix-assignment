import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import OrderPlacement from "../components/OrderPlacement"
import Admin from "../components/Admin"

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<OrderPlacement />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
