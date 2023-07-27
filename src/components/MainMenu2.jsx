import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function MainMenu({ route, setRoute }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  let navigate = useNavigate();
  const routeChange = (e) => {
    let path = e;
    setRoute(path);
    navigate(path);
  };

  return (
    <div className="mainMenu">
      <div className="mainMenuMenu">
        <div
          className={
            route === "Players"
              ? "mainMenuMenuItem selected"
              : "mainMenuMenuItem"
          }
          onClick={() => routeChange("Players")}
          onMouseEnter={toggleMenu}
          onMouseLeave={toggleMenu}
        >
          Players
          {isOpen === true && (
            <div className="midMenu">
              <ul>
                <li>Add Player</li>
              </ul>
            </div>
          )}
        </div>

        <div
          className={
            route === "Scores"
              ? "mainMenuMenuItem selected"
              : "mainMenuMenuItem"
          }
          onClick={() => routeChange("Scores")}
          onMouseEnter={toggleMenu}
          onMouseLeave={toggleMenu}
        >
          Scores
          {isOpen === true && (
            <div className="midMenu">
              <ul>
                <li>Add Player</li>
              </ul>
            </div>
          )}
        </div>
        <div
          className={
            route === "Schedule"
              ? "mainMenuMenuItem selected"
              : "mainMenuMenuItem"
          }
          onClick={() => routeChange("Schedule")}
          onMouseEnter={toggleMenu}
          onMouseLeave={toggleMenu}
        >
          Schedule
          {isOpen === true && (
            <div className="midMenu">
              <ul>
                <li>Add Player</li>
              </ul>
            </div>
          )}
        </div>
        <div
          className={
            route === "Admin" ? "mainMenuMenuItem selected" : "mainMenuMenuItem"
          }
          onClick={() => routeChange("Admin")}
          onMouseEnter={toggleMenu}
          onMouseLeave={toggleMenu}
        >
          Admin
          {isOpen === true && (
            <div className="midMenu">
              <ul>
                <li>Add Player</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
