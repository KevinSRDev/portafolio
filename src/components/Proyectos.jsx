import styles from './Proyectos.module.css'

const data = [
  {
    titulo: 'Proyecto de Tecnólogo',
    desc: 'Usando MongoDB, React y Spring Boot',
    estado: 'Construyendo',
    estadoType: 'building',
    link: null,
  },
  {
    titulo: 'Portafolio web',
    desc: 'Sitio personal con React y CSS.',
    estado: 'Finalizado',
    estadoType: 'done',
    link: null,
  },
]

export default function Proyectos() {
  return (
    <section id="proyectos" className={styles.section}>
      <h2 className={styles.heading}>Proyectos</h2>
      <div className={styles.grid}>
        {data.map((p, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.titulo}>{p.titulo}</p>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.footer}>
              <span className={`${styles.badge} ${styles[p.estadoType]}`}>
                {p.estado}
              </span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className={styles.link}>
                  Ver →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
