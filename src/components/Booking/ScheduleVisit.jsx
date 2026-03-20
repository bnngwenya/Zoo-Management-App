import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { timeSlots, visitDurations, visitPurposes } from '../../data/mockData'
import { useAnimals } from '../../hooks/useAnimals'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import LoadingSpinner from '../Common/LoadingSpinner'
import styles from './ScheduleVisit.module.css'

const ScheduleVisit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getAnimalById, loading: animalsLoading } = useAnimals()
  const [pageLoading, setPageLoading] = useState(true)
  const [animal, setAnimal] = useState(null)
  
  const [bookings, setBookings] = useLocalStorage('zoo_bookings', [])
  const [formData, setFormData] = useState({
    animalId: id,
    animalName: '',
    visitorName: '',
    visitorEmail: '',
    visitorPhone: '',
    visitDate: '',
    visitTime: '',
    duration: 60,
    purpose: 'General Visit',
    numberOfGuests: 2,
    specialRequests: '',
    agreedToTerms: false
  })
  
  const [currentStep, setCurrentStep] = useState(1)
  const [availableTimeSlots, setAvailableTimeSlots] = useState(timeSlots)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [bookingId, setBookingId] = useState(null)

  // Load animal data
  useEffect(() => {
    const loadAnimal = async () => {
      setPageLoading(true)
      // Small delay to ensure data is loaded
      setTimeout(() => {
        const animalData = getAnimalById(id)
        if (animalData) {
          setAnimal(animalData)
          setFormData(prev => ({
            ...prev,
            animalName: animalData.name
          }))
        }
        setPageLoading(false)
      }, 100)
    }
    
    loadAnimal()
  }, [id, getAnimalById])

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0]
  
  // Get date 3 months from now for max date
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)
  const maxDateStr = maxDate.toISOString().split('T')[0]

  // Update available time slots based on existing bookings
  useEffect(() => {
    if (formData.visitDate && id) {
      const bookedSlots = bookings
        .filter(b => b.visitDate === formData.visitDate && b.animalId === id)
        .map(b => b.visitTime)
      
      setAvailableTimeSlots(
        timeSlots.filter(slot => !bookedSlots.includes(slot))
      )
    }
  }, [formData.visitDate, bookings, id])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Generate unique booking ID
    const newBookingId = 'BK' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase()
    
    const newBooking = {
      ...formData,
      id: newBookingId,
      bookingDate: new Date().toISOString(),
      status: 'confirmed'
    }
    
    setBookings([...bookings, newBooking])
    setBookingId(newBookingId)
    setBookingConfirmed(true)
    
    // Scroll to top to show confirmation
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3))
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  // Show loading spinner while data is being fetched
  if (pageLoading || animalsLoading) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner />
        <p className={styles.loadingText}>Loading booking information...</p>
      </div>
    )
  }

 
  if (!animal) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundIcon}>🔍</div>
        <h2>Animal Not Found</h2>
        <p>We couldn't find the animal you're looking for.</p>
        <button className="btn" onClick={() => navigate('/animals')}>
          Browse All Animals
        </button>
      </div>
    )
  }

  if (bookingConfirmed) {
    return (
      <div className={styles.confirmationContainer}>
        <div className={styles.confirmationCard}>
          <div className={styles.successIcon}>✓</div>
          <h1 className={styles.confirmationTitle}>Booking Confirmed!</h1>
          <p className={styles.confirmationMessage}>
            Your visit to see {animal.name} has been scheduled successfully.
          </p>
          
          <div className={styles.bookingDetails}>
            <h3>Booking Details</h3>
            <p><strong>Booking ID:</strong> {bookingId}</p>
            <p><strong>Animal:</strong> {animal.name} the {animal.species}</p>
            <p><strong>Date:</strong> {new Date(formData.visitDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p><strong>Time:</strong> {formData.visitTime}</p>
            <p><strong>Duration:</strong> {formData.duration} minutes</p>
            <p><strong>Guests:</strong> {formData.numberOfGuests}</p>
            <p><strong>Visitor:</strong> {formData.visitorName}</p>
          </div>
          
          <div className={styles.confirmationActions}>
            <button className="btn" onClick={() => navigate('/animals')}>
              Browse More Animals
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Back to Animal
      </button>

      <div className={styles.header}>
        <h1 className={styles.title}>Schedule Your Visit</h1>
        <p className={styles.subtitle}>Book a time to meet {animal.name} the {animal.species}</p>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div className={`${styles.progressStep} ${currentStep >= 1 ? styles.active : ''}`}>
          <span className={styles.stepNumber}>1</span>
          <span className={styles.stepLabel}>Visitor Info</span>
        </div>
        <div className={`${styles.progressStep} ${currentStep >= 2 ? styles.active : ''}`}>
          <span className={styles.stepNumber}>2</span>
          <span className={styles.stepLabel}>Schedule</span>
        </div>
        <div className={`${styles.progressStep} ${currentStep >= 3 ? styles.active : ''}`}>
          <span className={styles.stepNumber}>3</span>
          <span className={styles.stepLabel}>Confirm</span>
        </div>
      </div>

      <div className={styles.bookingCard}>
        <div className={styles.animalPreview}>
          <img 
            src={animal.image} 
            alt={animal.name} 
            className={styles.previewImage}
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${animal.name}&size=80&background=2e7d32&color=fff&bold=true&length=1`
            }}
          />
          <div className={styles.previewInfo}>
            <h3>{animal.name}</h3>
            <p>{animal.species}</p>
            <span className={`${styles.status} ${styles[animal.status.toLowerCase()]}`}>
              {animal.status}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.bookingForm}>
          {currentStep === 1 && (
            <div className={styles.formStep}>
              <h2 className={styles.stepTitle}>Visitor Information</h2>
              
              <div className={styles.formGroup}>
                <label htmlFor="visitorName">Full Name *</label>
                <input
                  type="text"
                  id="visitorName"
                  name="visitorName"
                  value={formData.visitorName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="visitorEmail">Email Address *</label>
                <input
                  type="email"
                  id="visitorEmail"
                  name="visitorEmail"
                  value={formData.visitorEmail}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="visitorPhone">Phone Number *</label>
                <input
                  type="tel"
                  id="visitorPhone"
                  name="visitorPhone"
                  value={formData.visitorPhone}
                  onChange={handleInputChange}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="numberOfGuests">Number of Guests *</label>
                <input
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  min="1"
                  max="10"
                  value={formData.numberOfGuests}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formActions}>
                <button type="button" className="btn" onClick={nextStep}>
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className={styles.formStep}>
              <h2 className={styles.stepTitle}>Select Date & Time</h2>
              
              <div className={styles.formGroup}>
                <label htmlFor="visitDate">Visit Date *</label>
                <input
                  type="date"
                  id="visitDate"
                  name="visitDate"
                  min={today}
                  max={maxDateStr}
                  value={formData.visitDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {formData.visitDate && (
                <div className={styles.formGroup}>
                  <label>Available Time Slots *</label>
                  <div className={styles.timeSlots}>
                    {availableTimeSlots.length > 0 ? (
                      availableTimeSlots.map(slot => (
                        <button
                          key={slot}
                          type="button"
                          className={`${styles.timeSlot} ${formData.visitTime === slot ? styles.selected : ''}`}
                          onClick={() => setFormData(prev => ({ ...prev, visitTime: slot }))}
                        >
                          {slot}
                        </button>
                      ))
                    ) : (
                      <p className={styles.noSlots}>No time slots available for this date</p>
                    )}
                  </div>
                </div>
              )}

              <div className={styles.formGroup}>
                <label htmlFor="duration">Visit Duration *</label>
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                >
                  {visitDurations.map(duration => (
                    <option key={duration.value} value={duration.value}>
                      {duration.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="purpose">Purpose of Visit *</label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  required
                >
                  {visitPurposes.map(purpose => (
                    <option key={purpose} value={purpose}>
                      {purpose}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formActions}>
                <button type="button" className="btn btn-outline" onClick={prevStep}>
                  ← Back
                </button>
                <button 
                  type="button" 
                  className="btn" 
                  onClick={nextStep}
                  disabled={!formData.visitDate || !formData.visitTime}
                >
                  Review Booking →
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className={styles.formStep}>
              <h2 className={styles.stepTitle}>Review & Confirm</h2>
              
              <div className={styles.reviewSection}>
                <h3>Visitor Details</h3>
                <p><strong>Name:</strong> {formData.visitorName}</p>
                <p><strong>Email:</strong> {formData.visitorEmail}</p>
                <p><strong>Phone:</strong> {formData.visitorPhone}</p>
                <p><strong>Guests:</strong> {formData.numberOfGuests}</p>
              </div>

              <div className={styles.reviewSection}>
                <h3>Visit Details</h3>
                <p><strong>Date:</strong> {new Date(formData.visitDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
                <p><strong>Time:</strong> {formData.visitTime}</p>
                <p><strong>Duration:</strong> {formData.duration} minutes</p>
                <p><strong>Purpose:</strong> {formData.purpose}</p>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="specialRequests">Special Requests (Optional)</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows="4"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Any special requirements or requests? (e.g., wheelchair access, language preferences)"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.checkbox}>
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleInputChange}
                    required
                  />
                  <span>I agree to the terms and conditions and confirm the booking details *</span>
                </label>
              </div>

              <div className={styles.formActions}>
                <button type="button" className="btn btn-outline" onClick={prevStep}>
                  ← Back
                </button>
                <button 
                  type="submit" 
                  className="btn btn-secondary"
                  disabled={!formData.agreedToTerms}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default ScheduleVisit