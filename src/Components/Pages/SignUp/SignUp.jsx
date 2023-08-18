import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorMessage } from "@hookform/error-message";
const SignUp = () => {
  const [Data, setData] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  let Id = 0;

  const onSubmit = async (data) => {
    const signUpData = JSON.parse(localStorage.getItem("signUp"));
    if (signUpData != null) {
      Data.push(signUpData[0]);
    }
    let emailExist = false;

    Data.forEach((item) => {
      if (item.Email === data.Email) {
        emailExist = true;
      }
    });

    if (emailExist) {
      toast.error("Email is already exist");
    } else {
      Id = Data.length + 1;

      let obj2 = { ...data, Id };
      Data.push(obj2);
      localStorage.setItem("signUp", JSON.stringify(Data));
      localStorage.setItem("register", "true");
      navigate("/login");
      reset();
    }
  };

  const cancel = () => {
    navigate("/");
  };

  return (
    <div
      style={{ width: "100%", height: "100%", position: "fixed" }}
      className="background-radial-gradient overflow-hidden"
    >
      <section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
          }}
        />
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            />
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            />
            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          {...register("FirstName", {
                            required: "First Name is Required",
                            pattern: {
                              value: /^[A-Za-z\s]*$/i,
                              message: "Please Enter a Valid Name",
                            },
                          })}
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                        <ErrorMessage
                          errors={errors}
                          name="FirstName"
                          render={({ message }) => (
                            <p className="text-danger">{message}</p>
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          {...register("LastName", {
                            required: "Last Name is Required",
                            pattern: {
                              value: /^[A-Za-z\s]*$/i,
                              message: "Please Enter a Valid Name",
                            },
                          })}
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Last name
                        </label>
                        <ErrorMessage
                          errors={errors}
                          name="LastName"
                          render={({ message }) => (
                            <p className="text-danger">{message}</p>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      {...register("Email", {
                        required: "Email is Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please Enter a Valid Email",
                        },
                      })}
                    />

                    <label className="form-label" htmlFor="form3Example3">
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
                      id="form3Example4"
                      className="form-control"
                      {...register("Password", {
                        required: "Password is Required",
                        pattern: {
                          value:
                            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
                          message:
                            "Please Enter a Valid Password,Minimum eight characters, at least one letter, one number and one special character.",
                        },
                      })}
                    />
                    <label className="form-label" htmlFor="form3Example4">
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
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <button
                      type="button"
                      className="btn btn-primary btn-block mb-4"
                      onClick={() => cancel()}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer theme="colored" />
      </section>
    </div>
  );
};

export default SignUp;
