import React from "react";
import floral from "./assets/flowers.png";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const weddingDate = new Date("2026-10-24T00:00:00");
  const now = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = Math.ceil((weddingDate.getTime() - now.getTime()) / msPerDay);
  const daysText = diff > 0 ? `${diff} DAYS TO GO!` : "IT'S THE BIG DAY!";

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    "nav-link" + (isActive ? " nav-link-active" : "");

  return (
    <header className="site-header">
      {/* Floral image at top (drop flowers.png into public/) */}
      <div className="floral-wrap">
        <img
          src={floral}
          alt="Floral header"
          className="floral-img"
          sizes="100vw"
        />
      </div>

      {/* Names + date + countdown */}
      <div className="header-text">
        <h1 className="couple-name">LEAH &amp; JOEL</h1>
        <p className="header-subline">OCTOBER 24, 2026 • ADEL, IOWA</p>
        <p className="header-subline days">{daysText}</p>
      </div>

      {/* Navigation */}
      <nav className="main-nav">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/our-story" className={linkClass}>
          Our Story
        </NavLink>
        <NavLink to="/info" className={linkClass}>
          Info
        </NavLink>
        <NavLink to="/registry" className={linkClass}>
          Registry
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;