
import Header from '@/components/header'
import styles from '@/app/page.module.css'
import Image from 'next/image';





export default function Home(){
  return (
    <div>

      <Header/> {/*Navegação do site*/}

      <main className={styles.principal}>

        <div className={styles.ladoEsquerdo}>

          <div className={styles.sobreMim}>
            <h3>Olá, Mundo!</h3>
            <h1><strong>Sou um Desenvolvedor Full-Stack</strong></h1>
            <h3>Bem-vindo ao meu portfólio</h3>
          </div>

          <div className={styles.acoes}> 

            <div className={styles.curiculo}>
              <a href="/formacoes/Curriculo0.pdf" target="_blank" rel="noopener noreferrer">
                <button>Currículo</button>
              </a>
            </div> 

            <div className={styles.redesSociais}>

                           
              <a href="https://github.com/carlosgabriel234?tab=repositories" target="_blank" rel="noopener noreferrer" >
                <Image src="/imagens/github.png" alt="Git-Hub" width={15} height={15} />
              </a>
              <a href="https://www.linkedin.com/in/carlos-gabriel-40053a25b/" target="_blank" rel="noopener noreferrer">
                <Image src="/imagens/linkedin.png" alt="Linkedin" width={15} height={15}/>         
             </a> 
      
            </div> 



          </div>

                 

        </div>

                      

                

          
                    

        <div className={styles.fotoEstudante}>
          <Image src="/imagens/nerd-animate.svg" alt="Foto nerd" width={359} height={350} />
        </div>

                    

                    


             
   
      </main>

    </div>




    
    

  );
};
