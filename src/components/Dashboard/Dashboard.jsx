import React from 'react'
import { useAnimals } from '../../hooks/useAnimals'
import StatsCard from './StatsCard'
import RecentActivity from './RecentActivity'
import LoadingSpinner from '../Common/LoadingSpinner'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  const { stats, loading, animals } = useAnimals()

  if (loading) {
    return <LoadingSpinner />
  }

  const statItems = [
    { title: 'Total Animals', value: stats.total, icon: '🦁', color: '#2e7d32' },
    { title: 'Healthy Animals', value: stats.healthy, icon: '❤️', color: '#388e3c' },
    { title: 'Endangered Species', value: stats.endangered, icon: '⚠️', color: '#ff8f00' },
    { title: 'Categories', value: stats.categories, icon: '📊', color: '#1976d2' }
  ]

  const featuredAnimals = animals.slice(0, 3)

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1 className={styles.title}>Zoo Dashboard</h1>
        <p className={styles.subtitle}>Welcome back! Here's what's happening at the zoo today.</p>
      </div>

      <div className={styles.statsGrid}>
        {statItems.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className={styles.contentGrid}>
        <RecentActivity />
        
        <div className={styles.featuredSection}>
          <h2 className={styles.sectionTitle}>Featured Animals</h2>
          <div className={styles.featuredGrid}>
            {featuredAnimals.map(animal => (
              <div key={animal.id} className={styles.featuredCard}>
                <img src={animal.image} alt={animal.name} className={styles.featuredImage} />
                <div className={styles.featuredInfo}>
                  <h3>{animal.name}</h3>
                  <p>{animal.species}</p>
                  <span className={`${styles.status} ${styles[animal.status.toLowerCase()]}`}>
                    {animal.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard