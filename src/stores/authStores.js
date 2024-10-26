import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { config, url } from '@/apis/ApiUrls'

class AuthStore {
  user = null
  loading = false
  error = null

  constructor() {
    makeAutoObservable(this)
  }

  async login(email, password) {
    this.loading = true
    this.error = null

    try {
      const res = await axios.post(config.API_URL + "/" + url.login, {
        email,
        password
      })
      this.user = res.data.user
      console.log(res)
    } catch (error) {
      this.error = error.res?.data?.message || 'Login failed, Try again!'
    } finally {
      this.loading = false
    }
  }

  async register(username, email, password, first_name, last_name) {
    this.loading = true
    this.error = null
    try {
      const res = await axios.post(`${config.API_URL}/${url.register}`, {
        username, email, password, first_name, last_name
      })
      console.log(res)
      this.user = res.data.user
    } catch (error) {
      console.error(error)
      this.error = error.res?.data?.message || 'Registration failed, please try again!'
    } finally {
      this.loading = false
    }
  }

  logout() {
    this.user = null
  }
}

const authStore = new AuthStore()
export default authStore
