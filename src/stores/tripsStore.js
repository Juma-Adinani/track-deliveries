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

  async getTrips() {
    this.loading = true
    this.error = null

    try {
      const response = await fetch(`${config.API_URL}${url.trips.Trip}36/`, {
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
    } catch (error) {
      console.error('Error fetching trips:', error)
      this.error = error.message || 'Unknown error occurred'
    } finally {
      this.loading = false
    }
  }
}

const tripStore = new TripStore()
export default tripStore
