import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={Home} path='/'/>
      </Routes>
    </Router>
  );
}

export default App;
