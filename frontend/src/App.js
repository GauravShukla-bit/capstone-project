import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={LoginPage} path="/login" />
        <Route path="*" Component={() => <Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
