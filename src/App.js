import React from "react";
import "./App.css";
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Index from './pages/Index'
import Calendar from './pages/Calendar'
import CardRec from './pages/CardRec'
import Save from './pages/Save'
import MyPage from './pages/MyPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Index />} exact />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/cardRec" element={<CardRec />} />
        <Route path="/save" element={<Save />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;