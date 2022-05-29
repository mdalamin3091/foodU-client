import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Auth/Signup';
import NavBar from './Shared/NavBar';
import Footer from './Shared/Footer';
import Login from './Pages/Auth/Login';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Shop from './Pages/Shop/Shop';
function App() {
  return (
    <>
      {/* <h1>In the name of Alah</h1> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
