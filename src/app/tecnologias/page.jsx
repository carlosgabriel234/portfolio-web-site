import Header from '@/components/header';
import Image from 'next/image';
import styles from './tecnologia.module.css'
   
export default function Tecnologias(){
    return(
        <div>
            <Header/>

            <main className={styles.enblobe}>
                <div className={styles.linguagens}>
                    <h1>Especialidades em Desenvolvimentos</h1>
                    
                    <div className={styles.tecnologia}>
                        <Image src="/icones_tecnologias/html-1.svg" width={100} height={100} alt='Logo do Html'/>
                        <h3>HTML5</h3>
                    </div>

                    <div className={styles.tecnologia}>
                        <Image src="/icones_tecnologias/css-3.svg" width={100} height={100} alt='Logo do css3'/>
                        <h3>CSS3</h3>
                    </div>

                    <div className={styles.tecnologia}>
                        <Image src="/icones_tecnologias/javascript-r.svg" width={100} height={100} alt='Logo do JavaScript'/>
                        <h3>JavaScript</h3>
                    </div>

                    <div className={styles.tecnologia}>
                        <Image src="/icones_tecnologias/python-5.svg" width={100} height={100} alt='Logo do Python'/>
                        <h3>Python</h3>
                    </div>

                    <div className={styles.tecnologia}>
                        <Image src="/icones_tecnologias/REACT.svg" width={100} height={100} alt='Logo do React'/>
                        <h3>React.Js</h3>
                    </div>

                    <div className={styles.tecnologia}>
                        <Image src="/icones_tecnologias/next-js.svg" width={100} height={100} alt='Logo do Next.Js'/>
                        <h3>Next.Js</h3>
                    </div>

                    <div className={styles.tecnologia}>
                        <Image src="/icones_tecnologias/angular-icon-1.svg" width={100} height={100} alt='Logo do Angular'/>
                        <h3>Angular</h3>
                    </div>
                </div>

                <div className={styles.dados}>
                    <h1>Banco de Dados</h1>
        
                    <div className={styles.tecnologia}>
                        <Image src="/icones_tecnologias/mongodb-icon-2.svg" width={100} height={100} alt='Logo do MongoDB'/>
                        <h3>MongoDB</h3>
                    </div>

                   <div className={styles.tecnologia}>
                        <Image src="/icones_tecnologias/mysql-3.svg" width={100} height={100} alt='MySql'/>
                        <h3>MySql</h3>
                      </div>
                </div>
</main>

        </div>
    )
}