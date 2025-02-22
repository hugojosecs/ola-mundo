import styles from "./Rodape.module.css"
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg"


const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            <p>Desenvolvido por Hugo como projeto da Escola Alura</p>
        </footer>
    );
}

export default Rodape;