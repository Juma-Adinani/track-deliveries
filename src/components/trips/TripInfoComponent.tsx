import { tripsData } from '@/api';
import { DirectionsCar } from '@mui/icons-material'
import { Avatar, Box, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

export default function TripInfoComponent() {

    function formatDate(dateString: string) {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleString();
    }

    return (
        <Paper
            elevation={3}
            className="tripHistory w-full lg:w-[400px] md:w-[300px] lg:h-[80%] md:h-[70%] h-auto lg:absolute lg:bottom-16 lg:left-4 lg:overflow-y-auto lg:z-[1000] bg-white opacity-90 rounded-lg shadow-xl"
        >
            <div className="grid grid-cols-[1fr_auto] items-center p-4">
                <Typography variant="h6" className="text-gray-800 mb-1 font-bold">
                    Current Trip Info
                </Typography>
            </div>
            <Typography variant="body2" className="text-gray-700 mb-4 px-4">
                Rider: {tripsData.driver.full_name} <br />
                Estimated Arrival: {new Date().toLocaleTimeString()} <br />
                Trip Duration: {tripsData.trip_duration_min} minutes
            </Typography>
            <List>
                <Box key={tripsData.service_type} className="bg-gray-50 rounded-lg shadow-sm p-5 mb-4">
                    <Typography variant="h6" className="font-semibold text-gray-800">
                        Trip History
                    </Typography>
                    <ListItem>
                        <Avatar className="bg-green-500 mr-3">
                            <DirectionsCar />
                        </Avatar>
                        <ListItemText
                            primary={
                                <Typography variant="subtitle1" className="font-bold text-gray-900">
                                    Trip from: {tripsData.start_point_address} <br />
                                    To: {tripsData.end_point_address}
                                </Typography>
                            }
                            secondary={
                                <>
                                    <Typography variant="body2" className="text-gray-700">
                                        Status: <span className="font-medium text-green-600">
                                            {tripsData.statuses[tripsData.statuses.length - 1].state}
                                        </span>
                                    </Typography>
                                    <Typography variant="body2" className="text-gray-700">
                                        Driver: {tripsData.driver.full_name} ({tripsData.driver.phone})
                                    </Typography>
                                    <Typography variant="body2" className="text-gray-700">
                                        Start: {formatDate(tripsData.start_time)}
                                    </Typography>
                                    <Typography variant="body2" className="text-gray-700">
                                        End: {formatDate(tripsData.end_time)}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                </Box>
            </List>
        </Paper>
    )
}
