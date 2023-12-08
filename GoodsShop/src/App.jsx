import './App.css'
import { AuthProvider } from './context/authContext';
import AddProduct from './ui/AddProduct';
import Home from './ui/Home';
import { Login } from './ui/Identity/Login';
import Logout from './ui/Identity/Logout';
import { Register } from './ui/Identity/Register';
import NavBar from './ui/Navbar';
import { ProductDetails } from './ui/ProductDetails';
import { Products } from './ui/Products';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/product/:id"} element={<ProductDetails />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/logout"} element={<Logout />} />
        <Route path={"/add-product"} element={<AddProduct />} />
      </Routes>
    </AuthProvider>
  )
}

export default App;
