import Header from '@/components/header';
import styles from './projetos.module.css'

export default function Projetos(){
    return(
        <div>
            <Header/>

            <div className={styles.container}>
                <h1 className={styles.titulo}>Projetos em Desenvolvimento</h1>

                <p className={styles.subtitulo}>Em breve novos projetos estarão disponíveis! </p>

                <div className={styles.carregamento}></div>
            </div>

            
        </div>
    )
}