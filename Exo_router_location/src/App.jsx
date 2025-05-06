import React, { useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import { Outlet } from "react-router-dom";
import { AppContext } from "./context/AppContextInstance";

function App() {
  const { isLoggedIn, mode } = useContext(AppContext);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        mode ? "bg-gray-100" : "bg-gray-800"
      } `}>
      <Header />
      <main className='flex-grow'>
        {isLoggedIn ? (
          <>
            <Outlet />
            <Reviews />
          </>
        ) : (
          <div
            className={`text-center mt-10 ${
              mode ? "text-black" : "text-white"
            }`}>
            <p>Il faut être connecté pour accéder aux logements</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
