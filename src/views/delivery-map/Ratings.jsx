'use client';

import { Button, Grid, Rating, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import tripStore from '@/stores/tripsStore';

export default function RatingComponent() {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitRating = async () => {
    if (!rating || !comment) {
      alert('Please provide a rating and a comment.');
      return;
    }

    try {
      await tripStore.rateTheTrip(rating, comment, userId);
      alert('Rating submitted successfully!');
      setRating(null);
      setComment('');
    } catch (error) {
      console.error('Error submitting rating:', error);
      alert('Failed to submit rating. Please try again.');
    }
  };

  return (
    <Grid>
      <Typography variant="h6" className="mb-2 font-bold">
        Rate Your Trip
      </Typography>
      <Rating
        name="trip-rating"
        value={rating}
        onChange={handleRatingChange}
        className="mb-2"
      />
      <TextField
        label="Comment"
        multiline
        rows={2}
        variant="outlined"
        fullWidth
        value={comment}
        onChange={handleCommentChange}
        className="mb-2"
      />
      <Button size="small" variant="contained" onClick={handleSubmitRating} color="primary">
        Submit
      </Button>
    </Grid>
  );
}
