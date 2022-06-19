import { Routes, Route } from "react-router-dom";
import Mapa from './components/Mapa/Mapa';
import Alta from './components/Admin/alta/Alta';
import Usuarios from "./components/Admin/listado/Usuarios";
import './App.css';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Mapa />} />
        <Route path="admin/alta" element={<Alta />} />
        <Route path="admin" element={<Usuarios />} />
    </Routes>
  )
}

export default App;
