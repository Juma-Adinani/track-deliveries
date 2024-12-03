'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Box, Typography, Button, Card, CardContent, CircularProgress } from '@mui/material'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { observer } from 'mobx-react-lite'
import tripStore from '@/stores/tripsStore'
import RatingComponent from '@/views/delivery-map/Ratings'
import { useParams, useRouter } from 'next/navigation'
import { tripsData } from '@/apis/trips'

const markerIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
})

const TripDetails = observer(() => {
  const router = useRouter()
  const { tripId } = useParams()

  const [tripData, setTripData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [mapMarkers, setMapMarkers] = useState([])
  const mapRef = useRef(null)

  const getTripDetails = async () => {
    try {
      if (!tripId) return

      setLoading(true)
      await tripStore.getTripDetails(tripId)
      const trips = tripStore.trips

      const markers = []

      if (trips.current_location) {
        markers.push({
          position: [trips.current_location.coordinates[1], trips.current_location.coordinates[0]],
          popup: 'Current Location'
        })
      }

      if (trips.start_point) {
        markers.push({
          position: [trips.start_point.coordinates[1], trips.start_point.coordinates[0]],
          popup: trips.start_point_address
        })
      }

      if (trips.end_point) {
        markers.push({
          position: [trips.end_point.coordinates[1], trips.end_point.coordinates[0]],
          popup: trips.end_point_address
        })
      }

      setTripData(trips)
      setMapMarkers(markers)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getTripDetails()
  }, [tripId])

  useEffect(() => {
    if (mapMarkers.length > 0 && mapRef.current) {
      const bounds = L.latLngBounds(mapMarkers.map(marker => marker.position))
      mapRef.current.fitBounds(bounds)
    }
  }, [mapMarkers])

  const formatDate = dateString => {
    if (!dateString) return 'N/A'
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  if (loading) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center' mb={3}>
        <CircularProgress />
        <Typography variant='body2' ml={2}>
          Loading trip details...
        </Typography>
      </Box>
    )
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', padding: 4 }}>
        <Typography variant='h6' color='error'>
          {error}
        </Typography>
      </Box>
    )
  }

  if (!tripData) {
    return (
      <Box sx={{ textAlign: 'center', padding: 4 }}>
        <Typography variant='h6'>No trip details available.</Typography>
      </Box>
    )
  }

  return (
    <Box className='p-4' sx={{ backgroundColor: 'transparent', minHeight: '100vh' }}>
      {/* A Map */}
      <Card variant='outlined' sx={{ mb: 3 }}>
        <MapContainer
          ref={mapRef}
          center={[-6.8132633, 39.2784077]}
          zoom={13}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          {mapMarkers.map((marker, index) => (
            <Marker key={index} position={marker.position} icon={markerIcon}>
              <Popup>{marker.popup}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Card>

      {/* Trip Details */}
      <Card variant='outlined' sx={{ mb: 3 }}>
        <CardContent>
          <Box display='flex' alignItems='center'>
            <Typography variant='h6' fontWeight='bold' sx={{ mr: 2 }}>
              Delivery with {tripData.user?.full_name || 'Unknown Driver'}
            </Typography>
            <Box
              component='img'
              src={
                tripData.user?.avatar ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbq3IrAVvxyjg_WQIhKZOBrq8X_H_91GlvSNjo1rxCSj3839RR3hsDWxPQaIMO1amuyM&usqp=CAU'
              }
              alt='user_image'
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
          </Box>
          <Typography variant='body2' color='textSecondary' mb={2}>
            Tracking no: {tripData.tracking_no || ''}
          </Typography>
          <Typography variant='body2' color='textSecondary' mb={2}>
            {formatDate(tripData.created)} • {tripData.status || 'Unknown'}
          </Typography>
        </CardContent>
      </Card>

      {/* Trip Route */}
      <Card variant='outlined' sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant='body1'>
            <strong>Pickup: </strong>
            {tripData.start_point_address || 'N/A'}
          </Typography>
          <Typography variant='body1'>
            <strong>Dropoff: </strong>
            {tripData.end_point_address || 'N/A'}
          </Typography>
        </CardContent>
      </Card>

      {/* Driver Details */}
      <Card variant='outlined' sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant='body1' fontWeight='bold'>
            Driver details
          </Typography>
          <Box display='flex' alignItems='center'>
            <Typography variant='body2' fontWeight='bold' sx={{ mr: 2 }}>
              {tripData.driver?.full_name || 'Unknown Driver'}
              <span>&nbsp;</span>({tripData.driver?.rating || ''} ★)
            </Typography>
            <Box
              component='img'
              src={
                tripData.driver?.avatar ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbq3IrAVvxyjg_WQIhKZOBrq8X_H_91GlvSNjo1rxCSj3839RR3hsDWxPQaIMO1amuyM&usqp=CAU'
              }
              alt='user_image'
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
          </Box>

          {/* <Typography variant='body2'>
            <strong>{tripData.driver?.full_name || ''}</strong>
          </Typography> */}
          <Typography variant='body2' color='textSecondary'>
            Vehicle: {tripData.vehicle?.vehicle_plate_no || 'N/A'}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            Fare: KES {tripData.data.trip_cost?.amount || 'N/A'}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            Discount: KES {tripData.data.trip_cost?.discount || '0'}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            Payment: {tripData.payment_variant?.variant || ''}
          </Typography>
          <div className='mt-2'>
            <RatingComponent driverId={tripData.driver?.id || 1} />
          </div>
        </CardContent>
      </Card>

      {/* Help Button */}
      <Button variant='contained' color='primary' onClick={() => alert('Get Help with Trip')}>
        Get Help with Trip{' '}
      </Button>
    </Box>
  )
})

export default TripDetails
