import React, { useState, useEffect } from "react";
import { useChangePasswordMutation } from "../../../store/services/userServices";
import { setUser } from "../../../store/reducers/authSlice";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
const ChangePassword = () => {
  const { user } = useSelector((state) => state.auth);
  const [updatePasswordSend, result] = useChangePasswordMutation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(user?.email)
  const [oldPassword, setOldPassword] = useState(null)
  const [newPassword, setNewPassword] = useState(null)
  const handleChangePassword = () => {
    updatePasswordSend({
      email,
      oldPassword,
      newPassword
    })
  }
  useEffect(() => {
    if (result?.isSuccess) {
      localStorage.setItem("user", JSON.stringify(result?.data?.updateUser));
      dispatch(setUser(result?.data?.updateUser));
      toast.success(result?.data?.msg, {
        theme: "colored",
        closeOnClick: true,
        hideProgressBar: false,
      });
    }
  }, [result?.isSuccess]);

  // handle error
  useEffect(() => {
    if (result?.isError) {
      if (result?.error?.data?.error) {
        toast.error(result?.error?.data?.error, {
          theme: "colored",
          closeOnClick: true,
          hideProgressBar: false,
        });
      }
    }
  }, [result?.isError])
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 mt-4">Update Profile</h2>
      <div className="grid grid-cols-1 bg-white dark:bg-darkCard p-6 rounded-md shadow-lg">
        <div className="mb-3">
          <label htmlFor="Email" className="text-gray-600 dark:text-white text-lg">
            Email
          </label>
          <br />
          <input
            className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray dark:text-darkCard"
            type="email"
            placeholder="Email"
            value={user?.email}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="oldPassword" className="text-gray-600 dark:text-white text-lg">
            Old Password
          </label>
          <br />
          <input
            className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray dark:text-darkCard"
            type="password"
            placeholder="Old Password"
            autoComplete="off"
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="text-gray-600 dark:text-white text-lg">
            New Password
          </label>
          <br />
          <input
            className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary bg-light-gray rounded-md dark:text-darkCard"
            type="password"
            placeholder="New Password"
            autoComplete="off"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-end mt-6">
        <button className="btn-primary py-2" onClick={handleChangePassword}>Change Password</button>
      </div>
    </>
  );
}
export default ChangePassword;
