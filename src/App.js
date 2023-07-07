import { Routes, Route } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./UserContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import BookingPage from "./pages/BookingPage";
import ConfirmBooking from "./pages/ConfirmBooking";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ConfirmOrder from "./pages/ConfirmOrder";
import About from "./pages/About";

function App() {
  return (
    <UserProvider>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/bookingpage" element={<BookingPage />} />
            <Route
              path="/bookingpage/confirmbooking"
              element={<ConfirmBooking />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/confirmorder" element={<ConfirmOrder />} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
