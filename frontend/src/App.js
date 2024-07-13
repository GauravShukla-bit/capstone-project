import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import { AuthProvider } from "./context/AuthContext";
import { useState, useEffect } from "react";
import AuthService from "./service/AuthService";
import HomePage from "./components/pages/HomePage";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      AuthService.postUserAuth(
        (data) => {
          setUser(data);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }, []);
  return (
    <AuthProvider
      value={{
        user,
        setUser,
      }}
    >
      <Router>
        <Routes>
          <Route Component={HomePage} path="/home" />
          <Route Component={SignUpPage} path="/signUp" />
          <Route Component={LoginPage} path="/login" />
          <Route path="*" Component={() => <Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
