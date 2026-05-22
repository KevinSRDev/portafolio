import styles from './Experiencia.module.css'

const data = [
  {
    rol: 'Practicante SENA',
    periodo: 'Julio 2024 – Diciembre 2024',
    empresa: 'Dirección General – SENA',
    tareas: [
      'Creación de Diseños para la Web SENA (HTML, CSS y JavaScript)',
      'Creación de micrositios para la Web',
      'Colaboré con equipos de diseño gráfico para el desarrollo de actividades propuestas.',
    ],
  },
]

export default function Experiencia() {
  return (
    <section id="experiencia" className={styles.section}>
      <h2 className={styles.heading}>Experiencia</h2>
      <div className={styles.list}>
        {data.map((exp, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.rol}>{exp.rol}</p>
            <p className={styles.periodo}>{exp.periodo}</p>
            <p className={styles.empresa}>{exp.empresa}</p>
            <ul className={styles.tareas}>
              {exp.tareas.map((t, j) => (
                <li key={j}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
