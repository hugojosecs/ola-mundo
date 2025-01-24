import Banner from "Componentes/Banner";
import { Outlet } from "react-router";

export default function PaginaPadrao (){
    return (
        <main>
            <Banner />
            {<Outlet />}
        </main>
    )
}