import React, { useRef, useState } from "react";
import CapstoneInput from "../common/CapstoneInput";
import EmailIcon from "../../utils/icons/EmailIcon";
import PasswordIcon from "../../utils/icons/PasswordIcon";
import ProfileIcon from "../../utils/icons/ProfileIcon";
import { toast } from "react-toastify";
import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "../../utils/Constants";

function SignUpPage() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchedError, setPasswordMatchedError] = useState(false);
  const resetFormError = () => {
    setNameError(false);
    setEmailError(false);
    setPasswordMatchedError(false);
    setPasswordError(false);
  };
  const validateSignupForm = () => {
    // Implement Form Validation
    let valid = true;
    if (!nameRef.current.value.trim()) {
      toast.error("Name Cannot Be Empty");
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }
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
    if (passwordRef.current.value.length < MIN_PASSWORD_LENGTH) {
      toast.error(`Minimum Password Length is ${MIN_PASSWORD_LENGTH}`);
      setPasswordError(true);
      valid = false;
    } else if (passwordRef.current.value.length > MAX_PASSWORD_LENGTH) {
      toast.error(`Maximum Password Length is ${MAX_PASSWORD_LENGTH}`);
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }
    if (passwordRef.current.value !== repeatPasswordRef.current.value) {
      toast.error("Passwords Does't match");
      setPasswordMatchedError(true);
      valid = false;
    } else {
      setPasswordMatchedError(false);
    }
    return valid;
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
              parentRef={nameRef}
              error={nameError}
            />
          </div>
          <div className="pt-3 px-4">
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
              error={passwordMatchedError || passwordError}
            />
          </div>
          <div className="pt-3 px-4">
            <CapstoneInput
              placeholder="Repeat Password"
              icon={<PasswordIcon />}
              type="password"
              parentRef={repeatPasswordRef}
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
