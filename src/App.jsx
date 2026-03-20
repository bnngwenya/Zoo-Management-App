import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import ErrorBoundary from './components/Common/ErrorBoundary'
import LoadingSpinner from './components/Common/LoadingSpinner'
import Layout from './components/Layout/Layout'

// Lazy load pages for better performance
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'))
const AnimalList = lazy(() => import('./components/Animals/AnimalList'))
const AnimalDetails = lazy(() => import('./components/Animals/AnimalDetails'))
const ScheduleVisit = lazy(() => import('./components/Booking/ScheduleVisit'))

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/animals" element={<AnimalList />} />
                <Route path="/animals/:id" element={<AnimalDetails />} />
                <Route path="/schedule/:id" element={<ScheduleVisit />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App