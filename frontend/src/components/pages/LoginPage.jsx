import React, { useRef, useState } from "react";
import CapstoneInput from "../common/CapstoneInput";
import EmailIcon from "../../utils/icons/EmailIcon";
import PasswordIcon from "../../utils/icons/PasswordIcon";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
    let valid = true;
    if (!emailRef.current.value.trim()) {
      toast.error("Email Cannot Be Empty");
      setEmailError(true);
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      toast.error("Entered Email is Invalid");
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }
    if (!passwordRef.current.value.trim()) {
      setPasswordError(true);
      toast.error("Password Cannot Be Empty");
      valid = false;
    } else {
      setPasswordError(false);
    }
    return valid;
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
              parentRef={emailRef}
              error={emailError}
            />
          </div>
          <div className="pt-3 px-4">
            <CapstoneInput
              placeholder="Password"
              icon={<PasswordIcon />}
              type="password"
              parentRef={passwordRef}
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
