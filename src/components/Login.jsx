import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const serverUrl = process.env.REACT_APP_BACKEND_URL;
  // console.log('serverUrl', serverUrl)

  // Form input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form errors
  const [userError, setUserError] = useState("");
  const [isUserError, setIsUserError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${serverUrl}/api/v1/auth/login/`;
    const data = {
      email: email,
      password: password,
    };

    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        navigate("/users/dashboard");
      })
      .catch((e) => {
        if (e.response) {
          console.log(e.response.data);
          // user error
          if (e.response.data.user_error) {
            setIsUserError(true);
            setUserError(e.response.data.user_error);
          }
          console.log(e);
        }
      });
  };

  return (
    <div className="w-full max-w-xs m-auto mt-10">
      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
      >
        {/* Username */}
        <div className="mb-4">
          <h3 className="block text-blue-400 text-xl font-bold mb-2">
            Log in to your account
          </h3>

          {/* check errors */}
          {isUserError ? (
            <p className="text-red-500 text-xs">{userError}</p>
          ) : (
            ""
          )}
        </div>
        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-gray-500 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none border w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:border-blue-300 focus:ring-0"
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Password */}
        <div className="mb-6">
          <label
            className="block text-gray-500 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:border-blue-300"
            id="password"
            type="password"
            name="password"
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* signin */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <NavLink to="/forget-password">
            <p className="inline-block align-baseline font-bold text-sm text-blue-400 hover:text-blue-300">
              Forgot Password?
            </p>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
