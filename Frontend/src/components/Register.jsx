import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigateToLoginPage = useNavigate();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3030/api/user/create", values)
      .then((response) => {
        console.log("Data berhasil disimpan:", response.data);
        navigateToLoginPage("/login");
      })
      .catch((error) => {
        console.error("Gagal menyimpan data:", error);
      });
  };

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    const isAllInputFilled = Object.values(values).every(
      (value) => value.trim() !== ""
    );
    setIsSubmitDisabled(!isAllInputFilled);
  };

  return (
    <>
      <div className="bg-[#222222] w-screen h-screen flex justify-center items-center">
        <div className="w-[40%] h-[85%] rounded-lg p-5 bg-white">
          <h1 className="text-center font-bold mb-5">
            Let's Introduce Yourself
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName" className="text-[14px] font-bold">
                My firstname is:
              </label>
              <input
                className="w-full px-2 h-[30px] border-2 rounded-md"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Nizar"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-[14px] font-bold">
                My lastname is:
              </label>
              <input
                className="w-full px-2 h-[30px] border-2 rounded-md"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Almas"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-[14px] font-bold">
                My email address:
              </label>
              <input
                className="w-full px-2 h-[30px] border-2 rounded-md"
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="contact" className="text-[14px] font-bold">
                My Telephone number:{" "}
              </label>
              <input
                className="w-full px-2 h-[30px] border-2 rounded-md"
                type="number"
                id="contact"
                name="contact"
                placeholder="08211345678"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="password" className="text-[14px] font-bold">
                My secret password:{" "}
              </label>
              <input
                className="w-full px-2 h-[30px] border-2 rounded-md"
                autoComplete="off"
                type="password"
                id="password"
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4 px-4 py-2 rounded-lg bg-green-700 text-white text-center hover:brightness-110">
              <button type="submit" disabled={isSubmitDisabled}>
                Register
              </button>
            </div>
          </form>
          <div className="mt-2 px-4 py-2 rounded-lg bg-green-700 text-white text-center hover:brightness-110">
            <button onClick={() => navigateToLoginPage("/login")}>
              I already have an account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
