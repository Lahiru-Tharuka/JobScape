import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSun, FaMoon } from "react-icons/fa";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/js.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"} onClick={() => setShow(!show)}>
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/jobs"} onClick={() => setShow(!show)}>
                JOBS
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link to={"/dashboard"} onClick={() => setShow(!show)}>
                  DASHBOARD
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to={"/register"} onClick={() => setShow(!show)}>
                    REGISTER
                  </Link>
                </li>
                <li>
                  <Link to={"/login"} onClick={() => setShow(!show)}>
                    LOGIN
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <button
          className="theme_toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
