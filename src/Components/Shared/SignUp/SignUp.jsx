import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginimg from "../../../assets/images/Loginimg/login.webp";
import { UsersauthContext } from "../Userscontext/UsersContext";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const navigate = useNavigate();
  const { user, createUser } = useContext(UsersauthContext);
  const signuphandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const loogedUser = result.user;
        toast.success("SignUp Successful! Welcome to LetsLearn!");
        form.reset();
        // Redirect to the course access page
        navigate("/courseaccess");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="lg:flex lg:flex-row">
      <div className="lg:w-3/6 sm:w-full">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-purple-600">
              SignUp
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={signuphandle}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  SignUp
                </button>
              </div>
            </form>
            <div className="mt-6  text-sm ">
              <Link to="/login">
                <p className="">
                  Already have account?{" "}
                  <span className="text-purple-600">LogIn</span>
                </p>
              </Link>
            </div>
            <div className="mt-3 "></div>
          </div>
        </div>
      </div>
      <div className="lg:w-3/6">
        <img className="h-full " src={loginimg} alt="Login" />
      </div>
      <ToastContainer />
    </div>
  );
};
export default SignUp;
