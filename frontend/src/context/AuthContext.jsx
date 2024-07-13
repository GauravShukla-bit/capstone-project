import React from "react";

const AuthContext = React.createContext(null);

const AuthProvider = AuthContext.Provider;
export { AuthProvider };
export default AuthContext;
