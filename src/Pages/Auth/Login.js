import React from 'react';
import { useLoginMutation } from "../../store/services/authServices"
const Login = () => {
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: ""
  });
  const [loginData, result] = useLoginMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    loginData(userInfo)
  }
  console.log(result)
  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form onSubmit={handleSubmit} encType=" multipart/form-data" className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            <input
              type="email"
              onChange={handleChange}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email" />

            <input
              type="password"
              onChange={handleChange}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password" />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-gray-800 text-white my-1"
            >Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login