'use client'

import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import tripStore from '@/stores/tripsStore'
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  InputBase,
  Divider,
  CircularProgress
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'

const TripList = observer(() => {
  const [filter, setFilter] = useState('All')
  const [trips, setTrips] = useState([])

  const getTrips = async () => {
    await tripStore.getTrips()
    setTrips(tripStore.trips)
  }

  useEffect(() => {
    getTrips()
  }, [])

  console.log('The trips loaded are: ' + JSON.stringify(trips))

  return (
    <Box className='p-4 md:p-8 min-h-screen'>
      {/* Search and Filter Bar */}
      <Box display='flex' alignItems='center' justifyContent='space-between' mb={2}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <InputBase placeholder='Search...' fullWidth />
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Box>

      {/* Filter Buttons */}
      <Box display='flex' justifyContent='center' mb={3}>
        {['All', 'Pending', 'Processing', 'Accepted'].map(category => (
          <Button
            key={category}
            onClick={() => setFilter(category)}
            variant={filter === category ? 'contained' : 'outlined'}
            sx={{
              borderRadius: 20,
              mx: 0.5,
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: filter === category ? 'bold' : 'normal'
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

      {/* Trip List */}
      <Grid container spacing={2}>
        {trips.map(trip => (
          <Grid item xs={12} key={trip.id}>
            <Card variant='outlined'>
              <CardContent>
                <Typography variant='body1' fontWeight='bold'>
                  {trip.pickup}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  {trip.date} • {trip.type}
                </Typography>
                <Typography variant='body2' color='textSecondary' mb={1}>
                  {trip.price} {trip.status && `• ${trip.status}`}
                </Typography>
                {trip.additionalInfo && (
                  <Typography variant='body2' color='textSecondary'>
                    {trip.additionalInfo}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
})

export default TripList
