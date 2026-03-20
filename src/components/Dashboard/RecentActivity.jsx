import React from 'react'
import { recentActivities } from '../../data/mockData'
import styles from './RecentActivity.module.css'

const RecentActivity = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Activity</h2>
      <div className={styles.activityList}>
        {recentActivities.map(activity => (
          <div key={activity.id} className={styles.activityItem}>
            <div className={styles.activityIcon}>📋</div>
            <div className={styles.activityContent}>
              <p className={styles.activityAction}>{activity.action}</p>
              <p className={styles.activityDetails}>
                <span className={styles.animalName}>{activity.animal}</span>
                <span className={styles.userName}>by {activity.user}</span>
              </p>
              <span className={styles.activityTime}>{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity