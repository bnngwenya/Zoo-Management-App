import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = ({ searchTerm, onSearchChange, placeholder = 'Search animals...' }) => {
  return (
    <div className={styles.searchContainer}>
      <span className={styles.searchIcon}>🔍</span>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {searchTerm && (
        <button 
          className={styles.clearButton}
          onClick={() => onSearchChange('')}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar