import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./paginas/Inicio"
import Sobremim from "./paginas/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<Sobremim />} />
        <Route path="*" element={<h1>Erro 404 - Página não encontrada</h1>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
    
  );
}

export default AppRoutes;
