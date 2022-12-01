import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Amanda!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto da Amanda sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Oi, tudo bem? Eu sou Dev Front-end e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
            Minha história com programação começou na adolescência com a plataforma Tumblr, onde era utilizado o HTML para estilizar as páginas
            </p>
            <p className={styles.paragrafo}>
            Após terminar o ensino médio trilhei outros caminhos academicos e fiz 2 periodos de Admistração.
            </p>
            <p className={styles.paragrafo}>
            Após a chegada do covid, mudei de cidade e iniciei outro curso na área de Admistração, Gestão de Recursos Humanos.
            </p>
            <p className={styles.paragrafo}>
            Mas percebi que havia uma vontade de vivenciar a programação. Sendo assim, entrei no curso de Analise e Desenvolvimento de Sistemas e passei a me dedicar meus estudos ao Front-End.

            </p>
        </PostModelo>
    )
}