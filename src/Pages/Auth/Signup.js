import React from "react";
import axios from "axios";
import { useSignupMutation } from "../../store/services/authServices";
import { useUploadImagesMutation } from "../../store/services/uploadServices";
const Signup = () => {
  const [userInfo, setUserInfo] = React.useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [profilePic, setProfilePic] = React.useState(null);
  const [signupData] = useSignupMutation();
  const [uploadImages] = useUploadImagesMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleImage = (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "poco-site");
      data.append("cloud_name", "online-poco");
      uploadImages(data).then((result) => setProfilePic(result.data.url.toString()))
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (profilePic) {
      signupData({
        ...userInfo,
        profilePic,
      }).then(res => console.log(res))
    }else{
      alert("Upload Profile photo")
    }
  };
  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form
            onSubmit={handleSubmit}
            encType=" multipart/form-data"
            className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          >
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              onChange={handleChange}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="email"
              onChange={handleChange}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              onChange={handleChange}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="file"
              onChange={(e) => handleImage(e.target.files[0])}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="profilePic"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-gray-800 text-white my-1"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
