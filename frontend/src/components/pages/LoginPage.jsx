import React, { useRef, useState } from "react";
import CapstoneInput from "../common/CapstoneInput";
import EmailIcon from "../../utils/icons/EmailIcon";
import PasswordIcon from "../../utils/icons/PasswordIcon";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const handleLoginClick = (e) => {
    e.preventDefault();
    if (!validateLoginForm()) return;
    resetFormError();
  };
  const handleSignUpClick = (e) => {
    e.preventDefault();
    navigate("/signUp");
  };
  const resetFormError = () => {
    setEmailError(false);
    setPasswordError(false);
  };
  const validateLoginForm = () => {
    // Implement Login Form Validation
    return true;
  };
  return (
    <div className="flex h-3/4 w-full justify-center items-center">
      <div className="border-solid border-2 border-gray-700 rounded-xl p-8 w-1/4">
        <h1 className="text-center text-xl">Login</h1>
        <div>
          <div className="pt-6 px-4">
            <CapstoneInput
              placeholder="Email"
              icon={<EmailIcon />}
              type="email"
              ref={emailRef}
              error={emailError}
            />
          </div>
          <div className="pt-3 px-4">
            <CapstoneInput
              placeholder="Password"
              icon={<PasswordIcon />}
              type="password"
              ref={passwordRef}
              error={passwordError}
            />
          </div>
          <div className="pt-3 px-4">
            <button
              className="btn btn-neutral w-full"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="px-4">
            <button
              className="btn btn-primary w-full"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
