import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import RecentlyPage from './Pages/RecentlyPage/RecentlyPage';
import ServicesPage from "./Pages/Services/ServicesPage";
import BrandsPage from "./Pages/Brands/BrandsPage";
import AboutPage from "./Pages/About/AboutPage";
import Contact from "./Pages/Contact/Contact";
import Search from "./Pages/Search/Search";
import Details from "./Pages/Details/Details";
import BookNow from "./Pages/BookNow/BookNow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/aboutus" element={<AboutPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contactus" element={<Contact/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/recentlyAdded" element={<RecentlyPage/>} />
        <Route path="/brands" element={<BrandsPage/>} />
        <Route path="/recentlyAdded/detailcar" element={<Details/>} />
        <Route path="/recentlyAdded/detailcar/booknow" element={<BookNow/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;