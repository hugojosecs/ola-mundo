import BotaoPrincipal from "Componentes/BotaoPrincipal";
import styles from "./NaoEncontrada.module.css"
import error404 from "assets/erro_404.png"
import { useNavigate } from "react-router";

const NaoEncontrada = () => {
    const navegar = useNavigate()
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não encontrada</h1>

                <p className={styles.paragrafo}>Errou de página! Aguarde alguns instantes e recarregue a página, ou volte para a página inicial </p>
                <div 
                className={styles.botaoContainer}
                onClick={() => navegar(-1)}
                >
                    <BotaoPrincipal tamanho={"lg"}>
                        Voltar
                    </BotaoPrincipal>

                </div>
                <img
                    className={styles.imagemCachorro}
                    src={error404}
                    alt="Cachorro de óculos e vestido como humano"
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}

export default NaoEncontrada;