import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/home";
import Posts from "./pages/posts";
import Assets from "./pages/assets";
import Uploads from "./pages/uploads";
import Payments from "./pages/payments";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <main className="bg-gray-50 w-full min-h-screen pt-14 md:pt-0 pb-16 md:pb-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/uploads" element={<Uploads />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
