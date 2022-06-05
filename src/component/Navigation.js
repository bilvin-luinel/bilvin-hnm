import React, { useState } from 'react'
import { Container, Navbar, Nav, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Navigation = ({ authenticate, setAuthenticate }) => {

  const [width, setWidth] = useState(0);

  const navigate = useNavigate();

  const menuList = ["남성", "여성", "아동", "H&M", "HOT", "NEW", "Sale"]

  const goToMain = () => {
    navigate("/");
  }
  const goToLogin = () => {
    if (authenticate) {
      setAuthenticate(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  }
  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  }

  return (
    <div>

      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>

      <div className="top">
        <div className="menu-text" onClick={() => setWidth(250)}>메뉴</div>
        <div className="login-text" onClick={goToLogin}>{authenticate ? "로그아웃" : "로그인"}</div>
      </div>
      <div className="logo-area"><img className="logo" onClick={goToMain} src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg" /></div>
      <ul className="menu-list">
        {menuList.map((item) => (<li>{item}</li>))}
      </ul>
      <div className="search"><input className="search-box" type="text" placeholder='제품 검색' onKeyPress={(e) => search(e)} /></div>


    </div>
  )
}

export default Navigation;