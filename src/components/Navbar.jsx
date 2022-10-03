import React from "react";
import './navbar.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    // Nav Bar
    <nav class="font navbar navbar-expand-sm sticky-top bg-light">
      <div class="container px-5">
        <a class="navbar-brand" href="/">MONEY SAVER</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/calendar">캘린더</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cardRec">카드 추천</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/save">절약</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/mypage">마이페이지</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">로그인</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;