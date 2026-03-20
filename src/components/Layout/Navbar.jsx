import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import styles from './Navbar.module.css'

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/animals', label: 'Animals', icon: '🦁' },
  ]

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarContainer}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoIcon}>🦒</span>
            <span className={styles.logoText}>Zoo Management App</span>
          </Link>

          <button 
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className={styles.navActions}>
            <button 
              onClick={toggleTheme} 
              className={styles.themeToggle}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar