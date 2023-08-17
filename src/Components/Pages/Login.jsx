import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginData, setuserLogin } from "../Redux/Slice/Slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorMessage } from "@hookform/error-message";

const Login = () => {
  const { register, handleSubmit, reset,formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUpData = JSON.parse(localStorage.getItem("signUp"));

  const onSubmit = (data) => {
    if (signUpData != null) {
      const matchData =
        signUpData &&
        signUpData.filter(
          (item) =>
            item.Email.includes(data.Email) &&
            item.Password.includes(data.Password)
        );

      dispatch(setLoginData(matchData[0]));
      localStorage.setItem("login", JSON.stringify(matchData));
      if (matchData.length !== 0) {
        dispatch(setuserLogin("true"));
        navigate("/");
      } else {
        toast.error("your credential is wrong");
      }
      reset();
    } else {
      toast.error("email is not registered");
    }
  };
   useEffect(() => {
    const registerData = JSON.parse(localStorage.getItem("register"));
    if (registerData === true) {
      toast.success("successfully Registered ");
      localStorage.setItem("register", "false");
    }
   }, []);

  const cancel = () => {
    navigate("/signUp");
  };

  return (
    <>
      <ToastContainer theme="colored" />

      <section className="background-radial-gradient overflow-hidden">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .background-radial-gradient {\n background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
          }}
        />
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          />
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Sign into your account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            {...register("Email", {
                              required: "Email is Required",
                            })}
                          />

                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email address
                          </label>
                          <ErrorMessage
                          errors={errors}
                          name="Email"
                          render={({ message }) => (
                            <p className="text-danger">{message}</p>
                          )}
                        />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            {...register("Password", {
                              required: "Password is Required",
                            })}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                          <ErrorMessage
                          errors={errors}
                          name="Password"
                          render={({ message }) => (
                            <p className="text-danger">{message}</p>
                          )}
                        />
                        </div>
                        <div className="pt-1 mb-4" style={{display:"flex",justifyContent:"space-between"}}>
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Sign in
                          </button>
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={() => cancel()}
                          >
                            Cancel
                          </button>
                        </div>

                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <Link to="/signUp" style={{ color: "#393f81" }}>
                            Register here
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
