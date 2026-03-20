export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + '...'
}

export const getStatusColor = (status) => {
  const colors = {
    healthy: '#4caf50',
    recovering: '#ff9800',
    critical: '#f44336',
    deceased: '#9e9e9e'
  }
  return colors[status.toLowerCase()] || '#9e9e9e'
}