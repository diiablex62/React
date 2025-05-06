import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// Fournit le contexte pour gérer l'authentification de l'utilisateur
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // État utilisateur initialisé à null

  // Méthode pour connecter un utilisateur
  const login = (userName) => {
    setUser({ name: userName }); // Définit l'utilisateur avec un nom
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Permet d'accéder au contexte d'authentification dans les composants enfants
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
