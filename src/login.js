import React, { useState } from "react";

import { instance } from "./api/services";
import "./App.css";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [setUserName] = useState("");

  React.useEffect(() => {
    if (localStorage.getItem("yolovendorLogin")) {
      navigate("/dashboard");
    }
  }, []);

  const submitFunc = async (e) => {
    const result = await instance.post("/api/vendor_login", {
      login_id: loginId,
      password: password,
    });
    console.log(typeof result);

    console.log(result);

    if (
      result.status === 200 &&
      result.statusText == "OK" &&
      result.data.data.length > 0
    ) {
      const data = result.data.data[0].vendor_name;
      console.log(data);
      const vendorName = "Suriya";

      navigate("/dashboard");
      setUserName(vendorName);
      localStorage.setItem("yolovendorLogin", true);
    } else {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="container" id="container">
        {/* <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back! Thedc</h1>
              <p>Please login your personal info</p>
              <div className="group button-group">
                <button className="ghost" id="signIn">Sign in</button>
              </div>
         
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <div className="group button-group">
                <button className="ghost" id="signUp">Sign up</button>
              </div>
             
            </div>
          </div>
        </div> */}
        <div className="form-container  sign-in-container" id="sign__in">
          <form action="#">
            <div className="header">Sign In</div>

            <div className="button-input-group">
              <div className="group input-group">
                <input
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  type="loginId"
                  placeholder="LoginId"
                  required
                />
              </div>
              <div className="group input-group">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  required
                  pattern=".{8,}"
                />
              </div>
              <div className="alert-text signup__alert">
                <span className="help__text">At least 8 character</span>
              </div>
              <div className="form-link forgot">
                <a href className="login-link">
                  Forgot your password?
                </a>
              </div>
              <div className="group button-group">
                <button
                  type="submit"
                  onClick={submitFunc}
                  className="signin-btn"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
