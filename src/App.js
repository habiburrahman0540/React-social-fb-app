
import HomePage from "./Pages/Home/HomePage"
import { Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./Pages/Profile/ProfilePage"
function App() {
  return (
    <div >
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        
      </Routes>
    </div>
  );
}

export default App;
