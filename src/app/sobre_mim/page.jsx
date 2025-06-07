import Image from 'next/image'
import Link from 'next/link'
import styles from './sobre_mim.module.css'
import Header from '@/components/header'

export default function Formacoes() {
  return (
    <div style={{minHeight: '200vh' }}>

      <Header/>
   
      <div className={styles.sobreMim}>
        <h1 className={styles.tituloSobre}>Quem sou eu?</h1>
        <h3>
          Olá, me chamo Carlos Gabriel e sou um desenvolvedor FullStack apaixonado por transformar ideias em soluções digitais. Meu primeiro contato com a programação foi há cerca de três anos, quando criei uma simples calculadora usando HTML, CSS e JavaScript puro. Desde então, me encantei pelo desenvolvimento e sigo motivado pela oportunidade de impactar positivamente a vida das pessoas por meio da tecnologia.
          <br/>
          Tenho uma comunicação clara, gosto de colaborar em equipe, sou proativo e tenho facilidade em resolver problemas de forma prática e eficiente.
          
        </h3>
    
      </div>
     

      <div className={styles.formacoes}>
        <h1 className={styles.tituloFormacoes}>Cursos extracurriculares</h1>

        <div className={styles.certifados}>
          <Link href="/formacoes/certificado-js.pdf" target="_blank">
            <Image src="/imagens/certificado javascript.png" width={180} height={180} alt="Certificado JS" />
          </Link>

          <Link href="/formacoes/certificado-py.pdf" target="_blank">
            <Image src="/imagens/formacao em python.png" width={180} height={180} alt="Certificado Python" />
          </Link>

          <Link href="/formacoes/Curso frond end completo.pdf" target="_blank">
            <Image src="/imagens/curso front-end.png" width={180} height={180} alt="Certificado Front-End" />
          </Link>
        </div>
      </div>

      



    </div>
   
  )
}