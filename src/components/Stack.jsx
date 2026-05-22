import styles from './Stack.module.css'

const stack = [
  {
    label: 'Frontend',
    items: [
      { name: 'HTML', color: '#e34c26' },
      { name: 'CSS', color: '#264de4' },
      { name: 'JavaScript', color: '#f7df1e' },
      { name: 'React', color: '#61dafb' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js + Express', color: '#68a063' },
      { name: '.NET (C#)', color: '#9b59b6' },
      { name: 'Java (POO)', color: '#f89820' },
    ],
  },
  {
    label: 'DB',
    items: [
      { name: 'MongoDB', color: '#4db33d' },
      { name: 'MySQL', color: '#00618a' },
      { name: 'SQL Server', color: '#cc2927' },
    ],
  },
  {
    label: 'Other',
    items: [
      { name: 'Postman', color: '#ef5b25' },
      { name: 'VS Code', color: '#007acc' },
      { name: 'IntelliJ IDEA', color: '#fe315d' },
    ],
  },
  {
    label: 'Control Version',
    items: [
      { name: 'Git', color: '#f05032' },
      { name: 'GitHub', color: '#aaa' },
    ],
  },
  {
    label: 'SO',
    items: [
      { name: 'Linux – CachyOS', color: '#10b981' },
      { name: 'Linux – Pop_OS', color: '#48b9c7' },
    ],
  },
]

export default function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.icon}>{'{…}'}</span> Stack
      </h2>
      <div className={styles.grid}>
        {stack.map((group) => (
          <div key={group.label} className={styles.card}>
            <p className={styles.label}>{group.label}</p>
            <div className={styles.chips}>
              {group.items.map((item) => (
                <span key={item.name} className={styles.chip}>
                  <span className={styles.dot} style={{ background: item.color }} />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
