import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

const ReviewTabContent = () => {
  const [ratingStar, setRatingStar] = useState(0);
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRatingStar(newRating);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 lg:px-0">
        {/* display review */}
        <div>
          <div className="flex items-start justify-center">
            <div className="mr-4 w-[165px] h-[60px]">
              <img
                className="rounded-full w-full"
                src={require("../../../assets/images/review-avatar.jpeg")}
                alt="review avatar"
              />
            </div>
            <div>
              <div className="flex items-center justify-start gap-1 text-primary text-lg mb-2">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h2 className="text-xl text-black font-bold mb-3">
                Mike Addington{" "}
              </h2>
              <p className="text-gray-500 text-lg">
                The shirt was not the fabric I believed it to be. It says
                Classic Fit but was made like the older versions, not the soft
                cotton like my others. I don’t understand how the labels are the
                same but a completely different shirt. Oh well, stuck with it
                now.
              </p>
            </div>
          </div>
        </div>
        {/* review form */}
        <div>
          <div className="mb-4">
            <h1 className="text-lg text-gray-500">Your rating *</h1>
            <ReactStars
              count={5}
              //   value={3}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              fullIcon={<AiFillStar />}
              activeColor="#ffd700"
            />
          </div>
          <form className="mb-4">
            <label className="text-lg text-gray-500">Your review *</label>
            <textarea
              className="text-gray-500 border-2 border-border rounded-lg focus:border-primary outline-none w-full p-4 mb-4"
              name="review"
              rows="10"
            ></textarea>
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="name" className="text-lg text-gray-500">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  className="text-gray-500 border-2 border-border rounded-lg focus:border-primary outline-none w-full p-4"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-lg text-gray-500">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  className="text-gray-500 border-2 border-border rounded-lg focus:border-primary outline-none w-full p-4"
                />
              </div>
            </div>
            <button type="submit" className="btn-primary mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewTabContent;
