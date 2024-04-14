import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">프로필</Link>
        </li>
        <li>
          <Link to="/TAA">휴가신청목록</Link>
        </li>
        <li>
          <Link to="/request">휴가신청</Link>
        </li>
        <li>
          <Link to="/main">테스트</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
