import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

import { AiFillStar } from "react-icons/ai"

const Testimonial = () => {
  return (
    <div className="font-JosefinSans section-padding bg-light-gray">
      <div className="container">
        <h2 className="section-title text-center">What our client says </h2>

        {/* slider */}
        <Swiper
          slidesPerView={window.innerWidth < 768 ? 1 ? window.innerWidth < 1024 : 2 ? window.innerWidth < 1280 : 3 : 3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper !px-5 !md:px-0"
        >
          {/* slider 1 */}
          <SwiperSlide>
            {/* 1 */}
            <div className="bg-white p-7 rounded-xl">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="basis-1/5">
                  <img className="w-20 rounded-full" src={require("../../../assets/images/avatar-1.jpg")} alt="avatar" />
                </div>
                <div className="text-left basis-4/5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl text-heading font-bold">Jhon Doe</h2>
                    <div className="flex items-center justify-center gap-1 text-primary text-xl">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-semibold">CEO, apple</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg text-left">
                “Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”
              </p>
            </div>
          </SwiperSlide>
          {/* slider 2 */}
          <SwiperSlide>
            {/* 1 */}
            <div className="bg-white p-7 rounded-xl">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="basis-1/5">
                  <img className="w-20 rounded-full" src={require("../../../assets/images/avatar-1.jpg")} alt="avatar" />
                </div>
                <div className="text-left basis-4/5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl text-heading font-bold">Jhon Doe</h2>
                    <div className="flex items-center justify-center gap-1 text-primary text-xl">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-semibold">CEO, apple</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg text-left">
                “Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”
              </p>
            </div>
          </SwiperSlide>
          {/* slider 3 */}
          <SwiperSlide>
            {/* 1 */}
            <div className="bg-white p-7 rounded-xl">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="basis-1/5">
                  <img className="w-20 rounded-full" src={require("../../../assets/images/avatar-1.jpg")} alt="avatar" />
                </div>
                <div className="text-left basis-4/5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl text-heading font-bold">Jhon Doe</h2>
                    <div className="flex items-center justify-center gap-1 text-primary text-xl">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-semibold">CEO, apple</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg text-left">
                “Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”
              </p>
            </div>
          </SwiperSlide>
          {/* slider 4 */}
          <SwiperSlide>
            {/* 1 */}
            <div className="bg-white p-7 rounded-xl">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="basis-1/5">
                  <img className="w-20 rounded-full" src={require("../../../assets/images/avatar-1.jpg")} alt="avatar" />
                </div>
                <div className="text-left basis-4/5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl text-heading font-bold">Jhon Doe</h2>
                    <div className="flex items-center justify-center gap-1 text-primary text-xl">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-semibold">CEO, apple</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg text-left">
                “Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”
              </p>
            </div>
          </SwiperSlide>
          {/* slider 5 */}
          <SwiperSlide>
            {/* 1 */}
            <div className="bg-white p-7 rounded-xl">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="basis-1/5">
                  <img className="w-20 rounded-full" src={require("../../../assets/images/avatar-1.jpg")} alt="avatar" />
                </div>
                <div className="text-left basis-4/5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl text-heading font-bold">Jhon Doe</h2>
                    <div className="flex items-center justify-center gap-1 text-primary text-xl">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-semibold">CEO, apple</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg text-left">
                “Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div >
    </div >
  );
}

export default Testimonial;