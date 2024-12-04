'use client'

import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Box, Typography, Button, Card, CardContent, Grid, CircularProgress, IconButton, Divider } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import tripStore from '../../../stores/tripsStore'
import { useRouter } from 'next/navigation'

const formatDate = dateString => {
  const options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }
  return new Date(dateString).toLocaleString('en-US', options).toUpperCase()
}

const TripList = observer(() => {
  const [filter, setFilter] = useState('')
  const [trips, setTrips] = useState([])

  const router = useRouter()

  const handleNavigation = tripId => {
    router.push(`/trip-details/${tripId}`)
  }

  const getTrips = async () => {
    try {
      await tripStore.getTrips(filter)
      setTrips(tripStore.trips)
    } catch (error) {
      console.log('There is an error: ', error)
    }
  }

  useEffect(() => {
    getTrips()
  }, [filter])

  const filterMapping = {
    All: '',
    Pending: 'pending',
    Processing: 'processing',
    Accepted: 'accepted'
  }

  return (
    <Box className='md:p-8 min-h-screen'>
      {/* Header */}
      <Box textAlign='center' mb={5}>
        <Typography variant='h4' fontWeight='bold' color='primary' mb={2}>
          Trip Activities
        </Typography>
        <Typography variant='body1' color='textSecondary'>
          {/* Explore and manage your trips effortlessly. */}
        </Typography>
      </Box>

      {/* Filter Buttons */}
      <Box display='flex' justifyContent='center' mb={3} flexWrap='wrap'>
        {Object.keys(filterMapping).map(category => (
          <Button
            key={category}
            onClick={() => setFilter(filterMapping[category])}
            variant={filter === filterMapping[category] ? 'contained' : 'outlined'}
            color='primary'
            sx={{
              borderRadius: 20,
              mx: 0.5,
              my: 0.5,
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: filter === filterMapping[category] ? 'bold' : 'normal',
              px: 2.5
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Loading Indicator */}
      {tripStore.loading && (
        <Box display='flex' justifyContent='center' alignItems='center' mb={3}>
          <CircularProgress />
          <Typography variant='body2' ml={2}>
            Loading trips...
          </Typography>
        </Box>
      )}

      {/* Error Message */}
      {tripStore.error && (
        <Box display='flex' justifyContent='center' alignItems='center' mb={3}>
          <Typography variant='body2' color='error'>
            {tripStore.error}
          </Typography>
        </Box>
      )}

      {/* No Trips Message */}
      {!tripStore.loading && trips.length === 0 && (
        <Box display='flex' justifyContent='center' alignItems='center' mb={3}>
          <Typography variant='body1' color='textSecondary'>
            No trips available at the moment.
          </Typography>
        </Box>
      )}

      {/* Trip List */}

<Grid container spacing={3}>
  {trips.map((trip, index) => (
    <Grid item xs={12} key={trip.id}>
      <Box py={2}>
        <Typography variant="body1" fontWeight="bold" color="primary" gutterBottom>
          {trip.pickup ?? 'Pickup Location'}
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={1}>
          <strong>Start Point:</strong> {trip.start_point_address ?? 'Unknown'}
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={1}>
          <strong>End Point:</strong> {trip.end_point_address ?? 'Unknown'}
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={1}>
          <strong>Status:</strong> {trip.status ?? 'Pending'}
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={2}>
          <strong>Date:</strong> {formatDate(trip.created)}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            onClick={() => handleNavigation(trip.id)}
            variant="contained"
            color="primary"
            size="small"
            sx={{
              borderRadius: 20,
              textTransform: 'none',
              fontWeight: 'bold',
              px: 3,
            }}
          >
            View Details
          </Button>
          
          <IconButton onClick={() => handleNavigation(trip.id)} color="primary">
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
      {index !== trips.length - 1 && <Divider sx={{ my: 2 }} />} {/* Adds a divider except after the last item */}
    </Grid>
  ))}
</Grid>

    </Box>
  )
})

export default TripList
