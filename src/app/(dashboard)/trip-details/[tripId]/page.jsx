'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CircularProgress } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { observer } from 'mobx-react-lite';
import tripStore from '@/stores/tripsStore';
import RatingComponent from '@/views/delivery-map/Ratings';
import { useParams, useRouter } from 'next/navigation';

// Custom marker icon for Leaflet
const markerIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const TripDetails = observer(() => {
  const router = useRouter();
  const { tripId } = useParams();

  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mapMarkers, setMapMarkers] = useState([]);

  const getTripDetails = async () => {
    console.log(tripId)
    try {
      if (!tripId) return;

      setLoading(true);
      await tripStore.getTripDetails(tripId);
      const trips = tripStore.trips;

      // Add markers logic
      const markers = [];
      if (trips.vehicle_trips && trips.vehicle_trips.length > 0) {
        trips.vehicle_trips.forEach((trip) => {
          markers.push({
            position: [trip.startLat, trip.startLon],
            popup: `Start: ${trip.startAddress || 'Unknown'}`,
          });
          markers.push({
            position: [trip.endLat, trip.endLon],
            popup: `End: ${trip.endAddress || 'Unknown'}`,
          });
        });
      } else if (trips.user_device_trips && trips.user_device_trips.length > 0) {
        trips.user_device_trips.forEach((trip) => {
          markers.push({
            position: [trip.startLat, trip.startLon],
            popup: `Start: ${trip.startAddress || 'Unknown'}`,
          });
          markers.push({
            position: [trip.endLat, trip.endLon],
            popup: `End: ${trip.endAddress || 'Unknown'}`,
          });
        });
      } else if (trips.current_location) {
        markers.push({
          position: [trips.current_location.coordinates[1], trips.current_location.coordinates[0]],
          popup: 'Current Location',
        });
      }

      setTripData(trips);
      setMapMarkers(markers);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTripDetails();
  }, [tripId]);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
        <CircularProgress />
        <Typography variant="body2" ml={2}>
          Loading trip details...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', padding: 4 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  if (!tripData) {
    return (
      <Box sx={{ textAlign: 'center', padding: 4 }}>
        <Typography variant="h6">No trip details available.</Typography>
      </Box>
    );
  }

  return (
    <Box className="p-4" sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Trip Details */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Delivery with {tripData.user?.full_name || 'Unknown Driver'}
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            Tracking no: {tripData.trackingNo || 'N/A'}
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            {formatDate(tripData.created)} • {tripData.status || 'Unknown'}
          </Typography>
        </CardContent>

        {/* Map */}
        <MapContainer center={[-6.743, 39.24]} zoom={13} style={{ height: '300px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {mapMarkers.map((marker, index) => (
            <Marker key={index} position={marker.position} icon={markerIcon}>
              <Popup>{marker.popup}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Card>

      {/* Trip Route */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="body1">
            <strong>Pickup: </strong>
            {tripData.vehicle_trips?.[0]?.startAddress || 'N/A'}
          </Typography>
          <Typography variant="body1">
            <strong>Dropoff: </strong>
            {tripData.vehicle_trips?.[0]?.endAddress || 'N/A'}
          </Typography>
        </CardContent>
      </Card>

      {/* Driver Details */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="body1" fontWeight="bold">
            Driver details
          </Typography>
          <Typography variant="body2">
            <strong>{tripData.driver?.full_name || ''}</strong> ({tripData.driver?.rating || 'N/A'} ★)
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Vehicle: {tripData.vehicle?.vehicle_plate_no || 'N/A'}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Fare: KES {tripData.data.trip_cost?.amount || 'N/A'}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Discount: KES {tripData.data.trip_cost?.discount || '0'}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Payment: {tripData.payment_variant?.variant || ''}
          </Typography>
          <div className="mt-2">
            <RatingComponent />
          </div>
        </CardContent>
      </Card>

      {/* Help Button */}
      <Button variant="contained" color="primary" fullWidth onClick={() => alert('Get Help with Trip')}>
        Get Help with Trip
      </Button>
    </Box>
  );
});

export default TripDetails;
