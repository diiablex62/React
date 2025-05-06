import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="h-[58px] px-2 py-4 bg-white dark:bg-gray-800 shadow-2xs text-blue-600 dark:text-blue-300 flex items-center justify-between w-full">
      <NavLink to="/" className="font-bold">
        My App
      </NavLink>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-xl hover:text-blue-400 transition"
          title={`Passer en mode ${theme === "dark" ? "clair" : "sombre"}`}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
        <nav className="flex gap-4">
          {user ? (
            <>
              <a href="#" onClick={logout}>
                Déconnexion
              </a>
              <NavLink to="/profile">Profile</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/register">Inscription</NavLink>
              <NavLink to="/login">Connexion</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
