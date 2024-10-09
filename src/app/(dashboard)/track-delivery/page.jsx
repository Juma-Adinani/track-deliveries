// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports

import DeliveryMap from '@/views/delivery-map/DeliveryMap'
import TripInfoComponent from '@/views/delivery-map/TripInfo'
import RatingComponent from '@/views/delivery-map/Ratings'

const TrackDeliveries = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12} lg={12}>
        <DeliveryMap />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={8}>
            <TripInfoComponent />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <RatingComponent />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default TrackDeliveries
