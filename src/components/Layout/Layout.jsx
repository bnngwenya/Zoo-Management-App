import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout