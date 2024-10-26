'use client'
import { tripsData } from '@/apis/trips'
import { DirectionsCar } from '@mui/icons-material'
import { Avatar, Box, Card, Grid, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

export default function TripInfoComponent() {
  function formatDate(dateString) {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  return (
    <Card>
      <Grid item xs={12} md={12} lg={12} className='m-2'>
        <Typography variant='h6' className='mb-1 font-bold'>
          Current Trip Info
        </Typography>
        <Typography variant='body2' className='mb-4 px-4'>
          Rider: {tripsData.driver.full_name} <br />
          Estimated Arrival: {new Date().toLocaleTimeString()} <br />
          Trip Duration: {tripsData.trip_duration_min} minutes
        </Typography>
        <List>
          <Box key={tripsData.service_type}>
            <Typography variant='h6' className='font-semibold'>
              Trip History
            </Typography>
            <ListItem>
              <Avatar className='bg-green-500 mr-3'>
                <DirectionsCar />
              </Avatar>
              <ListItemText
                primary={
                  <Typography variant='subtitle1' className='font-bold'>
                    Trip from: {tripsData.start_point_address} <br />
                    To: {tripsData.end_point_address}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography variant='body2'>
                      Status:{' '}
                      <span className='font-medium text-green-600'>
                        {tripsData.statuses[tripsData.statuses.length - 1].state}
                      </span>
                    </Typography>
                    <Typography variant='body2'>
                      Driver: {tripsData.driver.full_name} ({tripsData.driver.phone})
                    </Typography>
                    <Typography variant='body2'>Start: {formatDate(tripsData.start_time)}</Typography>
                    <Typography variant='body2'>End: {formatDate(tripsData.end_time)}</Typography>
                  </>
                }
              />
            </ListItem>
          </Box>
        </List>
      </Grid>
    </Card>
  )
}
