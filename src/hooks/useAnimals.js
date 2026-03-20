import { useState, useEffect, useCallback, useMemo } from 'react'
import { animals as initialAnimals } from '../data/mockData'

export const useAnimals = () => {
  const [animals, setAnimals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1000))
        setAnimals(initialAnimals)
        setError(null)
      } catch (err) {
        setError('Failed to fetch animals')
      } finally {
        setLoading(false)
      }
    }

    fetchAnimals()
  }, [])

  const getAnimalById = useCallback((id) => {
    return animals.find(animal => animal.id === parseInt(id))
  }, [animals])

  const filteredAnimals = useMemo(() => {
    return animals.filter(animal => {
      const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           animal.species.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = filterCategory === 'all' || animal.category === filterCategory
      return matchesSearch && matchesCategory
    })
  }, [animals, searchTerm, filterCategory])

  const categories = useMemo(() => {
    return ['all', ...new Set(animals.map(a => a.category))]
  }, [animals])

  const stats = useMemo(() => ({
    total: animals.length,
    healthy: animals.filter(a => a.status === 'Healthy').length,
    endangered: animals.filter(a => a.conservationStatus === 'Endangered').length,
    categories: categories.length - 1
  }), [animals, categories])

  return {
    animals: filteredAnimals,
    allAnimals: animals,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    filterCategory,
    setFilterCategory,
    categories,
    getAnimalById,
    stats
  }
}