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
      const response = await fetch(`${config.API_URL}/${url.trips.Trip}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authStore.token}`,
        },
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error("Something went wrong!: " + JSON.stringify(errorData))
        throw new Error(errorData.message || 'Failed to fetch trips')
      }

      const data = await response.json()
      this.trips = data
      console.log('Fetched trips successfully', data)
    } catch (error) {
      console.error(error)
      this.error = error.message
    } finally {
      this.loading = false
    }
  }
}

const tripStore = new TripStore()
export default tripStore
