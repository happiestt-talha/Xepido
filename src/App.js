import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import CheckOut from './pages/CheckOut';
import ProductDetail from './pages/ProductDetail';
import ProductListing from './pages/ProductListing';
import Wishlist from './pages/Wishlist';
import OrderHistory from './pages/OrderHistory';
import FooterComp from './components/FooterComp';
import NavbarComp from './components/NavbarComp';
import Cart from './cart/Cart';
import CartTotal from './cart/CartTotal';
import Signin from './auth/Signin';
import PrivateRoutes from './security/PrivateRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/cart' element={<Cart />} />
            <Route path='/cart-total' element={<CartTotal />} />
          </Route>
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/product-detail/:productId' element={<ProductDetail />} />
          <Route path='/product-list' element={<ProductListing />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/order-history' element={<OrderHistory />} />
          <Route path='*' element={<LandingPage />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  );
}

export default App;
