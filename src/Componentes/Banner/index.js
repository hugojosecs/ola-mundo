import styles from './Banner.module.css';
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.png"

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1>Olá, Mundo</h1>
                <p className={styles.paragrafo}>
                Bem vindo ao meu site
            </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden="true"
                    alt="Banner"/>
                <img 
                className={styles.minhaFoto} 
                src={minhaFoto} 
                alt='Foto do Hugo Sorrindo'
                />
            </div>
           
        </div>
    )
}

export default Banner;