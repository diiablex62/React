import React from "react";
import { useAuthContext } from "../context/AuthProvider";

export default function Header() {
  const { user, login } = useAuthContext(); // Récupération de l'utilisateur et méthode login

  const logout = () => {
    login(null); // Réinitialise l'utilisateur à null
  };

  return (
    <header
      className={`h-[58px] px-2 py-4 bg-white shadow-2xs text-blue-600 flex flex-row items-center w-full`}>
      <div className='grow'>
        <a href='#'>
          <strong>My App</strong>
        </a>
      </div>
      <ul className='flex items-center'>
        {user ? ( // Si l'utilisateur est connecté, afficher "Bienvenue" et le bouton Logout
          <>
            <li className='mr-4'>
              <span>Bienvenue, {user.name}</span>
            </li>
            <button
              onClick={logout}
              className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>
              Logout
            </button>
          </>
        ) : (
          // Sinon, afficher les liens "Register" et "Login"
          <>
            <a className='mr-4' href='#'>
              <span>Register</span>
            </a>
            <a className='mr-4' href='#'>
              <span>Login</span>
            </a>
          </>
        )}
      </ul>
    </header>
  );
}
