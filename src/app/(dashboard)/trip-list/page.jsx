'use client'

import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  CircularProgress
} from '@mui/material'
import tripStore from '../../../stores/tripsStore'

const formatDate = (dateString) => {
  const options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }
  return new Date(dateString).toLocaleString('en-US', options).toUpperCase()
}

const TripList = observer(() => {
  const [filter, setFilter] = useState('All')
  const [trips, setTrips] = useState([])

  const getTrips = async () => {
    try {
      await tripStore.getTrips()
      setTrips(tripStore.trips)
    } catch (error) {
      console.log('There is an error: ', error)
    }
  }

  useEffect(() => {
    getTrips()
  }, [])

  return (
    <Box className="p-4 md:p-8 min-h-screen">
      {/* Filter Buttons */}
      <Box display="flex" justifyContent="center" mb={3}>
        {['All', 'Pending', 'Processing', 'Accepted'].map((category) => (
          <Button
            key={category}
            onClick={() => setFilter(category)}
            variant={filter === category ? 'contained' : 'outlined'}
            sx={{
              borderRadius: 20,
              mx: 0.5,
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: filter === category ? 'bold' : 'normal',
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Loading Indicator */}
      {tripStore.loading && (
        <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
          <CircularProgress />
          <Typography variant="body2" ml={2}>
            Loading trips...
          </Typography>
        </Box>
      )}

      {/* Error Message */}
      {tripStore.error && (
        <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
          <Typography variant="body2" color="error">
            {tripStore.error}
          </Typography>
        </Box>
      )}

      {/* Trip List */}
      <Grid container spacing={2}>
        {trips.map((trip) => (
          <Grid item xs={12} key={trip.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body1" fontWeight="bold">
                  {trip.pickup ?? 'pickup'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <span>
                    <strong>Start Point: </strong>
                    {trip.start_point_address ?? 'start'}
                  </span>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <span>
                    <strong>End Point: </strong>
                    {trip.end_point_address ?? 'end'}
                  </span>
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={1}>
                  <span>
                    <strong>Route status: </strong>
                    {trip.status && `${trip.status}`}
                  </span>
                </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <span>
                      <strong>Cargo: </strong>
                      {'note'}
                    </span>
                  </Typography>
                <Typography variant="body2" color="textSecondary">
                  <span>
                    <strong>Date: </strong>
                    {formatDate(trip.created ?? '2024-05-23T16:37:05.454496+03:00')}
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
})

export default TripList
