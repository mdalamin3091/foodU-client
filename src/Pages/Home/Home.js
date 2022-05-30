import React from "react";
import HeroArea from "./components/HeroArea";
import Menus from "./components/Menus";
import Offer from "./components/Offer";
import Popular from "./components/Popular";
import Offer50 from "./components/Offer50";
import TopRecipe from "./components/TopRecipe";
import Testimonial from "./components/Testimonial";
import Modal from "../Auth/Modal/Modal";

const Home = () => {
  return (
    <>
      <HeroArea />
      <Menus />
      <Offer />
      <Popular />
      <Offer50 />
      <TopRecipe />
      <Testimonial />
      <Modal />
    </>
  );
};

export default Home;
