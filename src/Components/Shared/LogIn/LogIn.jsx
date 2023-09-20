import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginimg from "../../../assets/images/Loginimg/login.webp";
import google from "../../../assets/images/Loginimg/google.png";
import { UsersauthContext } from "../Userscontext/UsersContext";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LogIn = () => {
  const { signIn, signinwithGoogle } = useContext(UsersauthContext);
  const navigate = useNavigate();
  const loginhandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    /* console.log(email, password); */
    signIn(email, password)
      .then((result) => {
        const loogedUser = result.user;
        toast.success("Login successful");
        form.reset();
        // Redirect to the course access page
        navigate("/courseaccess");
      })
      .catch((error) => {
        if (
          error.code === "auth/invalid-email" ||
          error.code === "auth/user-not-found"
        ) {
          // Show an error toast message for wrong email
          toast.error(
            "Wrong email or user not found. Please check your email."
          );
        } else if (error.code === "auth/wrong-password") {
          // Show an error toast message for wrong password
          toast.error("Wrong password. Please check your password.");
        } else {
          // Show a generic error message for other errors
          toast.error("An error occurred. Please try again later.");
        }
        /* console.log(error); */
      });
  };
  const hloginwithGoogle = () => {
    signinwithGoogle()
      .then((result) => {
        const loogedUser = result.user;
        toast.success("Login With Google Successful");
        /*    console.log(loogedUser); */
      })
      .catch((error) => {
        toast.error("Google login failed. Please try again.");
        /* console.log(error); */
      });
  };
  return (
    <div className="lg:flex lg:flex-row">
      <div className="lg:w-3/6 sm:w-full">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-purple-600">
              LogIn
            </h2>
          </div>
          <ToastContainer />
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={loginhandle}
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
                  Login
                </button>
              </div>
            </form>
            <div className="mt-6  text-sm ">
              <Link to="/enroll">
                <p className="  ">
                  Don’t have account?{" "}
                  <span className="text-purple-600">Enroll</span>
                </p>
              </Link>
            </div>
            <div className="mt-3 ">
              <button
                onClick={hloginwithGoogle}
                className="btn p-2 w-full justify-center  "
              >
                <img src={google} width={"20px"} height={"20px"} />
                Login With Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-3/6">
        <img className="h-full " src={loginimg} alt="Login" />
      </div>
    </div>
  );
};
export default LogIn;
