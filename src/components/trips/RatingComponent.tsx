import { Button, Paper, Rating, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function RatingComponent() {

    const [rating, setRating] = useState<number | null>(null);
    const [comment, setComment] = useState("");

    const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
        setRating(newValue);
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment(event.target.value);
    };

    const handleSubmitRating = () => {
        console.log("Rating:", rating);
        console.log("Comment:", comment);
        setComment("");
    };

    return (
        <Paper
            elevation={3}
            className="ratingTrip w-full lg:w-[400px] md:w-[300px] sm:w-[200px] lg:absolute lg:bottom-5 lg:left-4 lg:overflow-auto z-[1000] bg-white opacity-90 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-4 w-full p-4">
                <Typography variant="h6" className="text-gray-900 mb-2 font-bold">
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
                <div className="flex justify-end mt-3">
                    <Button size="small" variant="contained" onClick={handleSubmitRating} color="primary">
                        Submit
                    </Button>
                </div>
            </div>
        </Paper>
    )
}
