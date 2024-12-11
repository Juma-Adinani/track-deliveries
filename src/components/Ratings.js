'use client';

import { Button, Grid2, Rating, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import tripStore from '@/stores/tripsStore';

export default function RatingComponent({ driverId }) {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

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
      await tripStore.rateTheTrip(rating, comment, driverId)
      alert('Rating submitted successfully!');
      setRating(null);
      setComment('');
    } catch (error) {
      console.error('Error submitting rating:', error);
      alert('Failed to submit rating. Please try again.');
    }
  };

  return (
    <Grid2>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Rate Trip
      </Typography>
      <Rating
        name="trip-rating"
        value={rating}
        onChange={handleRatingChange}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Comment"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={comment}
        onChange={handleCommentChange}
        sx={{ mb: 2, height:50 }}
      />
      <Button
        size="small"
        variant="contained"
        onClick={handleSubmitRating}
        color="primary"
        sx={{
          textTransform: "none",
          fontSize: "0.9rem",
          fontWeight: "bold",
          padding: "8px 16px",
        }}
      >
        Submit
      </Button>
    </Grid2>
  );
}