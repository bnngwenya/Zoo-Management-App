import React from 'react'
import { useAnimals } from '../../hooks/useAnimals'
import AnimalCard from './AnimalCard'
import SearchBar from '../Common/SearchBar'
import LoadingSpinner from '../Common/LoadingSpinner'
import styles from './AnimalList.module.css'

const AnimalList = () => {
  const { 
    animals, 
    loading, 
    error, 
    searchTerm, 
    setSearchTerm, 
    filterCategory, 
    setFilterCategory,
    categories 
  } = useAnimals()

  if (loading) return <LoadingSpinner />
  if (error) return <div className="text-center error">{error}</div>

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Amazing Animals</h1>
        <p className={styles.subtitle}>Meet the wonderful creatures that call our zoo home</p>
      </div>

      <div className={styles.filters}>
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm}
          placeholder="Search by name or species..."
        />
        
        <div className={styles.categoryFilter}>
          <label htmlFor="category" className={styles.filterLabel}>Filter by:</label>
          <select
            id="category"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className={styles.filterSelect}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {animals.length === 0 ? (
        <div className={styles.noResults}>
          <p>No animals found matching your criteria</p>
          <button 
            className="btn btn-outline"
            onClick={() => {
              setSearchTerm('')
              setFilterCategory('all')
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className={styles.animalGrid}>
          {animals.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
    </div>
  )
}

export default AnimalList