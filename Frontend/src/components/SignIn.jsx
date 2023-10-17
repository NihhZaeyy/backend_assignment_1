import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const SignIn = () => {
  const navigateToRegisterPage = useNavigate();
  const navigateToMyAccountPage = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "http://localhost:3030/api/auth/login",
        {
          email,
          password,
        }
      );
      if (response.data.message === "Login berhasil") {
        console.log("Berhasil Login", response);

        const user = response.data.user;
        navigateToMyAccountPage("/myAccount", {
          state: { user: response.data.user },
        });
      } else {
        console.error("Gagal Login");
      }
    } catch (error) {
      console.error("Gagal Login", error);
      alert("Password or Email are not matched, please try again!");
    }
  };

  return (
    <div className="bg-[#222222] w-screen h-screen flex justify-center items-center">
      <div className="w-[40%] h-[75%] rounded-lg p-5 bg-white">
        <h1 className="text-center font-bold mb-5">Sign In</h1>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
          <div>
            <label htmlFor="email" className="text-[14px] font-bold">
              Enter your email address:
            </label>
            <input
              className="w-full px-2 py-1 h-[30px] border-2"
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              value={email}
              onChange={handleEmailChange}
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-[14px] font-bold">
              Enter your secret password:
            </label>
            <input
              className="w-full px-2 py-1 h-[30px] border-2"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="mt-5 px-4 py-2 rounded-lg bg-green-700 text-white"
          >
            Login
          </button>
        </form>
        <div className="mt-2">
          <button
            onClick={() => navigateToRegisterPage("/register")}
            className="w-full px-4 py-2 rounded-lg bg-green-700 text-white"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
