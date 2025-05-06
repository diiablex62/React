import "./App.css";
import Colors from "./Colors";
import Size from "./Size";
import Spacing from "./Spacing";

function App() {
  return (
    <>
      <h1 className='text-4xl text-center text-blue-500'>Tailwind CSS</h1>
      <p className='text-center text-lg text-gray-500'>
        A utility-first CSS framework for rapidly building custom designs.
      </p>
      <br></br>

      <Size />
      <Spacing />
      <Colors />
    </>
  );
}

export default App;
