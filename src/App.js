import { Routes, Route } from "react-router-dom";
import Mapa from './components/Mapa/Mapa';
import Alta from './components/Admin/alta/Alta';
import './App.css';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Mapa />} />
        <Route path="admin" element={<Alta />} />
    </Routes>
  )
}

export default App;
