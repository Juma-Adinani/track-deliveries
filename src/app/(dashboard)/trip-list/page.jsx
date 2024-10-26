"use client"

import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import tripStore from '@/stores/tripsStore'
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material'

const dummyData = [
  {
    id: 1,
    pickup: 'Makumbusho',
    destination: 'Posta',
    distance: '12 km',
    price: 'TZS 15,000'
  },
  {
    id: 2,
    pickup: 'Kitaambaa Cheupe - Sinza',
    destination: 'Kitambaa Cheupe - Tabata',
    distance: '8 km',
    price: 'TZS 10,000'
  },
  {
    id: 3,
    pickup: 'Masaki',
    destination: 'Airport',
    distance: '15 km',
    price: '20,000,000'
  }
]

const TripList = observer(() => {
  const [trips, setTrips] = useState(dummyData)

  useEffect(() => {
    tripStore.getTrips().then(data => setTrips(data || dummyData))
  }, [])

  return (
    <Box className='p-4 md:p-8 min-h-screen'>
      <Typography variant='h4' className='font-bold mb-6 text-center'>
        Available Trips
      </Typography>

      <Grid container spacing={4}>
        {trips.map(trip => (
          <Grid item xs={12} md={4} key={trip.id}>
            <Card className='shadow-lg hover:shadow-xl transition-shadow duration-200'>
              <CardContent>
                <Typography variant='h6' className='font-semibold mb-2'>
                  From: {trip.pickup}
                </Typography>
                <Typography variant='h6' className='font-semibold mb-2'>
                  To: {trip.destination}
                </Typography>
                <Typography className='mb-1'>Distance: {trip.distance}</Typography>
                <Typography className='mb-4'>Price: {trip.price}</Typography>

                <Button
                  variant='contained'
                  color='primary'
                  className='w-full mt-4'
                  onClick={() => alert(`Viewing details for trip ${trip.id}`)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
})

export default TripList
