import "./App.css";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import MenuLateral from "./components/MenuLateral";

function App() {
  return (
    <>
      <Header />
      <div className="div-grid-2">
        <MenuLateral />
        <Formulario />
      </div>
    </>
  );
}

export default App;
