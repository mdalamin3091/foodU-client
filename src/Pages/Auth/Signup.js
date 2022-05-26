import React from 'react';
import axios from "axios";
import { useSignupMutation } from "../../store/services/authServices"
const Signup = () => {
    const [userInfo, setUserInfo] = React.useState({
        fullname: "",
        email: "",
        password: ""
    });
    const [profilePic, setProfilePic] = React.useState(null);
    const [signupData, result] = useSignupMutation();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value })
    }
    const handleImage = (pics) => {
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "poco-site");
            data.append("cloud_name", "online-poco");
            axios
                .post("https://api.cloudinary.com/v1_1/online-poco/image/upload", data)
                .then(({ data }) => {
                    setProfilePic(data.url.toString());
                    console.log(data.url.toString());
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        signupData({
            ...userInfo,
            profilePic
        })
    }
    return (
        <>
            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSubmit} encType=" multipart/form-data" class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            onChange={handleChange}
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />

                        <input
                            type="email"
                            onChange={handleChange}
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            onChange={handleChange}
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input
                            type="file"
                            onChange={e => handleImage(e.target.files[0])}
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="profilePic" />

                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-gray-800 text-white my-1"
                        >Create Account</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup