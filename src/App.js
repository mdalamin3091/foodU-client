import './styled/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Shared/NavBar';
import Footer from './Shared/Footer';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Shop from './Pages/Shop/Shop';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Wishlist from './Pages/Wishlist/Wishlist';
import Modal from './Pages/Auth/Modal/Modal';
import Checkout from './Pages/Checkout/Checkout';
import ConfirmOrder from './Pages/ConfirmOrder/ConfirmOrder';
import NotFound from './Pages/NotFound/NotFound';
function App() {
  return (
    <>
      {/* <h1>In the name of Alah</h1> */}
      <Router>
        <NavBar />
        {/* signup modal */}
        <Modal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmOrder" element={<ConfirmOrder />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
