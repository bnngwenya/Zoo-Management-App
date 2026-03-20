import React from 'react'
import styles from './Footer.module.css'
import { FaGithub, FaLinkedinIn, FaTwitter, FaGlobe } from 'react-icons/fa'



const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Zoo Management App</h3>
            <p className={styles.footerDescription}>
              A modern, full-featured zoo management application.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://github.com/bnngwenya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <span><FaGithub /></span>
              </a>
              <a href="https://www.linkedin.com/in/bhekiwe-n-ngwenya-73129b122/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span><FaLinkedinIn /></span>
              </a>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Technologies</h4>
            <ul className={styles.footerList}>
              <li>
                <span className={styles.techIcon}>⚛️</span>
                React 18
              </li>
              <li>
                <span className={styles.techIcon}>🔄</span>
                React Router 6
              </li>
              <li>
                <span className={styles.techIcon}>🎨</span>
                CSS Modules
              </li>
              <li>
                <span className={styles.techIcon}>📦</span>
                Vite
              </li>
              <li>
                <span className={styles.techIcon}>🔧</span>
                Context API
              </li>
              <li>
                <span className={styles.techIcon}>💾</span>
                LocalStorage
              </li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Key Features</h4>
            <ul className={styles.footerList}>
              <li>
                <span className={styles.featureIcon}>📊</span>
                Interactive Dashboard
              </li>
              <li>
                <span className={styles.featureIcon}>🦁</span>
                15+ Animal Profiles
              </li>
              <li>
                <span className={styles.featureIcon}>🎫</span>
                Smart Booking System
              </li>
              <li>
                <span className={styles.featureIcon}>🔍</span>
                Search & Filter
              </li>
              <li>
                <span className={styles.featureIcon}>🌓</span>
                Dark/Light Mode
              </li>
              <li>
                <span className={styles.featureIcon}>📱</span>
                Fully Responsive
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Highlights</h4>
            <ul className={styles.footerList}>
              <li>
                <span className={styles.highlightIcon}>⚡</span>
                Lazy Loading
              </li>
              <li>
                <span className={styles.highlightIcon}>🛡️</span>
                Error Boundaries
              </li>
              <li>
                <span className={styles.highlightIcon}>🎯</span>
                Custom Hooks
              </li>
              <li>
                <span className={styles.highlightIcon}>💫</span>
                Smooth Animations
              </li>
              <li>
                <span className={styles.highlightIcon}>📱</span>
                Mobile First
              </li>
              <li>
                <span className={styles.highlightIcon}>✨</span>
                Modern UI/UX
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>© {currentYear} Zoo Management App</p>
          <p className={styles.footerCredits}>
            Designed & Developed by <a href="https://github.com/bnngwenya" target="_blank" rel="noopener noreferrer">Bhekiwe Ngwenya</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer