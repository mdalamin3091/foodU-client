import React, { useEffect, useState } from "react";
import HeroArea from "./components/HeroArea";
import Menus from "./components/Menus";
import Offer from "./components/Offer";
import Popular from "./components/Popular";
import Offer50 from "./components/Offer50";
import TopRecipe from "./components/TopRecipe";
import Testimonial from "./components/Testimonial";
import NavBar from "../../Shared/NavBar";
import Footer from "../../Shared/Footer";
import Swal from "sweetalert2";

const Home = () => {
  // const [loadModal, setLoadModal] = useState(true);
  // useEffect(() => {
  //   if (loadModal) {
  //     setTimeout(() => {
  //       Swal.fire({
  //         title: "Don't Remove any data",
  //         icon: "warning",
  //         showCancelButton: true,
  //         text: "You can login as a admin for test purpose using gmail:admin@gmail.com & password:123456",
  //       })
  //     }, 5000);
  //     setLoadModal(false)
  //   }
  // }, [loadModal])
  return (
    <>
      <NavBar />
      <HeroArea />
      <Menus />
      <Offer />
      <Popular />
      <Offer50 />
      <TopRecipe />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
