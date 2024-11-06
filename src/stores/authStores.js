import { makeAutoObservable } from 'mobx'
import { config, url } from '@/apis/ApiUrls'

class AuthStore {
  user = null
  loading = false
  error = null
  token = localStorage.getItem('token') || null

  constructor() {
    makeAutoObservable(this)
    if (this.token) {
      this.fetchUserProfile()
    }
  }

  async login(username, password) {
    this.loading = true
    this.error = null

    try {
      const response = await fetch(`${config.API_URL}/${url.login}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Login failed, try again!')
      }

      const data = await response.json()
      this.user = data.user
      this.token = data.token

      localStorage.setItem('token', this.token)
      console.log('Logged in successfully', data)
    } catch (error) {
      this.error = error.message
    } finally {
      this.loading = false
    }
  }

  async register(username, email, password, first_name, last_name) {
    this.loading = true
    this.error = null

    try {
      const response = await fetch(`${config.API_URL}/${url.register}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          first_name,
          last_name,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Registration failed, please try again!')
      }

      const data = await response.json()
      this.user = data.user
      this.token = data.token

      // Store the token in localStorage
      localStorage.setItem('token', this.token)
      console.log('Registered successfully', data)
    } catch (error) {
      console.error(error)
      this.error = error.message
    } finally {
      this.loading = false
    }
  }

  async fetchUserProfile() {
    if (!this.token) return

    try {
      const response = await fetch(`${config.API_URL}/${url.profile}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        this.user = data.user
      } else {
        console.log("Failed to fetch user profile");
        // throw new Error('Failed to fetch user profile')
      }
    } catch (error) {
      this.error = error.message
    }
  }

  logout() {
    this.user = null
    this.token = null
    localStorage.removeItem('token')
    console.log('Logged out successfully')
  }
}

const authStore = new AuthStore()
export default authStore
