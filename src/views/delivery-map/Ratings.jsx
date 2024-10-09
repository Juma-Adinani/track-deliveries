'use client'
import { Button, Grid, Paper, Rating, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function RatingComponent() {
  const [rating, setRating] = useState(null)
  const [comment, setComment] = useState('')

  const handleRatingChange = event => {
    setRating(newValue)
  }

  const handleCommentChange = event => {
    setComment(event.target.value)
  }

  const handleSubmitRating = () => {
    console.log('Rating:', rating)
    console.log('Comment:', comment)
    setComment('')
  }

  return (
    <Grid>
      <Typography variant='h6' className='mb-2 font-bold'>
        Rate Your Trip
      </Typography>
      <Rating name='trip-rating' value={rating} onChange={handleRatingChange} className='mb-2' />
      <TextField
        label='Comment'
        multiline
        rows={2}
        variant='outlined'
        fullWidth
        value={comment}
        onChange={handleCommentChange}
        className='mb-2'
      />
      <Button size='small' variant='contained' onClick={handleSubmitRating} color='primary'>
        Submit
      </Button>
    </Grid>
  )
}
