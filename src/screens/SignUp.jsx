import { useState } from "react";
import { PiEyeThin, PiEyeClosedThin } from "react-icons/pi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import google from "../assets/google.png";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

function SignUp() {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [p, setp] = useState("");
   const [googleProfile, setgoogleProfile] = useState("");
   const login = useGoogleLogin({
     onSuccess: async (response) => {
       try {
         const res = await axios.get(
           "https://www.googleapis.com/oauth2/v3/userinfo",
           {
             headers: { Authorization: `Bearer ${response.access_token}` },
           },
         );
         console.log(res);
         setgoogleProfile(res.data);
       } catch (err) {
         console.log(err);
       }
     },
   });

  const navigate = useNavigate();
  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
 
  
  const validateForm = ()  => {
    if (!(p.name || name || googleProfile.name) || !(p.email || email || googleProfile.email) || !password) {
      toast.error("Please fill in all fields.");
      return false;
    }

    // You can add more specific validation logic for email and password if needed
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let regobj = {
      name: p ? p.name : googleProfile ? googleProfile.name : name,
      email: p ? p.email : googleProfile ? googleProfile.email : email,
      password: password,
    };
    // console.log(regobj);

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(regobj),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        toast.success("Sign Up Successfully.");
        // window.location.href = "/login";
        navigate('/login');
        console.log("data", data);
      })
      .catch((error) => {
        toast.error("Failed: ", error.message);
      });

    // Clear the form data
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      {/* TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com */}
      <section className="mx-auto h-screen w-9/12 ">
        <div className="container h-full px-6 py-24 ">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* Left column container with background*/}

            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="/public/sign up.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            {/* Right column container with form */}
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form onSubmit={handleSubmit}>
                <h1 className="heading flex justify-center">Sign Up </h1>
                {/* Input first name */}
                <div className=" w-full rounded-lg bg-white p-4 px-3">
                  <div className="relative w-full bg-inherit">
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="peer h-10 w-full rounded-md border-none bg-transparent px-2 py-[0.32rem] text-gray-900 placeholder-transparent ring-1 ring-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Full Name"
                      value={
                        p ? p.name : googleProfile ? googleProfile.name : name
                      }
                      onChange={(e) =>
                        setName(
                          p
                            ? p.name
                            : googleProfile
                              ? googleProfile.name
                              : e.target.value,
                        )
                      }
                    />
                    <label
                      htmlFor="fullname"
                      className="absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-3 text-sm text-secondary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary"
                    >
                      Full Name
                    </label>
                  </div>
                </div>
                {/* Email input */}
                <div className=" w-full rounded-lg bg-white p-4 px-3">
                  <div className="relative w-full bg-inherit">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="peer h-10 w-full rounded-md border-none bg-transparent px-2 py-[0.32rem] text-gray-900 placeholder-transparent ring-1 ring-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Email"
                      value={
                        p
                          ? p.email
                          : googleProfile
                            ? googleProfile.email
                            : email
                      }
                      onChange={(e) =>
                        setEmail(
                          p
                            ? p.email
                            : googleProfile
                              ? googleProfile.email
                              : e.target.value,
                        )
                      }
                    />
                    <label
                      htmlFor="email"
                      className="absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-3 text-sm text-secondary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary"
                    >
                      Email
                    </label>
                  </div>
                </div>
                {/* Password input */}
                <div
                  className={`relative w-full rounded-lg bg-white p-4 px-3 ${
                    password ? "ring-primary" : ""
                  }`}
                >
                  <div className="relative flex w-full items-center bg-inherit">
                    <input
                      type={open ? "text" : "password"}
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => setPassword(password)}
                      className="peer h-10 flex-1 rounded-md border-none bg-transparent px-2 py-[0.32rem] text-gray-900 placeholder-transparent ring-1 ring-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-3 text-sm text-secondary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary"
                    >
                      Password
                    </label>
                    {password && (
                      <div className="px-auto absolute right-0 top-1/2 z-10 mr-0.5 -translate-y-1/2 transform rounded bg-white px-2 py-2 text-2xl">
                        {open ? (
                          <PiEyeThin
                            onClick={toggle}
                            className="text-primary"
                          />
                        ) : (
                          <PiEyeClosedThin
                            onClick={toggle}
                            className="text-primary"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Password input */}

                {/* Submit button */}
                <button
                  type="submit"
                  className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mt-8 inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  Sign Up
                </button>
                {/* Divider */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-primary after:mt-0.5 after:flex-1 after:border-t after:border-primary">
                  <p className="text mx-4 mb-0 text-center font-semibold dark:text-primary">
                    OR
                  </p>
                </div>
                {/* Social login buttons  */}
                <div>
                  <LoginSocialFacebook
                    appId="2067050553674632"
                    onResolve={(response) => {
                      console.log(response);
                      setp(response.data);
                    }}
                    onReject={(error) => {
                      console.log(error);
                    }}
                  >
                    <a
                      className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      style={{ backgroundColor: "#3b5998" }}
                      href="#!"
                      role="button"
                      data-te-ripple-init=""
                      data-te-ripple-color="light"
                    >
                      {/* Facebook */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-3.5 w-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                      Continue with Facebook
                    </a>{" "}
                  </LoginSocialFacebook>
                </div>

                <div
                  className="flex min-w-[300px] flex-row items-center justify-center rounded border-2 border-gray-100 bg-white px-2 py-2"
                  onClick={() => login()}
                >
                  <img
                    src={google}
                    alt="Google login"
                    className="h-[25px] w-[25px]"
                  />
                  <p className="amib pl-4 text-base font-bold text-black">
                    Continue With Google
                  </p>
                </div>
              </form>
              <div className="mb-6 flex items-center justify-center space-x-2">
                {/* Forgot password link */}
                <p>Do you have an account ? </p>
                <Link to="/login">
                  <button className="group relative transform cursor-pointer leading-5 text-primary duration-300 dark:text-primary md:my-0">
                    Login
                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary underline transition-transform group-hover:scale-x-100"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
