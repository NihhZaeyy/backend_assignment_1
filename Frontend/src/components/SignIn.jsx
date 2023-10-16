import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

    const navigateToRegisterPage = useNavigate()

  return (
    <div className="bg-[#222222] w-screen h-screen flex justify-center items-center">
      <div className="w-[40%] h-[75%] rounded-lg p-5 bg-white">
        <h1 className="text-center font-bold mb-5">Sign In</h1>
        <div>
          <p className="text-[14px] font-bold">Enter your email address:</p>
          <form className="mt-1 rounded-md border-2" action="" method="post">
            <input
              className="w-full px-2 h-[30px]"
              type="email"
              id="lastname"
              name="lastname"
              placeholder="example@email.com"
            />
          </form>
        </div>
        <div className="mt-5">
          <p className="text-[14px] font-bold">Enter your secret password: </p>
          <form className="mt-1 rounded-md border-2" action="" method="post">
            <input
              className="w-full px-2 h-[30px]"
              type="text"
              id="password"
              name="password"
            />
          </form>
        </div>
        <div className="mt-4 flex justify-center items-center gap-2">
          <button onClick={() => navigateToRegisterPage('/register')} className="px-4 py-2 rounded-lg bg-green-700 text-white">
            Register
          </button>
          <button className="px-4 py-2 rounded-lg bg-green-700 text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
