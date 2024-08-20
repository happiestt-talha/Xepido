import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import ProductDetail from './pages/ProductDetail';
import ProductListing from './pages/ProductListing';
import Wishlist from './pages/Wishlist';
import OrderHistory from './pages/OrderHistory';
import FooterComp from './components/FooterComp';
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavbarComp/>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/cart' element={<Cart />} />
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
