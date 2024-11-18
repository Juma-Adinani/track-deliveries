import { config, url } from "@/apis/ApiUrls"
import { makeAutoObservable } from "mobx"

class AuthStore {
  user = null
  loading = false
  error = null
  token = null

  constructor() {
    makeAutoObservable(this)

    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('token') ?? null
    }

    if (this.token) {
      this.fetchUserProfile()
    }
  }

  async login(username, password) {
    this.loading = true
    this.error = null

    try {
      const response = await fetch(`${config.API_URL}${url.login}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Login failed, try again!')
      }

      this.user = data.user
      this.token = data.access

      if (typeof window !== 'undefined') {
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(this.user));
      }

      console.log('Logged in successfully', JSON.stringify(data))
    } catch (error) {
      this.error = error.message
      console.error('Login error:', error)
    } finally {
      this.loading = false
    }
  }

  async fetchUserProfile() {
    if (!this.token) return

    try {
      const response = await fetch(`${config.API_URL}${url.accounts.User}`, {
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
        this.logout()
      }
    } catch (error) {
      console.error('Profile fetch error:', error)
    }
  }

  logout() {
    this.user = null
    this.token = null

    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
    }

    console.log('Logged out successfully')
  }
}

export default new AuthStore()
