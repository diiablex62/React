import Header from "./components/Header";
import Logement from "./components/Logement";
import Avis from "./components/Avis";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main className='main-content'>
        <Logement />
        <Avis />
      </main>
      <Footer />
    </div>
  );
}

export default App;
