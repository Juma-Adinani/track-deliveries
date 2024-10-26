import { config, url } from "@/apis/ApiUrls";
import { makeAutoObservable } from "mobx";

class TripStore {
    trips = [];
    loading = [];
    error = null;

    constructor() {
        makeAutoObservable(this)
    }

    async getTrips() {
        this.loading = true
        this.error
        try {
            const res = await axios.get(config.API_URL + '/' + url.trips.Trip);
            console.log(res.data)
        } catch (error) {
            console.error(error)
            this.error = error.response?.data?.message || 'Something went wrong!'
        } finally {
            this.loading = false
        }
    }
}

const tripStore = new TripStore();
export default tripStore
