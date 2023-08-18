import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const navigate = useNavigate();

  const SignUpClick = () => {
    navigate("SignUp");
  };

  const LoginClick = () => {
    navigate("Login");
  };

  const ClearClick = () => {
    localStorage.removeItem("signUp");
    localStorage.removeItem("login");
    localStorage.removeItem("persist:root");
    toast.success("successfully clear all data ");
  };

  return (
    <div  style={{width:'100%',height:'100%',  position:'fixed'}} className="background-radial-gradient overflow-hidden">
      <section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
          }}
        />
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                An e-card website offers several advantages over traditional physical greeting cards.E-card websites provide a convenient way to send greetings for various occasions. E-card websites often offer a wide range of design options for various occasions, including birthdays, holidays, anniversaries, and more.
              </p>
            </div>
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
                <div className="card-body px-4 py-5 px-md-5 didplay-flex textaline-center">
                  <div style={{display:"flex",justifyContent:"space-around"}}>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      onClick={SignUpClick}
                    >
                      Sign up
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      onClick={LoginClick}
                    >
                      Login
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      onClick={ClearClick}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer theme="colored" />
      </section>
    </div>
  );
};

export default Home;
