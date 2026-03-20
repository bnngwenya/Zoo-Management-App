import React from 'react'
import styles from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={styles.text}>Loading amazing animals...</p>
    </div>
  )
}

export default LoadingSpinner