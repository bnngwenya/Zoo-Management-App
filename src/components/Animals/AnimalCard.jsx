import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AnimalCard.module.css'

const AnimalCard = ({ animal }) => {
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'healthy': return styles.healthy
      case 'recovering': return styles.recovering
      default: return ''
    }
  }

  return (
    <Link to={`/animals/${animal.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={animal.image} alt={animal.name} className={styles.image} />
          <span className={`${styles.status} ${getStatusColor(animal.status)}`}>
            {animal.status}
          </span>
        </div>
        
        <div className={styles.content}>
          <h3 className={styles.name}>{animal.name}</h3>
          <p className={styles.species}>{animal.species}</p>
          
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>📏</span>
              <span>{animal.age} years</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>🌍</span>
              <span>{animal.habitat}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>🥩</span>
              <span>{animal.diet}</span>
            </div>
          </div>
          
          <div className={styles.conservation}>
            <span className={`${styles.conservationBadge} ${styles[animal.conservationStatus.toLowerCase().replace(' ', '-')]}`}>
              {animal.conservationStatus}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AnimalCard