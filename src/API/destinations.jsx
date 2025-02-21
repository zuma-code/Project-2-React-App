import axios from "axios"
import { BACK_API } from "."

export const fetchDestinations = async () => {
    const destinations = await axios.get(`${BACK_API}/destinations`)
    return destinations.data
}