import styles from './Navbar.module.css'
import { useState } from 'react'
import downloadCv from '../icons/download.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = ['Estudios', 'Stack', 'Experiencia', 'Proyectos']
  
  return (
    <>
      <header className={styles.header}>
        <a href="/CV_Tecnologo_Kevin_Romero.pdf" download className={styles.cvBtn}>
          <span><img src={downloadCv} alt="" style={{ width: '15px' }} /></span> Descargar CV
        </a>
        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <span/>
          <span/>
          <span/>
        </button>
      </header>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className={styles.link} onClick={() => setIsOpen(false)}>
            {l}
          </a>
        ))}
      </nav>
    </>
  )
}
