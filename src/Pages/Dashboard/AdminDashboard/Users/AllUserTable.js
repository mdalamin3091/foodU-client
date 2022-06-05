import React from "react";
import {
  useAllUsersQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
} from "../../../../store/services/authServices";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const AllUserTable = () => {
  const { data } = useAllUsersQuery();
  const [updateRole] = useUpdateUserRoleMutation();
  const [userDelete] = useDeleteUserMutation();
  const handleUserRole = (id, e) => {
    updateRole({
      id,
      role: e.target.value,
    }).then((res) => {
      if (res?.data) {
        toast.success(res?.data?.msg, {
          theme: "colored",
          closeOnClick: true,
          hideProgressBar: false,
        });
      }
    });
  };
  const handleDelete = (id) => {
    userDelete(id).then(res => {
      if (res?.data) {
        toast.success(res?.data?.msg, {
          theme: "colored",
          closeOnClick: true,
          hideProgressBar: false,
        });
      }
    })
  };
  return (
    <>
      <>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-left text-gray-500 dark:text-gray-400 whitespace-nowrap">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Role
                </th>
                <th scope="col" class="px-6 py-3">
                  Profile
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-[16px]">
              {data?.allUser.map((user) => (
                <tr class="bg-white border-b">
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {user?.fullname}
                  </td>
                  <td class="px-6 py-4">{user?.email}</td>
                  <td class="px-6 py-4">
                    <select
                      name="role"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary focus:border-primary block lg:w-full w-[150px] p-2.5 outline-none"
                      onChange={(e) => handleUserRole(user?._id, e)}
                    >
                      <option selected={user?.role === "user"} value="user">
                        User
                      </option>
                      <option selected={user?.role === "admin"} value="admin">
                        Admin
                      </option>
                    </select>
                  </td>
                  <td class="px-6 py-4">
                    <img
                      className="w-[50px] h-[50px] rounded-full"
                      src={user?.profilePic}
                      alt="avatar"
                    />
                  </td>
                  <td class="px-6 py-4">
                    <span
                      onClick={() => handleDelete(user._id)}
                      className="text-red-600 font-bold text-3xl cursor-pointer"
                    >
                      <MdDelete />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </>
  );
};

export default AllUserTable;
