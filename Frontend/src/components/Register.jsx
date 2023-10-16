import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
  const navigateToLoginPage = useNavigate();

  const [values , setValues] = useState ({
    firstName: '',
    lastName:'',
    email:'',
    contact:'',
    password:''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3030/register', values)
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <>
      <div className="bg-[#222222] w-screen h-screen flex justify-center items-center">
        <div className="w-[40%] h-[75%] rounded-lg p-5 bg-white">
          <h1 className="text-center font-bold mb-5">
            Let's Introduce Yourself
          </h1>
          <div>
            <p className="text-[14px] font-bold">My firstname is:</p>
            <form onSubmit={handleSubmit} className="mt-1 rounded-md border-2" action="" method="post">
              <input
                className="w-full px-2 h-[30px]"
                autoComplete="off"
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Nizar"
                onChange={(e) => setValues({...values, firstName: e.target.value})}
              />
            </form>
          </div>
          <div>
            <p className="text-[14px] font-bold">My lastname is:</p>
            <form onSubmit={handleSubmit} className="mt-1 rounded-md border-2" action="" method="post">
              <input
                className="w-full px-2 h-[30px]"
                autoComplete="off"
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Almas"
                onChange={(e) => setValues({...values, lastName: e.target.value})}
              />
            </form>
          </div>
          <div>
            <p className="text-[14px] font-bold">My email address:</p>
            <form onSubmit={handleSubmit} className="mt-1 rounded-md border-2" action="" method="post">
              <input
                className="w-full px-2 h-[30px]"
                autoComplete="off"
                type="email"
                id="lastname"
                name="lastname"
                placeholder="example@email.com"
                onChange={(e) => setValues({...values, email: e.target.value})}
              />
            </form>
          </div>
          <div>
            <p className="text-[14px] font-bold">My Telephone number: </p>
            <form onSubmit={handleSubmit} className="mt-1 rounded-md border-2" action="" method="post">
              <input
                className="w-full px-2 h-[30px]"
                autoComplete="off"
                type="number"
                id="contact"
                name="contact"
                placeholder="+90 111 222 34 56"
                onChange={(e) => setValues({...values, contact: e.target.value})}
              />
            </form>
          </div>
          <div className="mt-5">
            <p className="text-[14px] font-bold">My secret password: </p>
            <form onSubmit={handleSubmit} className="mt-1 rounded-md border-2" action="" method="post">
              <input
                className="w-full px-2 h-[30px]"
                autoComplete="off"
                type="text"
                id="password"
                name="password"
                onChange={(e) => setValues({...values, password: e.target.value})}
              />
            </form>
          </div>
          <div>
            <p className="text-[14px] font-bold">
              Can you repeat that password again please:{" "}
            </p>
            <form onSubmit={handleSubmit} className="mt-1 rounded-md border-2" action="" method="post">
              <input
                className="w-full px-2 h-[30px]"
                autoComplete="off"
                type="text"
                id="password2"
                name="password2"
              />
            </form>
          </div>

          <div className="mt-4 flex justify-center items-center">
            <button
              onClick={() => navigateToLoginPage("/login")}
              className="px-4 py-2 rounded-lg bg-green-700 text-white"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
