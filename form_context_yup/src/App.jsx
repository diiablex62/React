import Header from "./components/Header";
import Register from "./pages/forms/Register";
import { FormContextProvider } from "./context/FormContext";
import { useAuthContext } from "./context/AuthProvider";

function App() {
  const { user } = useAuthContext(); // Utiliser useAuthContext pour récupérer l'utilisateur

  return (
    <FormContextProvider>
      <div className='min-h-screen flex flex-col bg-gray-100 w-full'>
        <Header />
        <div className='flex flex-col flex-1 justify-center items-center w-full'>
          {/* Afficher Skills si l'utilisateur est connecté, sinon Register */}
          {user ? <Skills /> : <Register />}
        </div>
      </div>
    </FormContextProvider>
  );
}

export default App;
