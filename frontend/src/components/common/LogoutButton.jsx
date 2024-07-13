import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    authContext.setUser(null);
    Cookie.remove("capstoneAuthCookie", { path: "/" });
    navigate("/");
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
