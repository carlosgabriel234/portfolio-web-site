'use client'

import Header from '@/components/header';
import styles from './projetos.module.css';
import Image from 'next/image';
import { useState } from 'react';

const projetos = [
  {
    id: 1,
    titulo: 'Sistema de Autenticação',
    imagem: '/project/foto projeto.png',
    descricao: 'Projeto com login seguro, JWT, bcrypt, usando banco de dados MongoDB',
    vercelUrl: 'https://auth-page-u2u2gqmee-carlosgabriel234s-projects.vercel.app',
    githubUrl: 'https://github.com/carlosgabriel234/Auth-page'
  },
  // Adicione mais projetos aqui
];

export default function Projetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  return (
    <div>
      <Header />

      

      <div className={styles.container}>
        <h1 className={styles.titulo}>Projetos em Desenvolvimento</h1>
        <p className={styles.subtitulo}>Clique em um projeto para mais informações.</p>

        <div className={styles.grid}>
          {projetos.map((proj) => (
            <div key={proj.id} className={styles.card} onClick={() => setProjetoSelecionado(proj)}>
              <Image src={proj.imagem} alt={proj.titulo} width={300} height={180} className={styles.imagem} />
              <h2>{proj.titulo}</h2>
            </div>
          ))}
        </div>
      </div>

      {projetoSelecionado && (
        <div className={styles.modalOverlay} onClick={() => setProjetoSelecionado(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{projetoSelecionado.titulo}</h2>
            <p>{projetoSelecionado.descricao}</p>
            <div className={styles.botoes}>
              <a href={projetoSelecionado.vercelUrl} target="_blank" rel="noopener noreferrer">🔗 Acessar Projeto</a>
              <a href={projetoSelecionado.githubUrl} target="_blank" rel="noopener noreferrer">📂 Ver no GitHu </a>
            </div>
            <button onClick={() => setProjetoSelecionado(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
