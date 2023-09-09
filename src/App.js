import "./App.css";
import ListaUsuarios from "./listaUsuarios";
import EditarUsuario from "./editarUsuario";
import AgregarUsuarios from "./agregarUsuarios";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Primera app</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuarios />} exact />
          <Route path="/agregarUsuario" element={<AgregarUsuarios />} exact />
          <Route path="/editarUsario" element={<EditarUsuario />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
