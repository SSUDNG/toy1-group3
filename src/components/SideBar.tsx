import React from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  SpaceDashboardOutlined,
  CalendarMonthOutlined,
  EditCalendarOutlined,
  MarkChatUnreadOutlined,
  AccountCircleOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

import styles from "./SideBar.module.css";

const menuItems = [
  { path: "/", icon: <SpaceDashboardOutlined />, label: "Dashboard" },
  { path: "/TAA", icon: <CalendarMonthOutlined />, label: "Vacation" },
  { path: "/request", icon: <EditCalendarOutlined />, label: "Request" },
  { path: "/news", icon: <MarkChatUnreadOutlined />, label: "News" },
  { path: "/profile", icon: <AccountCircleOutlined />, label: "Profile" },
];

interface SideProps {
  handleSignOut: () => void;
}

const SideBar = ({ handleSignOut }: SideProps) => {
  const location = useLocation();

  return (
    <div className={styles.sideBar}>
      <ul>
        {menuItems.map((menuItem) => (
          <li
            key={menuItem.label}
            className={location.pathname === menuItem.path ? styles.on : ""}
          >
            <Link to={menuItem.path}>
              {menuItem.icon}
              <span>{menuItem.label}</span>
            </Link>
          </li>
        ))}
        <li>
          <button
            type="button"
            className={styles.logoutBtn}
            onClick={handleSignOut}
          >
            <LogoutOutlined />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
