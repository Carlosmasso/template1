import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutScreen from "./AboutScreen";
import MenuScreen from "./MenuScreen";
import ContactScreen from "./ContactScreen";

const HomeScreen = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default HomeScreen;
