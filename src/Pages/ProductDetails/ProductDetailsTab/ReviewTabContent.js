import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { useAddReviewMutation } from "../../../store/services/productServices";
const ReviewTabContent = ({ data }) => {
  const { user } = useSelector((state) => state.auth);
  const [sendReviewInfo, result] = useAddReviewMutation();
  const [userInfo, setUserInfo] = useState({
    fullname: user?.fullname,
    email: user?.email,
    reviewText: "",
  });
  const [ratingStar, setRatingStar] = useState(0);
  const ratingChanged = (newRating) => {
    setRatingStar(newRating);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendReviewInfo({
      ...userInfo,
      ratingStar,
      id: data?.getProduct?._id,
    });
    e.target.reset();
    setRatingStar(0)
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 lg:px-0">
        {/* display review */}
        <div>
          {data?.getProduct?.review.map((review) => (
            <div className="flex items-start justify-center mb-10">
              <div className="basis-1/6">
                <img
                  className="rounded-full w-[50%] mx-auto"
                  src={require("../../../assets/images/review-avatar.jpeg")}
                  alt="review avatar"
                />
              </div>
              <div className="basis-5/6 !mt-0">
                <div className="flex items-center justify-start gap-1 text-primary text-lg mb-2">
                  <ReactStars
                    count={5}
                    value={review?.ratingStar}
                    size={24}
                    isHalf={true}
                    fullIcon={<AiFillStar />}
                    activeColor="#ffd700"
                  />
                </div>
                <h2 className="text-xl text-black font-bold mb-3">
                  {review?.fullname}
                </h2>
                <p className="text-gray-500 text-lg">{review?.reviewText}</p>
              </div>
            </div>
          ))}
        </div>

        {/* review form */}
        <div>
          <div className="mb-4">
            <h1 className="text-lg text-gray-500">Your rating *</h1>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              fullIcon={<AiFillStar />}
              activeColor="#ffd700"
            />
          </div>
          <form className="mb-4" onSubmit={handleSubmit}>
            <label className="text-lg text-gray-500">Your review *</label>
            <textarea
              className="text-gray-500 border-2 border-border rounded-lg focus:border-primary outline-none w-full p-4 mb-4"
              name="reviewText"
              rows="10"
              onChange={(e) => handleChange(e)}
            ></textarea>
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="name" className="text-lg text-gray-500">
                  Name *
                </label>
                <input
                  readOnly
                  type="text"
                  name="fullname"
                  className="text-gray-500 border-2 border-border rounded-lg focus:border-primary outline-none w-full p-4"
                  value={user?.fullname}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-lg text-gray-500">
                  Email *
                </label>
                <input
                  readOnly
                  type="email"
                  name="email"
                  className="text-gray-500 border-2 border-border rounded-lg focus:border-primary outline-none w-full p-4"
                  value={user?.email}
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
