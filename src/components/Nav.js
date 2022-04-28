import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMenuOpen } from "react-icons/md";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-icon" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <MdMenuOpen /> : <GiHamburgerMenu />}
      </div>

      <ul className={`nav-list ${navOpen ? "nav-open" : ""}`}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/dashboard/users"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/user/create"
          >
            Add User
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
