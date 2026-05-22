import styles from './Estudios.module.css'

const data = [
  {
    titulo: 'Tecnólogo en Análisis y Desarrollo de Software',
    inst: 'SENA',
    fecha: '2025 – 2027',
    estado: 'En curso …',
    estadoColor: 'amber',
  },
  {
    titulo: 'Técnico en Programación de Software',
    inst: 'SENA',
    fecha: '2024',
    estado: null,
    estadoColor: 'green',
  },
  {
    titulo: 'Bachiller Académico con Profundización en Informática',
    inst: 'Institución Educativa San Isidro – Saboyá',
    fecha: '2022',
    estado: null,
    estadoColor: 'green',
  },
]

export default function Estudios() {
  return (
    <section id="estudios" className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.icon}>⌨</span> Estudios
      </h2>
      <div className={styles.grid}>
        {data.map((d, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.titulo}>{d.titulo}</p>
            <p className={styles.inst} style={{color: d.estadoColor==='amber'?'var(--green)':'#10b981'}}>{d.inst}</p>
            <p className={styles.fecha}>{d.fecha}</p>
            {d.estado && (
              <span className={styles.badge}>{d.estado}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
