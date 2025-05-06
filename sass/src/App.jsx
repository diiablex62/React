import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.module.scss";


function App() {
  return (
    <>
      <div className={`${styles.appContainer} d-flex flex-column`}>
        <Header />
        <Content />
        <Footer />

      </div>
    </>
  );
}

export default App;
