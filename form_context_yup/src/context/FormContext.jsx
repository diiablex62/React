import { createContext, useContext, useState } from "react";

const FormContext = createContext();

// Fournit le contexte pour gérer les données du formulaire
export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  // Met à jour les données du formulaire
  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Récupère le username depuis les données du formulaire
  const getUsername = () => formData.username || "Utilisateur";

  return (
    <FormContext.Provider value={{ formData, updateFormData, getUsername }}>
      {children}
    </FormContext.Provider>
  );
};

// Permet d'accéder au contexte du formulaire
export const useFormContext = () => useContext(FormContext);
