import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import DoctorsList from './pages/DoctorsList';
import Ai from './components/Ai/Ai';
import Chatbot from './components/ChatBot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/doctors" element={<DoctorsList />} />
          <Route path="/aiTool" element={<Ai />} />
        </Routes>
        <Chatbot/>
      </div>
    </Router>
  );
}

export default App;