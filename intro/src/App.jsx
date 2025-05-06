import "./App.css";
import Button from "./Button";
import Card from "./Card";

function App() {
  return (
    <>
      <div>
        <h1 className='pinkcolor'>Vite</h1>
      </div>
      <p>Apprendre react</p>
      <Card
        titre='React'
        text='Apprendre le framework JS le plus utilisé'
        btnText='Ajouter'
      />
      <Card
        titre='Tailwind'
        text='Apprendre le framework CSS le plus utilisé'
        btnText='Supprimer'
      />
      <Card
        titre='Git'
        text='Besoin de sauvegarder votre code ?'
        btnText='Update'
      />
    </>
  );
}

export default App;
