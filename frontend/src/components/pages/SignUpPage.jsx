import React, { useRef, useState } from "react";
import CapstoneInput from "../common/CapstoneInput";
import EmailIcon from "../../utils/icons/EmailIcon";
import PasswordIcon from "../../utils/icons/PasswordIcon";
import ProfileIcon from "../../utils/icons/ProfileIcon";

function SignUpPage() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordMatchedError, setPasswordMatchedError] = useState(false);
  const resetFormError = () => {
    setNameError(false);
    setEmailError(false);
    setPasswordMatchedError(false);
  };
  const validateSignupForm = () => {
    // Implement Form Validation
    return true;
  };
  const handleSignUpClick = (e) => {
    e.preventDefault();
    if (!validateSignupForm()) return;
    resetFormError();
  };
  return (
    <div className="flex h-3/4 w-full justify-center items-center">
      <div className="border-solid border-2 border-gray-700 rounded-xl p-8 w-1/4">
        <h1 className="text-center text-xl">Sign Up</h1>
        <div>
          <div className="pt-6 px-4">
            <CapstoneInput
              placeholder="Name"
              icon={<ProfileIcon />}
              type="text"
              ref={nameRef}
              error={nameError}
            />
          </div>
          <div className="pt-3 px-4">
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
              error={passwordMatchedError}
            />
          </div>
          <div className="pt-3 px-4">
            <CapstoneInput
              placeholder="Repeat Password"
              icon={<PasswordIcon />}
              type="password"
              ref={repeatPasswordRef}
              error={passwordMatchedError}
            />
          </div>
          <div className="pt-6 px-4">
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

export default SignUpPage;
