import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  // Backend url
  const serverUrl = process.env.REACT_APP_BACKEND_URL;

  // Form data
  const [signupFormValue, setSignupFormValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Form errors
  const [usernameError, setUsernameError] = useState("");
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [userError, setUserError] = useState("");
  const [isUserError, setIsUserError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);

  // handle form input change
  const handleChange = (event) => {
    setSignupFormValue({
      ...signupFormValue,
      [event.target.name]: event.target.value,
    });
  };

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${serverUrl}/api/v1/auth/register/`;
    const data = {
      username: signupFormValue.username,
      email: signupFormValue.email,
      password: signupFormValue.password,
    };

    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        navigate("/users/dashboard");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          // username error
          if (error.response.data.username_error) {
            setIsUsernameError(true);
            setIsEmailError(false);
            setIsUserError(false);
            setIsPasswordError(false);
            setUsernameError(error.response.data.username_error);
            // email error
          } else if (error.response.data.email_error) {
            setIsUsernameError(false);
            setIsEmailError(true);
            setIsUserError(false);
            setIsPasswordError(false);
            setEmailError(error.response.data.email_error);
            // password error
          } else if (error.response.data.password_error) {
            setIsUsernameError(false);
            setIsEmailError(false);
            setIsUserError(false);
            setIsPasswordError(true);
            setPasswordError(error.response.data.password_error);
            // user error: email or username already exist in database
          } else if (error.response.data.user_error) {
            setIsUsernameError(false);
            setIsEmailError(false);
            setIsUserError(true);
            setIsPasswordError(false);
            setUserError(error.response.data.user_error);
          }
          console.log(error);
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
        <div className="mb-4">
          <h3 className="block text-blue-400 text-xl font-bold mb-2">
            Create a new account
          </h3>

           {/* check errors */}
           {isUserError ? (
            <p className="text-red-500 text-xs">{userError}</p>
          ) : (
            ""
          )}
        </div>
        {/* username */}
        <div className="mb-4">
          <label
            className="block text-gray-500 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="appearance-none border w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:border-blue-300 focus:ring-0"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={signupFormValue.username}
            onChange={handleChange}
          />
          {/* check errors */}
          {isUsernameError ? (
            <p className="text-red-500 text-xs">{usernameError}</p>
          ) : (
            ""
          )}
          {/* <p className="text-red-500 text-xs">{usernameError}</p> */}
        </div>

        {/* email */}
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
            name="email"
            type="email"
            placeholder="Email address"
            value={signupFormValue.email}
            onChange={handleChange}
          />
           {/* check errors */}
           {isEmailError ? (
            <p className="text-red-500 text-xs">{emailError}</p>
          ) : (
            ""
          )}
        </div>
        {/* password */}
        <div className="mb-4">
          <label
            className="block text-gray-500 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:border-blue-300"
            id="password"
            name="password"
            type="password"
            placeholder="*********"
            value={signupFormValue.password}
            onChange={handleChange}
          />
           {/* check errors */}
           {isPasswordError ? (
            <p className="text-red-500 text-xs">{passwordError}</p>
          ) : (
            ""
          )}
        </div>
        {/* signup */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign up
          </button>
          <div>
            <p className="text-sm text-gray-500">Already have an account?</p>
            <NavLink to="/login">
              <p className="inline-block align-baseline font-bold text-sm text-blue-400 hover:text-blue-300">
                Login
              </p>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
