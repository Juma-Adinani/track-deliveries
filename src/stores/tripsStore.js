import { makeAutoObservable } from 'mobx'
import { config, url } from '@/apis/ApiUrls'
import authStore from './authStores'

class TripStore {
  trips = []
  loading = false
  error = null

  constructor() {
    makeAutoObservable(this)
  }

  async getTrips(status) {
    this.loading = true
    this.error = null

    try {
      const response = await fetch(`${config.API_URL}${url.trips.Trip}?status=${status}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authStore.token}`,
        },
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error('Something went wrong!: ' + JSON.stringify(errorData))
      }

      const data = await response.json()
      this.trips = data.results
      console.log(JSON.stringify(this.trips))
    } catch (error) {
      this.error = error.message || 'Unknown error occurred'
      throw new Error(this.error);
    } finally {
      this.loading = false
    }
  }

  async getTripDetails(tripId) {
    this.loading = true
    this.error = null

    try {
      const response = await fetch(`${config.API_URL}${url.trips.Trip}${tripId}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authStore.token}`,
        },
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error('Something went wrong!: ' + JSON.stringify(errorData))
      }

      const data = await response.json()
      this.trips = data
      console.log(JSON.stringify(this.trips))
    } catch (error) {
      this.error = error.message || 'Unknown error occurred'
      throw new Error(this.error);

    } finally {
      this.loading = false
    }
  }

  async rateTheTrip(rateValue, comment, userId) {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch(`${config.API_URL}${url.reviews.Review}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authStore.token}`,
        },
        body: JSON.stringify({
          rating: rateValue,
          comment: comment,
          reviewing: userId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error('Error rating the trip: ' + JSON.stringify(errorData));
      }

      const data = await response.json();
      console.log('Trip rated successfully:', JSON.stringify(data));
      return data;
    } catch (error) {
      console.error('Error submitting trip rating:', error);
      this.error = error.message || 'Failed to rate the trip';
      throw new Error(this.error);
    } finally {
      this.loading = false;
    }
  }
}

const tripStore = new TripStore()
export default tripStore