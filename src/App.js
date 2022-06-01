import "./styled/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Shared/Footer";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Shop from "./Pages/Shop/Shop";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Modal from "./Pages/Auth/Modal/Modal";
import Checkout from "./Pages/Checkout/Checkout";
import ConfirmOrder from "./Pages/ConfirmOrder/ConfirmOrder";
import NotFound from "./Pages/NotFound/NotFound";
import UserDashboard from "./Pages/Dashboard/UserDashboard/UserDashboard";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard/AdminDashboard";
import MyOrders from "./Pages/Dashboard/UserDashboard/MyOrders/MyOrders";
import UserDashboadIndex from "./Pages/Dashboard/UserDashboard/Index";
import UpdateProfile from "./Pages/Dashboard/UserDashboard/UpdateProfile";
import ChangePassword from "./Pages/Dashboard/UserDashboard/ChangePassword";
import AdminDashboardIndex from "./Pages/Dashboard/AdminDashboard/Index";
import AllProducts from "./Pages/Dashboard/AdminDashboard/Products/AllProducts";
import AllCategory from "./Pages/Dashboard/AdminDashboard/Categories/AllCategory";
import AddProduct from "./Pages/Dashboard/AdminDashboard/Products/AddProduct";
import AddCategory from "./Pages/Dashboard/AdminDashboard/Categories/AddCategory";
import AllOrders from "./Pages/Dashboard/AdminDashboard/Orders/AllOrders";
import AllUsers from "./Pages/Dashboard/AdminDashboard/Users/AllUsers";
function App() {
  return (
    <>
      {/* <h1>In the name of Alah</h1> */}
      <Router>
        {/* signup modal */}
        <Modal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="shop" element={<Shop />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="confirmOrder" element={<ConfirmOrder />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="user" element={<UserDashboard />}>
            <Route index element={<UserDashboadIndex />} />
            <Route path="dashboard" element={<UserDashboadIndex />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="updateProfile" element={<UpdateProfile />} />
            <Route path="changePassword" element={<ChangePassword />} />
          </Route>
          <Route path="admin" element={<AdminDashboard />}>
            <Route index element={<AdminDashboardIndex />} />
            <Route path="dashboard" element={<AdminDashboardIndex />} />
            <Route path="allProducts" element={<AllProducts />} />
            <Route path="allCategorys" element={<AllCategory />} />
            <Route path="allUsers" element={<AllUsers />} />
            <Route path="allOrders" element={<AllOrders />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="addCategory" element={<AddCategory />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
