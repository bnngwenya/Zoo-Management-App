import React from 'react'
import styles from './StatsCard.module.css'

const StatsCard = ({ title, value, icon, color }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper} style={{ backgroundColor: `${color}20` }}>
        <span className={styles.icon} style={{ color }}>{icon}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  )
}

export default StatsCard