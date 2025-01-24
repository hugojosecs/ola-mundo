import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./paginas/Inicio"
import Sobremim from "./paginas/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "paginas/Post";
import {"v4" as uuidv4} from "uuid"
import NaoEncontrada from "paginas/NaoEncontrada";

function AppRoutes() {
  const menu = [
    {
      id : uuidv4(),
      value : "Inicio" , 
      to : "/" },
    {
      id : uuidv4(),
      value : "Sobremim",
      to : "/sobremim" },
    // {
    //   id : uuidv4(),
    //   value : "Posts",
    //   to : "/posts" },
  ]
  return (
    <BrowserRouter>
      <Menu itensMenu={menu}/>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<Sobremim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>

  );
}

export default AppRoutes;
