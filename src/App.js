
import HomePage from "./Pages/Home/HomePage"
import { Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./Pages/Profile/ProfilePage"
import LoginPage from "./Pages/Access/Login"
import RegisterPage from "./Pages/Access/Register"
function App() {
  return (
    <div >
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
