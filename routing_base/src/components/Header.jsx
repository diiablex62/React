import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { PiSunDimLight } from "react-icons/pi";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`h-[58px] px-2 py-4 bg-white shadow-2xs text-blue-600 flex flex-row items-center w-full dark:bg-gray-800 dark:text-white transition-all duration-300`}>
      <div className='grow flex items-center gap-4'>
        <NavLink to='/'>
          <strong>My App</strong>
        </NavLink>
      </div>
      <ul className='flex items-center gap-4'>
        <button
          onClick={toggleTheme}
          className='text-xl hover:text-blue-900 transition'>
          {theme === "light" ? <FaMoon /> : <PiSunDimLight />}
        </button>
        {user ? (
          <>
            <NavLink className='mr-4' to='#' onClick={logout}>
              <span>Déconnexion</span>
            </NavLink>
            <NavLink className='mr-4' to='/profile'>
              <span>Profile</span>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className='mr-4' to='/register'>
              <span>Inscription</span>
            </NavLink>
            <NavLink className='mr-4' to='/login'>
              <span>Connexion</span>
            </NavLink>
          </>
        )}
      </ul>
    </header>
  );
}
