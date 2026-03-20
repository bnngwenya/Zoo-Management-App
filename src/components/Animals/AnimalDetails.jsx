import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAnimals } from '../../hooks/useAnimals'
import LoadingSpinner from '../Common/LoadingSpinner'
import styles from './AnimalDetails.module.css'

const AnimalDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getAnimalById, loading } = useAnimals()
  const [imgError, setImgError] = useState(false)
  
  const animal = getAnimalById(id)

  if (loading) return <LoadingSpinner />
  
  if (!animal) {
    return (
      <div className={styles.notFound}>
        <h2>Animal not found</h2>
        <button className="btn" onClick={() => navigate('/animals')}>
          Back to Animals
        </button>
      </div>
    )
  }

// Helper function to get conservation status class
const getConservationStatusClass = (status) => {
  return status.toLowerCase().replace(/ /g, '-').replace(/critically-/g, 'critically-')
}

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Back to Animals
      </button>

      <div className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <img 
            src={imgError ? `https://ui-avatars.com/api/?name=${animal.name}&size=600&background=2e7d32&color=fff&bold=true&length=1` : animal.image} 
            alt={animal.name} 
            className={styles.heroImage}
            onError={() => setImgError(true)}
          />
          <div className={styles.heroOverlay}>
            <h1 className={styles.heroName}>{animal.name}</h1>
            <p className={styles.heroSpecies}>{animal.species}</p>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <div className={styles.badges}>
            <span className={`${styles.badge} ${styles[animal.status.toLowerCase()]}`}>
              {animal.status}
            </span>
            <span className={`${styles.badge} ${styles[getConservationStatusClass(animal.conservationStatus)]}`}>
              {animal.conservationStatus}
            </span>
            <span className={`${styles.badge} ${styles.category}`}>
              {animal.category}
            </span>
          </div>

          <div className={styles.description}>
            <h2>About {animal.name}</h2>
            <p>{animal.description}</p>
          </div>

          <div className={styles.funFact}>
            <h3>✨ Fun Fact</h3>
            <p>{animal.funFact}</p>
          </div>

          <div className={styles.quickFacts}>
            <h3>Quick Facts</h3>
            <div className={styles.factsGrid}>
              <div className={styles.factItem}>
                <span className={styles.factIcon}>📏</span>
                <div>
                  <span className={styles.factLabel}>Age</span>
                  <span className={styles.factValue}>{animal.age} years</span>
                </div>
              </div>
              <div className={styles.factItem}>
                <span className={styles.factIcon}>🥩</span>
                <div>
                  <span className={styles.factLabel}>Diet</span>
                  <span className={styles.factValue}>{animal.diet}</span>
                </div>
              </div>
              <div className={styles.factItem}>
                <span className={styles.factIcon}>📋</span>
                <div>
                  <span className={styles.factLabel}>Category</span>
                  <span className={styles.factValue}>{animal.category}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.additionalInfo}>
            <h3>Conservation Status</h3>
            <p className={styles.conservationInfo}>
              <span className={`${styles.statusBadge} ${styles[getConservationStatusClass(animal.conservationStatus)]}`}>
                {animal.conservationStatus}
              </span>
              {' '}species - Learn more about how you can help protect these amazing animals.
            </p>
          </div>
        </div>

        <div className={styles.sideInfo}>
          <div className={styles.visitCard}>
            <h3>Plan Your Visit</h3>
            <p>Come meet {animal.name} at the zoo!</p>
            <div className={styles.visitInfo}>
              <p><span>📍</span> Main Exhibit - {animal.category} Zone</p>
              <p><span>⏰</span> Daily: 10AM - 5PM</p>
              <p><span>🎫</span> Included with admission</p>
              <p><span>💰</span> Adult: $25 | Child: $15</p>
            </div>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate(`/schedule/${animal.id}`)}
              style={{ width: '100%' }}
            >
              Schedule Visit
            </button>
          </div>

          <div className={styles.shareCard}>
            <h3>Share {animal.name}</h3>
            <div className={styles.shareButtons}>
              <button className={styles.shareButton} aria-label="Share on Twitter">🐦</button>
              <button className={styles.shareButton} aria-label="Share on Facebook">📘</button>
              <button className={styles.shareButton} aria-label="Share on Instagram">📷</button>
              <button className={styles.shareButton} aria-label="Copy link">🔗</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimalDetails