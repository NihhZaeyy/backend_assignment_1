import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "boxicons";
import Axios from "axios";

const Account = () => {
  const navigateToLoginPage = useNavigate();
  const location = useLocation();
  const user = location.state && location.state.user;

  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [newUsername, setNewUsername] = useState(user.username || "");

  const handleEditUsernameClick = () => {
    setIsEditingUsername(true);
  };

  const handleCloseFormClick = () => {
    setIsEditingUsername(false);
  };

  const handleApplyUsernameClick = async () => {
    try {
      const response = await Axios.put(
        "http://localhost:3030/api/user/update",
        {
          id: user.id,
          newUsername,
        }
      );

      if (response.status === 200) {
        console.log("Username berhasil diubah");
        setIsEditingUsername(false);

        user.username = newUsername;
      } else {
        console.error("Gagal mengubah username");
      }
    } catch (error) {
      console.error("Gagal mengubah username", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await Axios.delete(
        "http://localhost:3030/api/user/deleteAccount",
        {
          data: { email: user.email, password: user.password },
        }
      );

      if (response.status === 200) {
        navigateToLoginPage("/login");
      } else {
        console.error("Gagal menghapus akun");
      }
    } catch (error) {
      console.error("Gagal menghapus akun", error);
    }
  };

  return (
    <>
      <div className="bg-[#222222] w-screen h-screen pt-10">
        <div className="flex items-center h-[90%] flex-col">
          <h1 className="text-white text-[30px]">
            Welcome back {user ? `${user.firstName} ${user.lastName}` : "User"}{" "}
            😉🖐
          </h1>
          <div className="flex flex-col gap-2 mt-4 p-5 w-[80%] h-[80%] rounded-lg bg-white">
            <div className="w-full">
              <h2 className="font-bold">Username:</h2>
              <div className="px-2 py-1 border-2 rounded-md flex justify-between items-center">
                <p>
                  {user && user.username ? user.username : "Add your username"}
                </p>
                <i
                  onClick={handleEditUsernameClick}
                  className="bx bx-edit text-black text-[24px] cursor-pointer"
                ></i>
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-bold">Email:</h2>
              <div className="px-2 py-1 border-2 rounded-md">
                <p>{user ? user.email : "Email not available"}</p>
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-bold">No Telephone:</h2>
              <div className="px-2 py-1 border-2 rounded-md">
                <p>{user ? user.contact : "Contact not available"}</p>
              </div>
            </div>
            <div className="flex flex-col mt-10 gap-2">
              <div className="px-2 py-1 rounded-md w-full bg-green-700 text-white text-center hover:brightness-110 cursor-pointer">
                <p>Change my password</p>
              </div>
              <div
                onClick={() => navigateToLoginPage("/login")}
                className="px-2 py-1 rounded-md w-full bg-green-700 text-white text-center hover:brightness-110 cursor-pointer"
              >
                <p>Logout</p>
              </div>
              <div
                onClick={handleDeleteAccount}
                className="px-2 py-1 rounded-md w-full bg-red-700 text-white text-center hover:brightness-110 cursor-pointer"
              >
                <p>Delete my account</p>
              </div>
            </div>
          </div>
        </div>
        {isEditingUsername && (
          <div className="w-screen h-screen absolute left-0 top-0 backdrop-blur-xl flex justify-center items-center ">
            <div className="bg-white rounded-md p-5 border-black border-2">
              <form>
                <label htmlFor="username" className="text-[14px] font-bold">
                  username:
                </label>
                <input
                  className="w-full px-2 h-[30px] border-2 rounded-md"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Your username"
                  onChange={(e) => setNewUsername(e.target.value)}
                />
                <div className="text-center mt-2 rounded-md bg-green-700 hover:brightness-105 cursor-pointer text-white py-1">
                  <button onClick={handleApplyUsernameClick} type="submit">
                    Apply Username
                  </button>
                </div>
              </form>
              <div
                className="text-center mt-2 rounded-md bg-green-700 hover:brightness-105 cursor-pointer text-white py-1"
                onClick={handleCloseFormClick}
              >
                <button>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Account;
