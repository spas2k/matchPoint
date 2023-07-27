import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "./Logo";
export default function MobileMenu({ route, setRoute }) {
  const mobile = true;
  let navigate = useNavigate();
  const routeChange = (e) => {
    let path = e;
    setRoute(path);
    navigate(path);
    toggleMenu();
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="mobileMenu">
      <Link to="/" className="logo">
        <Logo mobile={mobile}/>
      </Link>
      <AiOutlineMenu
        className="mobileMenuMenuButton"
        size={24}
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <div className="mobileMenuDrop">
          <ul>
            <li onClick={() => routeChange("Players")}>Players</li>
            <li className="liIndent" onClick={() => routeChange("AddPlayer")}>
              Add Player
            </li>
            <li onClick={() => routeChange("Scores")}>Scores</li>
            <li className="liIndent" onClick={() => routeChange("AddScore")}>
              Add Score
            </li>
            <li onClick={() => routeChange("Schedule")}>Schedule</li>
            <li onClick={() => routeChange("Admin")}>Admin</li>
            <li onClick={() => routeChange("Settings")}>Settings</li>
          </ul>
        </div>
      )}
    </div>
  );
}
