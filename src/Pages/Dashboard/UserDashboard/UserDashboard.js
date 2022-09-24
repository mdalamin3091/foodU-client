import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import {FiMenu} from "react-icons/fi";
import { MdLightMode } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import {useSelector} from "react-redux";
import useDarkMode from "../../../hooks/useDarkMode";
const UserDashboard = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const {user} = useSelector(state => state.auth);
  const [setTheme, colorTheme] = useDarkMode();
  return (
    <>
      <div className="flex h-screen bg-gray-100 dark:bg-darkBg font-JosefinSans transition duration-500">
        <UserSidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="flex flex-col flex-1 w-full">
          <header className="bg-white dark:bg-darkBg shadow-md py-4 px-4 w-full z-20">
            <div className="container flex items-center justify-between">
              <div className="flex items-center justify-start gap-3">
                <span className="block lg:hidden text-2xl font-bold cursor-pointer !text-primary" onClick={() => setOpenMenu(!openMenu)}>
                  <FiMenu />
                </span>
                <h2 className="text-xl font-bold lg:text-3xl dark:text-white">User Dashboard</h2>
              </div>
              <div className="flex items-center gap-6">
                <div onClick={()=> setTheme(colorTheme)}>
                  {
                    colorTheme === "light" ? <span className="text-xl cursor-pointer text-primary">
                      <MdLightMode />
                    </span> : <span className="text-xl cursor-pointer text-primary">
                      <BsMoon />
                    </span>
                  }
                </div>
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src={user?.profilePic}
                  alt="avatar"
                />
              </div>
            </div>
          </header>
          <div className="h-screen overflow-y-auto dark:bg-darkBg dark:text-white">
            <div className="container">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
