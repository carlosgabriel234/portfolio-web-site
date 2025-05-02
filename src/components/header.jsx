"use client";
import { useState } from 'react';
import styles from '@/estilizacao/header.module.css'
import Image from 'next/image';
import Link from 'next/link';



export default function Header(){

    const [menuAberto, setMenuAberto] = useState(false);

    return(
    
        <header className={styles.menu}> 
            <nav className={styles.navegacao}>
                <div className={styles.icones_esquerdo}>
                    <Image src="/imagens/icons8-código-fonte-30.png" alt="icone do códico"
                    width={30}
                    height={30}
                    />
                    <h2>Carlos Gabriel</h2>

                </div >


                
                <button className={styles.menuToggle} onClick={() => setMenuAberto(!menuAberto)}>
                    ☰
                </button>


                <div className={`${styles.links} ${menuAberto ? styles.mostrarLinks : ''}`}>
                
                    <Link href="/">Home</Link>
                    <Link href="/sobre_mim">Sobre mim</Link>
                    <Link href="/tecnologias">Tecnologias</Link>
                    <Link href="/projetos">Projetos</Link>
                </div>

            </nav>
        </header>
    );
    
};