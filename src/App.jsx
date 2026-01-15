import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from "./screens/MenuScreen";
import ContactScreen from "./screens/ContactScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MenuScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="contact" element={<ContactScreen />} />
          <Route path="policy" element={<PrivacyPolicyScreen />} />
        </Route>
      </Routes>
      <CookieBanner />
    </Router>
  );
}

export default App;
